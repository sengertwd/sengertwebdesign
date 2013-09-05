---
layout: post
title:  "Why I did not use a Database Driven CMS"
date:   2013-07-19 13:41:45
categories: development
---

### Speed
I chose to use Jekyll CMS because it compiles the entire blog and allows me to upload it all at once for completely static files. This is absolutely great because it does not require the server to process any code which speeds up the site a lot. Also I do not have to worry about any syntax errors or getting too many hits and crashing the server.

### Complexity
A static generated site removes all the complexity of both the backend code that runs the CMS and also having to set up the server with necessary server settings for things like **PHP or mySQL**.

### Personal Preference
I chose not to use a database driven CMS because I prefer not to have to worry about about the security. One of the reasons that I chose to use Jekyll is that I could quickly and easily set up the site to build whenever I saved a file so that I could test using my local machine. Another reason that I am using Jekyll is because I am already using ruby for SCSS compiling and it made a lot more sense to use a Ruby based compiler. I also chose to use a static site generator because I would not have to deal with a bunch of features that I may or may not have needed to deal with if I had used a database driven CMS like Drupal or Wordpress. Also, I can have my posts be managed using Git so that it is versioned and I could go back to the old post if it was changed.

### Wrapup
Use whatever works for you when you have to use a content management system. I may have choosen to use Jekyll but if that does not suite your preference, then do use it, but if you want to make a site quickly and make it perform quickly through the way of static site generation, I would recommend giving [Jekyll](http://www.jekyllrb.com/) a try for a blog.