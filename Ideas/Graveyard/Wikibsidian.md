## Browse Wikipedia in Obsidian - Failed project
As Obsidian tend to be a #personal-wiki tool, I naively thought that exporting Wikipedia pages in markdown and open every files in a vault was a good idea. I could see how files are connected to each other and representing all the wiki pages using the [Graph View](Graph%20evolution.md). That would be "the collaborative brain" or sort of. 🧠

Well, it can be a good idea, in theory. In practice, it's hell. Here's what I tried and why it failed. But still, what to learn from this :

The entire Wikipedia database can be downloaded from [this page](https://en.wikipedia.org/wiki/Wikipedia:Database_download). So it's technicaly easy to get every pages from Wikipedia. There's a lot of different formats available : #SQL, #XML, static #HTML... And you can download just the file of one language or small versions. 

But obviously, the files are really big, all compressed in a specific `.bz2` extension, which is a compression algorithm that seems to reduce by ~5 the data. I downloaded the a part of the french Wikipedia using a #torrent which was just 5 GB. After unzipping the archive, the file was now around 22 GB. The full english Wikipedia weight 226 GB. So basically, more than 1 TB after unzipping.

So here's the first big problem :
- It took my computer (Recent MacbookPro, 2,7GHz Intel Core I7 with 16gb of RAM) more than 15 minutes to unzip the 5 GB file. So basically, the english Wikipedia would take me ~12 hours, only to unzip.
- The output file is an XML file, which needs to be parse to be then convert to MD. Outside of the time it will take to write the script, even parsing the XML would need a lot of time. After 20 minutes computing, I even don't made it with the 22 GB file. 

These are mostly #big-data related problems, where only big machine could compute these. 

Here's what I learned : 
- There're software that allow people to use Wikipedia in local. The most known is [Kiwix](https://www.kiwix.org/en/), which is like a browser for `.zim` formated file that allow you to have Wikipedia (or any other website like Stackoverflow, TED, Khan Academy...) on your computer. 
- You can unzip `.bz2` with using the command  `bzip2 -d your-file.bz2` in your terminal
- There's a lot of people using #zim file readers to create their personal wikis. 
- There's no working library that can convert `zim` files to `md` files. 
- Processing big files needs appropriate tools. And #Ruby seems not to be one of these 😄.

