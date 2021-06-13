I spend something like 10 hours to partialy solve a problem with Heroku and their slug size. I'm making this note for those who could have the same problem and don't know where to watch or for whom no solution on the web had make significant size loses on their slug. 

Slugs are compressed and pre-package copies of an application, optimized for distribution to the dyno manager on Heroku. This help scaling application accross multiples dynos. 

Heroku limit the slug size to 500MB after compression, with a soft limit at 300MB. When your application reach these 500MB, Heroku unallow deployment. That's what happen to my Rails application. 

You can see your actual slug size in the Settings pane on your Heroku dashboard. Keep in mind that's the actual slug size, and not what it would be after build. The one that matter and cause problem is the one that results of the compression.

So what to do and where are the culprits? 

## Static assets
Static assets like videos, images, `.pdf`, `.psd` etc, in the assets or public folder, if too heavy, can be something that drive the slug size so high. 

Serving assets using a cloud, like AWS S3 or a CDN like AWS Cloudfront can drasticaly improve the slug size. 

## Slugignore
The `.slugignore` is a file to put at the root folder of your app that works exactly like `.gitignore`.  It will tell the slug compiler to ignore the files in it, like this : 

```text
# This is a comment
*.psd
*.pdf
/test
/spec
```

You'll mostly end up ignoring things like `node_modules`, `docs`, binaries or compressed archives. Note that you don't have to duplicate what's in your `.gitignore`, because, if it's ignored by Git, it wouldn't be compressed in the app. `.slugignore` is something that comes in addition. 

## Purge cache
Buildpacks can sometimes cache content, like app dependencies to speed up future builds. This take some size. You can purge the cache using Heroku CLI :
```bash
$ heroku plugins:install heroku-builds
$ heroku builds:cache:purge
```

