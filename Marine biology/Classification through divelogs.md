I just bought a brand-new camera for [Underwater photo](Underwater%20photo.md) and dropped my GoPro. I wasn't very happy about how I was shooting videos, found it harder than taking photos, but also with the way I could leverage the media to improve my marine biology knowledge. Videos are cumbersome to treat, edit and store, so less versatile than pictures. 

My marine biology teacher took pictures through more than a thousand dives, and carefuly classify each of them in a big private database that he now use to teach us about species. That's what gave me the idea and a purpose to use my new camera. In this note, I will detail a process (that will evolve through time, according to the [Digital garden](Digital%20garden.md) philosophy), leveraging the powerful Obsidian ecosystem and the [Zettelkasten](The%20zettelkasten%20method%20and%20how%20to%20take%20smart%20notes.md) principles. 

The goal is to create a personal database of all the species I meet during my dives, by taking pictures underwater. I like the fact that, if I meticulously execute everything, that endeavor will help me to consolidate various skills and knowledge, such as:
- Diving ease: you need to work on stabilization to take better pictures.
- Photography: improve my compositions, lighting technics, camera settings.
- Photo editing: improve my color grading process, skills, and workflow on editing softwares.
- Biologist eye: interpretate some behavior and unusual signs to find specific animals.
- Biology knowledge: to find specific animals, it requires knowledge on environments, associations, groups, layers, biotopes... But also to recognize species on photos after dives. And it's also the main purpose of that project. 
- Digital gardening: it'll obviously complete my digital garden and improve my ability to write. For this project, I had to learn how to use Obsidian's community plugin Dataview to improve searchability i.e..
- (optional) Digital drawing/art: I keep notes during the lessons and make my schemas using my iPad, GoodNotes and Procreate. I like to come back to improve my schema and gives it an arty look. See [Cnidaria](Cnidaria.md) i.e..

It will also give me new interests in my [Scuba diving](Scuba%20diving.md) practice, even maybe inspire others to do the same. I also secretly think that the data I'll gather could help other biologist, or even better, research about environment preservations. I think it's important to pursue a goal, even if it's "just a hobby". It gives a [The Why](The%20Why.md) to actions.

## The divelogs

For each new dive, instead of logging everything in the divebook, just note the note ID in it and just write what's essential to have the instructor's stamp. 

New divelogs will follow this template, with the `::` Dataview syntax: 
![Divelog](Divelog.md)
`Site` is just the site name
`Sea` should point to a note about the sea
`City` and `Country` are just regular strings
`Date` should be only date, format `YYYY-MM-DD`
`DiveTime` should be writen in minutes
`Depth`, `Temperature` and `Weight`, should not have the unit (m, °C, kg), just the integer.
`DiveAt` and `SurfaceAt` should be only time, format `HH:MM`
`Suit` should specify only the thickness like `7mm` (no need to specify shorty or Sharkskin i.e.)
`Tank` is either `"12L"` or `"15L"`
`Nitrox` is either `nil` or a percentage (see [Nitrox](Nitrox.md)). Specify only the integer, not the %. 
`Buddies` will just list people I dive with, using full name and level/certification
`Summary` is intended to be a generalistic text field. It can be just writings or embeding images/graphs from the dive computer software.

In addition to all of the hand-filled parameters, dive logs now matches the computer exported parameters and its graph that show depth (for now, when I will have a new computer, maybe show temperature, and other exogeneous params) in order to precisely describe the conditions where the picture was took. 

This also allow to precise the condition and the depth from which the specie was seen. The goal is to take a random picture before immerging ourselves, that will work as a starting timestamp. Once the dive is finish and the graph exported, we can match photos from created timestamp metadata to the appropriate depth. I.e., we immerge at 10:00 for a 55min dive, the photo at 10:40 will match the depth at +40min on the depth graph. 

## The species (genuses)

Species will be classified through folders, following a simplified taxonomy: `Kingdom -> Phylum -> Subphylum -> Subclass`. Notes will reflect genus or species when known. 
The classification will not be strict, because it's still new for me, and it can quickly become tedious to split into all the classification levels. I will go step by step and work on it through time: when I get too many notes about a specific phylum, I will divide into subphylum, then into subclass, genus, or even species.

Notes should always be created because I found that genus during a dive. Sometimes, because we talk about it during lessons, but it should be mostly drived by the dives and the photo I make.

The goal is to complete notes as things progress (bottom-up approach) and write about what I want to understand/memorize about that genus, through photo illustration. I mean, I just can't think that I will exhaustively write about a genus/species. Wikipedia does that better, and I can't link to it in my notes. What's important is to build over what was previously acquired and get notes more complex/complete over time. 

## Pictures process

Pictures will require a particular focus and process: 
1. At the end of the day, extract pictures from the memory card and put it in the appropriate folder, following this classification `Travel-year -> Date -> Dive site`
2. Pass through each picture to delete the worst one and try as good as possible to keep only one picture per genus/species. 
3. During the filter process, classify each species in the appropriate taxon, represented by the folders in Obsidian (nder Marine species) and rename it by the name of the higher grade in the classification. This process is very important, and should be doing right after the dive, with the help of other divers and local helping guide (books, Marine Picto Life...)
4. Edit and color-grade chosen pictures using Pixelmator Photo on iPad
5. Upload photos to Cloudinary (through web interface if everything is made using the iPad or throught the Cloudinary plugin on Obsidian desktop.)
6. Reference those pictures in notes and classify it. 
7. Link the divelog with the species found. 



