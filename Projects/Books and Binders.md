## Books and Binders is my personal library management app

Books and Binders is an [open-source](https://github.com/anthonyamar/books-and-binders) library management app. It allows readers to keep track of their books and get stats on it. 

I developed this app during the first lockdown in France. I was emptying my room to do work, so I take advantage of this to list all my books. I had something like ~250 books at that time. 

I coded Books and Binders to this specific purpose at first, a simple CRUD for a book model, then added some features to visualise data about my library such as, and among others : 
- Ratio of read/not read books
- Category repartition
- Languages repartition
- Bindings repartition
- Total spended on books
- Total weight

I also needed to keep notes on my [rare books](Collecting%20old%20books.md), espcialy on prices. It took me a day to code a working MVP using #Ruby on #Rails, #PostgreSQL, #React, #HTML and #CSS. I spend two additional days to list each book at hand, on my computer. 

I'm happy with the result. Now, each time I buy a new book, I instantly add it to my list, and I can refer to it now, make new stats or new features as I need. 

The last features :
- Embeddable public page for #Obsidian.
- Export entries to Obisidian flavoured markdown notes with auto tag. 

The result of theses two features can be seens on [-My library](-My%20library.md)  (take some seconds to load, free #Heroku dynos atm 😅) and all the files in the folder "Library". 

By adding theses new notes, my Obsidian vault welcomed more than 250 new notes and instantly connected it to my already existing notes. I'm now managing the most of my book right into Obsidian. 

![](Graph-obsidian.mp4)

And now, here's the graph local graph for my books, with in yellow, the books I read using the tag #books/read, and in pink, those I didn't read yet using the tag #books/not-read. 

![](Pasted%20image%2020210212010728.png)

## Contribute to this app

This app is open-source and can be seen on [Github](https://github.com/anthonyamar/books-and-binders). If you like this subject and you want to contribute, so the app can fit more needs than only mine, I'll be happy to work on it with you to! Feel free to [contact me 💌](Contact%20me%20💌.md).