You can also purge de repo cache using [Heroku Repo](https://github.com/heroku/heroku-repo) :
```bash
$ heroku plugins:install heroku-repo
$ heroku repo:gc -a appname
$ heroku repo:purge_cache -a appname
```

This would need to be commited. So run it within a commit. If you don't have anything to push, you can create an empty commit using : 
```bash
$ git commit --allow-empty -m "empty commit"
```

Then push to Heroku to trigger the build. 

## Removing dependencies
Ruby gems can sometimes be very big. I ended up with a 490MB slug size after doing everything before. I figured out that 40% of thez slug size was caused by three gems :
- `wkhtmltopdf-binary`
- `sassc-ruby`
- `google-api-client`

Obviously, I need it, so I can't just throw it out the window. What cause `wkhtmltopdf-binary` and `sassc-ruby` being so big is mostly their compiled files. For `google-api-client`, it's because they're providing every API client from Google inside this single gem. So if you use it only for Sheet i.e, you end up with all the others library. The four biggest are :
- `compute_alpha`
- `compute_beta`
- `compute_v1`
- `dfareporting_v3_4`
- `dfareporting_v3_3`
- `content_v2_1`

Unfortunately, you can't just choose the one you want to liberate some space, you have to delete them by hand, using some of the technics below, or ignoring it using the `.slugignore` file. 

For `sassc-ruby` there's [an open issue](https://github.com/sass/sassc-ruby/issues/200). You can upvote it to get it solved faster. 

## Bundle only what you need

Heroku accepts env variables so you can limit what you're caching during the bundle. 
Bundle only your production group using this command :
```bash
$ heroku config:set BUNDLE_WITHOUT="development:test" --app your-app-name
```

## Finding bloats 

It's important to also know what to chase after and make improvements on what's really big in your repo. You can SSH into your Heroku repo :
```bash
$ heroku run bash
```

Then, use this command to sort your folder by size desc :
```bash
$ du -hs * | sort -hr
```

I manualy deleted every `.o` files in the `sassc-ruby` gem folder using this command (be **careful** with this one, try without `-delete` before):
```
$ find . -name "*.o" -type f -delete
```

I removed directories in the `google-api-client` using this command (same, careful here): 
```
$ rm -r mydir
```

Browse everywhere there's a big amount of data until you find what's causing the bloats. If you mostly find static assets that are easy to delete, this is great and easy. If you find that it's mostly gems and important files, (like me) that's another thing. You'll maybe have to do some other things. 

## Rake tasks
The `.slugignore` is rolled up before the buildpack runs, so, if it's your buildpack that's adding weight to the slug, then, it wouldn't work. So you can use a rake task to clean the things you don't want in your repository, after the buildpacks had run and before the slug is compressed. 

This one remove the `node_module` folder :
```ruby
# cat lib/tasks/assets.rake
# Adapted from https://github.com/heroku/heroku-buildpack-ruby/issues/792

namespace :assets do
  desc "Remove 'node_modules' folder"
  task rm_node_modules: :environment do
    Rails.logger.info "Removing node_modules folder"
    FileUtils.remove_dir("node_modules", true)
  end
end

skip_clean = %w(no false n f).include?(ENV["WEBPACKER_PRECOMPILE"])

unless skip_clean
  if Rake::Task.task_defined?("assets:clean")
    Rake::Task["assets:clean"].enhance do
      Rake::Task["assets:rm_node_modules"].invoke
    end
  else
    Rake::Task.define_task("assets:clean" => "assets:rm_node_modules")
  end
end
```

This one removes the compiled files of `sassc-ruby` with the `.o` extension : 
```ruby
# lib/tasks/heroku.rake
# This file was heavily influenced by https://blog.saeloun.com/2020/05/04/how-to-reduce-heroku-slug-size.html

namespace :heroku do
  desc 'Removes extra .o files from native extension builds'
  task :clean_gem_artifacts do
    Bundler.bundle_path.
      glob('**/ext/**/*.o').
      each(&:delete)
  end
end

if Rake::Task.task_defined?('assets:clean')
  Rake::Task['assets:clean'].enhance ['heroku:minify_slug']
else
  Rake::Task.define_task('assets:clean' => 'heroku:minify_slug')
end

```

## Adding a slug-minifier buildpack

Buildpacks are bash scripts designed to build environements executing what need to install languages like Ruby, Node JS, Python etc. Buildpacks are launched by Heroku on a push command, with the order you defined in your application dashboard. 

You can add a slug-minifier buildpack at the end of your buildpack list to achieve some cleaning tasks (like the rake tasks previously). This is what helped me to go under the 500MB! 

I used this [buildpack-slug-cleaner](https://elements.heroku.com/buildpacks/nekopanic/buildpack-slug-cleaner) that extend `.slugignore` to allow the `!` prefix and repurposes it to mean "run after the build", preventing files from reaching the final slug. 

You can add it using this command :
```bash
$ heroku buildpacks:add https://github.com/stevo550/buildpack-slug-cleaner.git
```

Then add the files you want to be deleted to your `.slugignore` file prefixed with a `!`. Here's mine :
```text
!tmp/cache
!app/assets/images
!wkhtmltopdf-darwin-x86
!wkhtmltopdf-linux-x86
*.pdf
*.dump
!docs
!spec
!node_modules
!.cache/yarn
```

Tweak it to match your app specifications. 

⚠️ WARNING : You may have important files deleted in your Heroku repo with this. Make sure you're not pushing to the production. I tested everything on my staging app, so I could rebuild as I want if I added to much paths to my `.slugignore` file.

## Links
- [Ways for reducing Heroku slug size](https://blog.saeloun.com/2020/05/04/how-to-reduce-heroku-slug-size.html)
- [How to spring clean your Heroku slug size](https://johntornow.com/tech/2020/04/heroku-slug-size)
- [Slug compiler - Heroku doc](https://devcenter.heroku.com/articles/slug-compiler)
- [How to reduce alarge Heroku slug size - Thoughtbot](https://thoughtbot.com/blog/how-to-reduce-a-large-heroku-compiled-slug-size)