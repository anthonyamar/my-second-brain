## Computer can dive. Yes.  

When I started practicing [scuba diving](Scuba%20diving.md), I noticed one thing very weird : everyone is talking about #computer on the boat. WTF? 🧐

Not the kind of computer with wich I'm writing this plot obviously, but a diving computer. 😏

It's like a watch that you put on your wrist and it is used to display very useful informations during your such as the depth, the time, the temperature, your security curve and the time at current depth without making decompressions stops, your ascent rate, your remaining time at the decompression and other features that make you safer underwater. 

These are mandatory once you start exceeding 10 to 15 dives or start to pass your FFESM level 2 or PADI Advanced, because you start to go deeper and experience your first decompression stops. 

The cheapest diving computer start around 70€ but these can go up to a thousand euros for the most sophisticated ones. 
![A diver with his computer](pi_dive_computer_dive.jpg)

## Entering the Pi-Dive, a DIY diving computer. 

**Disclaimer** : After making some research, it's obviously impossible to succeed creating a scuba diving computer as efficient as the ones you have for ~100€, for the same price at least. And even if I manage to, I'll don't use it as my main computer, for safety concerns. But we can still have fun making underwater gagdets. Why? Well... Because we can! 😎

I often talk about [Raspberry Pi](Raspberry%20Pi.md). This credit card sized prototyping board that cost less than 50€ is the computer to make everything. People are sending Raspberry Pi to space. So why not putting it underwater to make some experiments? 

I recently bought the SensorHAT, which is module that was designed for a hackathon (or kind of) named [Astro Pi](https://astro-pi.org/) around space and where the best inventions would be installed on the International Space Station and used by astronauts for experimentations. How cool is that? 

They created a board that embed many sensors at once, a 8x8 RGB leds matrix and a joystick for ~40€. The sensors are : 
- Gyroscope
- Accelerometer
- Magnetometer
- Temperature
- Barometric pressure
- Humidity

![The Sense Hat](pi_dive_sense_hat.jpg)

## Features
### Time series focus
Not all diving computers allow the visualisation of gathered data on graph with a time axis. Maybe because of the computer's database nature. The use of Raspberry Pi would allow using time series databases such as [InfluxDB](https://www.influxdata.com/). Instead of using auto incremental IDs like a relationnal database would do, time series databases are storing informations by timestamps. I.E, InfluxDB is capable of ingestings millions of data points per second using this kind of technics. 

### Desktop and mobile sync
As I think Pi-Dive of a complementary unit rather than a replacement of regular diving computers, we could get rid of the screen and the ability to display on-dive informations to focus on what can really bring value and be perfoming : the synchronization of gathered datas on a desktop computer or a mobile to perform complex analysis and user friendly visualisations once back at home. This will be will be as simple as a basic synchronization using cloud infrastructure : when the computer is reconnect to internet, the last dives datas are sent to the cloud to be processed and will distributed accross various client applications : desktop, web and/or mobile. Of course, no need of native applications. #PWA works great for this kind of usage.

### Powerful dashboard and data analysis
As said before, the main purpose of this specific diving computer would be the visualisation of your dives profiles. Using a data dashboard like [Grafana](https://grafana.com/grafana/) could help create a stunning dashboard with suitable graphic representations. This could help various divers : 
- Pro divers could use it to perform analysis on a specific diving site to improve the dive profile and do less decompression stops
- Dive teachers could help their students improving their skills by analysing together the behavior using a real data-driven method. This could be useful for safety maneuvers training such as emergency ascents. 
- Dive amateur could just get a new approach to their practice and speed up their progress by using a data-driven mindset in addition to the sport's inherent kinestetic aspect. 

Here's a Grafana dashboard example.
![](pi_dive_visualisation.jpg)

### 3D dive reproduction
There's only 2 environments where a human can freely evolve in a 3D environement : the space with weightlessness and the water. 
The combination of the gyroscope, accelerometer, barometric pressure sensor, and the powerful time series database with a sufficiently fast polling can give significant informations about how the diver evolved in his water filled 3D environement. Once back to home and data been synced, the software could recreate the dive using in a 3D representation thanks to sensors and time series. Just press play, and watch a 3D diver prototype evolving in a 3D space. It's you. 😏

![](pi_dive_axis.png)

### Useless but funny features
The embeded 8x8 RGB LED matrix could be use to display anything in the water such as emojis, pre-define messages or specific colors flash for safety concerns (like red flashing). Communicate with you dive buddy underwater in a different maner. 😊

## Difficulties
Obviously, creating a project like this is not something easy. Here's some of the issues we could face trying to building the Pi-Dive, and ideas on how to get over it. 

### Waterproofing the solution
The worst enemy underwater is not water itself, but pressure. Creating pressure resistant cases can be very difficult and expansive. I searched a lot on the internet, there's no underwater Raspberry Pi enclosure so far. Some people manage to create ones, but they're shape like a submarine, which is still the most efficient shape to create pressure resistancy. But for our Dive-Pi, we need a flatter case, that can be embed to our stabilizer gillet. For now, the best thing to do is to try with underwater iPhone cases like [Valstech's ones](https://www.valstech.com/), but they're quite expansive. Other brand exists on Amazon with cheaper and simpler cases. 

Something like this would be great I.E. (this one from [OpenH](http://openh.io/rubicon/) isn't for sale anymore and isn't for deep dive) : 
![](pi_dive_underwater_case.jpg)

### Battery
Let's be clear : this can't be energeticaly efficient. Raspberry Pi are not the worst energy consummer but still consuming far more energy than a regular diving computer that can last years with a CR2032 lithium cells. For this project, I would go on smartphone portable batteries and plan for max 2 dives of autonomy. Just like what you could hope with a GoPro. Depending on how fast the polling is (the time regularity with wich you're asking and storing sensors datas), the battery could live longer or shorter. In short : better resolution == shorter autonomy. 

### Barometric pressure sensor accuracy
I'm wondering if a barometric pressure sensor enclosed in a waterproof and pressure resistant case would deliver expected performances and accuracy. If yes, cool. If no, this would force to move out the case this specific sensor. So will therefore have to add an additional sensor as we can't remove the one from the Sensor HAT. 

## Links
- [Raspberry cases OpenH](http://openh.io/rubicon/)
- [Install InfluxDB and Grafana on Raspberry Pi](https://www.circuits.dk/install-grafana-influxdb-raspberry/)
- [Raspberry Pi Underwater Camera Drone](https://www.raspberrypi.org/blog/raspberry-pi-underwater-camera-drone-magpi-80/)
- [Scuba Pi - Underwater tech experiments using Raspberry Pi](http://scubapi.net/)

## Want to give it a try or contribute?
If this project make sense for you and you have some abilities on hardware, software or water diving engineering, don't hesitate to [contact me](Contact%20me%20%F0%9F%92%8C.md) so we can talk about it and maybe give it a try! No pressure (well, yes, pressure, but underwater only 😄), we could work on it just for fun. 

You can also reach me if you just want to contribute to this article and help whoever would try to create something like this. 🤓