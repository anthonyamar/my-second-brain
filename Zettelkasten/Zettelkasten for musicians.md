## Zettelkasten note taking method in short
👏   &nbsp; [Clap this article on Medium](https://anthony-amar.medium.com/unleash-your-musicianship-by-applying-the-zettelkasten-method-to-music-b2ec7de6d2dc) 

Since I'm using #Obsidian as my main note talking app and for my digital garden, I discovered several ways of improving my workflows and my creativity, as well as various #productivity and #creativity workflows and methods. 

One that held my attention is the [Zettelkasten](The%20zettelkasten%20method%20and%20how%20to%20take%20smart%20notes.md) method. We owe this method to, among others, [Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann) who was a German sociologist considered as one of the most important social theorists of the 20th century. 

What is impressive about Luhmann, is that he wrote ==more than 70 books and 400 scholarly articles== on a wide variety of subjects such as sociology, art, religion, medias, love, law, politics, etc. by using the zettelkasten note-taking method. 

The system consists of many atomic notes or short pieces of information written on index cards, numbered hierarchically to order it and containing metadata such as tags, stored in drawer cabinets. This kind of organization allowed Luhmann to better review notes and connect way more easily ideas together, thanks to the tag system. Luhmann had around 90,000 index cards for his research. Impressive! 🤯

![zettelkasten_luhmann_boxes](zettelkasten_luhmann_boxes.png)

## How zettelkasten method could unleash musician's creativity and productivity 

Since Luhmann's work, the world evolved, and now, it's obviously easier for us to create a zettelkasten note taking method just by using our computer and phone with a note taking app, whether it's Evernote, Notion, Roam Research or Obsidian.

This methods' usage may be obvious for writers or academics, but it may not be for musicians. How can we use this method, as a musician, to improve our workflow for various use-case from composition to arrangement or even improvisation? 

As musicians, we constantly use our musical knowledge -acquired by practicing chords, scales, rhythms, [music theory](Music%20theory.md) etc- and our influences to connect ideas together and create new musical materials. Whether it's lyrics or pure composition such as [chord progressions](Chords%20progressions.md), melody, chops, or licks while improvising. 

When I was in music school, I used to write, play, and listen to a lot of music, every day. I was collecting musical materials on my phone using the recording app, on my computer using my favorite DAW, making long playlist with inspiring music, keeping a lot of music sheets with various musical materials written on it, classifying samples and chops on tagged folders, etc. And I know I'm not the only musician doing this. In fact, all of my classmates and friends were using this technique, at different levels.

And now that I'm looking back to this period with the acquired knowledge about productivity systems, I can say that this kind of thinking was an embryo of the zettelkasten method, applied to music. 

So what was the problem with my method? The problem was that everything was messy and I ended up never connecting any of the materials I had and finally lost great ideas because of the lack of rigor in my classification.

By using a proper way of classifying and storing musical ideas, just like Luhmann had with notes, we could fasten how we access musical material, see more combinations between ideas that weren't obviously connected at first and create more ambitious compositions.

You may be thinking: How can we connect ideas as intangible as music? 

## Using Obsidian to connect musical ideas

[Obsidian](https://obsidian.md) is a very powerful and versatile free note taking software that store files locally on the computer, that allows the use of bi-directional links (which means that when a page links to another, the connection is visible from both) and can display the connections between pages using a graphical representation. Connections can be made with either regular links or tags. 

So it's obviously an awesome piece of software to create a personal knowledge management system like a wiki, a #second-brain, or a [digital garden](Digital%20garden.md). But what is even more awesome is that Obsidian has a sound recording feature that embeds the recording onto the page. As the sound is taken from the selected computer source, we're not forced to use our microphone only. In fact, ==we can use any kind of audio interface to input sound in Obsidian notes.== And that's game changing. 

Instead of just recording various vocal notes, we can record musical material using a guitar, a piano, a synthesizer, drums or any other instrument, right into the software that has a powerful classifying method thanks to his tag and graph system. 

![zettelkasten_music_obsidian_screenshot](zettelkasten_music_obsidian_screenshot.png)

### The stack

One of the strengths of Obsidian is that it is extensible, thanks to their plugin system. To test my prototype of a musical zettelkasten method, I used both core and 3rd party plugins. 

1. **The audio recorder core-plugin** is obviously the most important one. It's very easy to use. You press the button and it'll start recording, you play, you press it again to stop. Then, it save it in the asset folder as a `.webm` format. 
2. **The tag pane core-plugin**. It will display all of your tags and nested tags on a single pane and make it easier to navigate through materials. 
3. **The zettelkasten prefixer core-plugin**. It creates a note with 12-digit Zettelkasten ID (YYYYMMDDHHSS) so it makes it easier to hierarchize our notes. 
4. **The music notation 3rd party plugin**. This plugin can render music sheets from code blocks, using the `music-abc` language. This allows you to write music in addition of the sound, which can be great for people who're composing or arranging by writing sheet music. 
5. ** The template core-plugin**. It'll save a lot of time, especially for tags as we can create a template that will always start with a YAML front matter with music organization specific keys (see [Classifying ideas](#Classifying%20ideas)).

Theses three plugins just make it way easier to collect store and organize musical materials. Let's dive deeper on the other elements:

6. To record reusable music components, we need an **audio interface (AI)**. I'm using an [SSL 2+](https://www.solidstatelogic.com/products/ssl2-plus) USB C audio interface, but any gear can do it. By using an AI, we're ==speeding up our composition process==: audio clips we're recording are ready to be used in a DAW, because the quality is sufficient. We'll just have to drag the file from the asset folder and drop it to our DAW (digital audio workstation) to start manipulating it and connecting it with our in progress music. As any kind of audio source can be input in a audio interface, there's no limit on what we can record here. 
7. We also can use **virtual audio router software** to create custom routes from programs to Obsidian. Virtual audio routers can change how the sound is moving in the computer, without the need of cables and without latency at all. I.e : we can connect the sound output of Firefox to input in Obsidian, and capture music from YouTube or any other website. We can output our DAW to Obsidian to record sounds that have been passed through by audio effects. Same for audio from iTunes/Spotify, putting it into Obsidian to chop samples from inspirational tracks easily. In short, we can ==connect any sound output to any input, internally==. On Mac, I'm using [BlackHole](https://existential.audio/blackhole/), which is not available on Windows, but it seems to have a native solution instead. 

![zettelkasten_musician_ssl](zettelkasten_musician_ssl.jpg)


### Classifying ideas 

Besides Obsidian and hardware configuration, it's the classifying method that is important to the idea of using the Zettelkasten method as a musician. 

I think that the way sample platforms like Splice classify their samples is the most efficient way to classify musical ideas. We can find a lot of information on their blog on how they're organizing music libraries. 

The multi-tag feature of Obsidian is useful for this purpose. The YAML header and the parent/child tag system allows you to ==combine and organize notes with great precision and versatility==. Here's a list of tags we can add to each note:
- **Music genre** (funk, pop, rock, EDM, ambient...)
- **Key** (Am, C, Dm, Gb...)
- **Scale** (Major, Minor, Altered, [Super Ultra Hyper Mega Meta Lydian scale](https://music.stackexchange.com/questions/89634/super-ultra-hyper-mega-meta-scales)...)
- **Tempo** (100bpm, 60bpm, rubato, presto...)
- **Signature** (4/4, 7/4, 12/8, 9/16...)
- **Intensity** (forte, mezzo, loud, triple piano...)
- **Instrument** (guitar, piano, synth, pads, chimes, voice...)
- **Material type** (sample, one shot, loop, fx, preset, chords, gimmick, lyrics...)
- **Subjective description** (dark, bright, smooth, groovy,  nostalgic...)
- **Artist** if the ideas come from existing music
- **Title**, just like for the artist
- **Sample rate** (44.1kHz, 48kHz...)
- **Gear used** (Fender Stratocaster, Prophet 08, 12 strings guitar, U87...)
- **Preset used** for synths or effects (Grand piano 01, Wobble bass, Flanger and chorus...)
- **Any other tag** that could be useful for your way of organizing your ideas

### Using YAML front matter to tag notes

By using the #YAML front matter, we could set these tags easily at the top of each new idea (the template plugin is useful for that) and you'd just fill the needed values. YAML is a very easy data format language that uses a simple `key: value` couple to define things. Here's the basic example of how to write a YAML front matter in Obsidian: 

```yaml
---
key: value
key2: value2
multiple: [one, two, three]
multiple:
- one
- two
- three
---
```

For now and natively, Obsidian supports only the `tags` attribute to describe tags. This is powerful enough to create a seamless workflow. Let's see how to use tags in YAML front matter. 

### Nested tags to retrieve ideas

Obsidian comes with a powerful tag and query system. This helps to ==retrieve ideas way faster== than with full text search and works awesomely well for the zettelkasten method. And in this system, the nested tags feature is probably the most efficient way to save and recall ideas. I.e : 

This is a tag: `#key`
This is a nested tag: `#key/Am`

The first one would get all notes that have a key tag,  where the second would get all the notes that have the Am key tag. Which is very useful for retrieving ideas in a specific key. 

How to bulk setup tags? Using the YAML front matter like this:
The YAML front matter (with triple dashes both before and after) is placed at the top of the file. Here's now an example applying some of the tags specified above:

```yaml
---
tags: 
- key/Am
- tempo/120bpm
- signature/4.4
- sample_rate/44.1
- music_genres/funk
- music_genres/jazz
- subjective_descriptions/groovy
- subjective_descriptions/melodic
- subjective_descriptions/heroic
- instruments/piano
- material_type/loop
- gear_used/nord_stage_4
- preset_used/bright_piano_(003)
---
```

Note three things:
- By using the `tags` keyword and multiple values, Obsidian will add each value in your tag list. 
- I'm avoiding `/` for the time signature, change for a `.` instead to avoid deep nesting.
- Instead of using spaces to separate words, I'm using `_`, but in fact, you can do it using either `-` or camel case like `GearUsed/NordStage4` if you want. 

So now, how to use theses tags? 

Let's say you're starting a new song in D and you want to listen back to all the ideas you stored that were in D. You have two options:
- By just typing `#key/D` in the search bar, you'll get all of the musical materials recorded in D. 
- Just search for the tag in the tag pane on the right.

Voilà. 😄

![](Screenshot%202021-01-28%20at%2021.24.12.png)

### Complex search using operators

Now let's say you're starting a new pop song in Am with your guitar and you're searching for a verse either in Am or C (Am's major relative) and a piano melody. How do you get that? 

This could be done using the ==complex search queries== that Obsidian allows. Complex searches are done using logic operator `AND (space)`, `OR` and `NOT (-)`. For our example above, the complex search would be:
```
(tag:#key/Am OR tag:#key/C) tag:#instruments/piano tag:#material_type/chord_sequence
```

In plain english this would be: 
> Find every note that either has the tag **key/C OR** the tag **key/Am** **AND** has the tag **instruments/piano AND** has the tag **material_type/chord_sequence**

### Effortless idea connection using the built-in Graph view

What's very exciting in Obsidian is certainly the built-in Graph view. A graph is a data structure that connects multiple, what we call, nodes (here are your notes/ideas) together, using identified links (tags, plain links or assets). 

In Obsidian, the more notes you have, the more the graph is shape like a brain, thus some people talk about this as "second brain". This is how you can ==discover some unusual connections between things==. By hovering over a node, you see each node connected to this one and can start browsing the whole graph, jumping from one node to another. 

![](Screenshot%202021-01-28%20at%2022.31.47.png)

### Other useful features

Obsidian has a lot of features that could be used to make the most of your musical ideas such as:
- ==Random notes==. It's a core plugin that open a random note from your vault. It allows you to rediscover some your old musical ideas that you forgot and make something new from it in example. 
- ==Embed PDFs and images==. Have a PDF score come with your audio recording? Or maybe you sketched some notes on music sheets and took a picture of it? You can embed it with ease to describe with more details your musical ideas. 
- ==Embed web pages or dynamic content==. Since v0.10.11, you can embed web content such as YouTube videos, Spotify/Soundcloud/Bandcamp players and any other embeddable content, even non-embeddable content, such as pure websites. Using i.e., [Flat.io](https://flat.io/), you could now embed complete scores and music sheets with its dedicated MIDI player to add to your audio file.
- ==Automatic backup on Dropbox (or any other cloud)==. As everything is stored locally, nothing prevents you from saving the files in a Google Drive or Dropbox folder so you don't need to constantly think about backups. If something bad happens, like data loss or your computer was stolen, you'd still have all of your work backed up. 
- ==Embed complex searches==. Using the code block feature in Obsidian, complex searches can be embedded in a note, so it displays every note as a permanent link. This can be really useful if you want to create dynamic indexes such as "All recording made playing the guitar" so each time you create a new record with the tag `#instruments/guitar`, the link is added to the list.
- ==Color grouping nodes on graph==. When you start having a lot of ideas, the graph can be a bit messy. You can apply different colors on your graph’s nodes based on query. I.e, you can make every notes having the tag “#instruments/piano” in a specific color to see it with more ease.

### Features we could expect in the future

Obsidian is software that is evolving very fast and new features are both driven by the core team and the community. Here some thoughts about what we could expect to improve this workflow:

- ==Advanced YAML front matter usage.== The YAML front matter (with triple dashes both before and after) is placed at the top of the file as we see above. Originally, YAML is just a data representation language using key and value to store information. We could expect a cleaner way to structures our notes and improve the way we search in them by using plain YAML snippets like this:

```yaml
---
key: Am
tempo: 120bpm
signature: 4/4
sample_rate: 44.1
music_genres: 
- funk
- jazz
subjective_descriptions:
- groovy
- melodic
- heroic
instruments:
- piano
material_type: loop
gear_used: Nord Stage 4
preset_used: Bright piano (003)
---
```


## How to start using this method? 

Like any other method, this one takes time to tame. As everybody thinks and creates music differently, the best way to start is by just using the things that matter the most to you and that are useful in your workflow. Here, I'm mostly providing a big picture of how far we can go using this software and how the Zettelkasten method could apply to the music. 

Also, a workflow is something in constant evolution, and there's a lot of ways to achieve the same things: ==unleash your creativity and use your ideas faster and easier.== Don't be afraid to try things from here and there, keep what works for you and your way of working, then throw out what doesn't.  


## Thanks
Thanks to SlRvb from the Obsidian community for his help and feedbacks!