---
layout: post
title: "CSS3 based Conditional Support"
date:   2013-09-07 19:25:45
categories: blog development css3
---

#CSS3 based Conditional Support

While tyring to solve a problem with having {-webkit-background-clip:text;} and using a gradient to color the text, I came accross CSS that could allow me to create the CSS and only apply it when the browser supported it. I did not even know this existed in CSS until this point and thought it was only doable in Javascript. It has become a game changer for when I am developing sites from this point on.

##Checking to see if something is supported in CSS with CSS3

To check if something is supported in CSS you should use @supported. This accepts parameters much like a media query does. 

Example: 
{% highlight css %}
@support (-webkit-background-clip:text){
	.className{
		background: linear-gradient(#000,#FFF);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}
{% endhighlight %}

##Support

* Chrome 28+
* Firefox 22+
* Opera 12.10+

**Not Supported Info**

When '@support' is not supported in the browser, the code chunk within the '@support' is not recognized and will not be applied to anything on the page. In other words, it gracefully degrades.

##When could this be used? 

This can be used to replace some of the tests that Modernizr.js does. One example of this being used would be when you need to use floats in place of something like flex-box layout. One advantage to using CSS3 for CSS feature detection is that you would not have to include a new JavaScript file and create another HTTP request.