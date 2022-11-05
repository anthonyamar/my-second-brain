---
alias: "Digital detox"
tags:
- "#productivity"
- "#social-media"
- "#ADHD"
- "#health"
- "#time"
---

## How to wean yourself off social media
Social medias are undoubtedly major advancement in terms of social interactions and internet usage. As their main economy is based on the user engagement and ads interactions, they're making everything they can to hook you and make you spend the most time possible on the plateform. 

A famous French media magna used the expression "available brain time" to describe what medias (and by extension, social medias) are searching for. 

Last year, I figured out that I was totally addict to social medias, particularly Facebook. I realized this when I installed a time tracker on my phone and that he display more than a thousand hours spent on social media for a year and a half. And that was only for my phone! 🤯

How the hell I could have spent more than 3 hours per day in average on scrolling on Facebook, Instagram and LinkedIn? I calculated that if I had worked all of these hours to the hourly minimum wage, I could have earned around 15,000€ in a year and half. 😭

It was obviously a big waste of time, and nobody wants to waste so much time. It was now time to solve this problem and start what I call a social media detox. Here's how I did it.

## Analyzing the problem 
The first thing to do, in my opinion, is to figured out how much time you're spending on useless apps, how do you spend your time on these and what catches your attention. 

For me, it was something very simple : once I was launching the app, wether it was on mobile or desktop, I started to scroll right away and getting hooked by videos, posts, and comments. I could force me to stop, I didn't succeed to, so I could lose like an hour or two just scrolling. 

To measure the time I spent on [my apps](My%20productivity%20tools.md), I used [BlockApps](https://play.google.com/store/apps/details?id=com.wverlaek.block&hl=en_US&gl=US) on Android. Even if you just install it for the first time, it will take your entire usage history to show you how much time you spent for each apps. For me, Facebook was on top with a big advance, followed by Messenger, Phone, Messages, LinkedIn, Instagram, Medium and other apps... 

That wasn't the first time I tried to calm down on social media, (talking about addiction about social media isn't a language abuse for me) and everytime I tried, my new habits stayed not more than 2 months. 

The problem, is that I need to use social medias for my work, to promote my company, to buy and sell music gear and keep contact with my friends and family. So I can't just throw out my account. We need something more subtil. 

Now that I have my culprits and that I know how I get hooked, let's create a treatment. 

## Brutally breaking away from apps
One of the first thing I did to avoid being stuck on my phone was to  ==disable every single notification==. On Android, go to Settings, Notification and disable every app (except Phone and Message to still get call and text messages). 

After that, I sorted through my Facebook friends. I had something like 2000 friends on Facebook and I knew something like 50% of them and talk or engage with only ~20%. So I unfriend everyone that fit in those one or more of those categories :
- Unknown people
- Ego booster people (people you don't know IRL and don't talk with but like your posts)
- People I saw one time in my life and would never see again
- People I engage on the plateform for trivial reasons 
- Old friends that I don't talk to anymore
- Fake and inactive accounts
- The cousins of my cousins' cousins that I never saw in my life (we all have these in our Facebook)
- People I don't like.

Result? 450 friends. Lot better, my feed was now cleaner, the post more relevant, and I also had a significant icrease in engagement and reach for my posts. So now, I'm really strict about who I have as friends on Facebook. 

In addition to that, I used BlockApps to force shape my social media consumption habits. I block all of my social media apps to 30 minutes per day, only between 1pm to 11pm. After a month, the strategy was effective but still reaching the limit 4 to 5 times a week, so I lowered to 20 minutes. 

### The ultimate trick that make me stop 

Even if this seems a big change, I was still hooked each time I got my eyes on theses. The real problem was the feed. I figured out that as long as I would have posts in my feed, I would be hooked scrolling. So how to get rid of the feed? 

### Unfollow every friend and unlike every page
Brutal but so efficient. 

To achieve this on Facebook, I used the method and scripts. 
**For Facebook :**
1. Go to News Feed Preferences -> Unfollow on Facebook
2. Scroll until you don't have new page/people/groups to unfollow
3. Open the JavaScript console (developer tools -> Console)
4. Copy/paste the following script :

```javascript
var a = document.getElementsByClassName("_5u3n");
var x = 0
var time = 300;
function amol(){
	a[x].click();
	if(x++ < a.length) {
		setTimeout(amol, time);
	}
}
```

**For LinkedIn :**
1. Go to the page [feed/following](https://www.linkedin.com/feed/following/)
2. Scroll until you don't have new company/people/groups to unfollow
3. Open the JavaScript console (developer tools -> Console)
4. Copy/paste the following script :

```javascript
var buttons = $("button"),
  interval = setInterval(function(){
  var btn = $('.is-following');
  btn.click();
  if (buttons.length === 0) {
	clearInterval(interval);
  }
  window.scrollTo(0,document.body.scrollHeight);
}, 1000);
```

**For Instagram :**
Instagram is working differently than the other social medias. To get the same result, I had to unfollow everyone by hand. I have only one follower on my account, which is my company Instagram profile.

In the end, results were far better than I thought. On Facebook, it made the entire feed bug, almost the same on LinkedIn. I don't have posts, nor ads anymore, a significantely better reach and still the ability to use the features like I did before. Even better : no more endless scrolling and time losses. I won over Facebook, Instagram and LinkedIn. 💪

![](facebook_empty_feed.png)

