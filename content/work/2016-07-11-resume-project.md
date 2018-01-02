---
author: Blind3y3Design
categories:
- work
date: 2016-07-11T23:00:00Z
hidden: true
tags:
- blind3y3design
title: SPA Resume project
url: /2016/07/11/resume-project/
---

This project was inspired by the JSON resume project. The idea is that you create a standard JSON-based dataset, and then you can easily reuse that data across a multitide of templates without having to re-write your resume each time you wanted to update the look and feel. Any time you need to update any relevant data you can simply update the JSON and that data is accessible anywhere.

Read more about the JSON resume project [here](https://jsonresume.org/).

I decided to find a pre-built html resume template that I thought looked interesting and had an array of different data types. I chose to go with [Orbit](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/) from [3rd Wave Media](https://twitter.com/3rdwave_themes) because it was clean, responsive and had a number of differing data types and ways of displaying that data.

The [first version](https://github.com/Blind3y3Design/json-resume) used plain JSON and [Handlebars](http://handlebarsjs.com/installation.html). This was simply to understand how the basic system worked using the bare bones.

In the [next version](https://github.com/Blind3y3Design/angular-resume/) I used angular to build out the template instead of handlebars. I used a pre-existing angular setup from [AccioCode](https://www.youtube.com/user/CDPAdvertising "Accio Code on YouTube") in order to speed up the build process. 

As with the original I pulled in all of the resume data from a single JSON file and then used angular to build out the page. Angular presented some challenges that were not present with handlebars. 
- I had to create an angular filter in order to prevent the summary content from being escaped. 
- I had to use `ng-class` and ternary operators in order to assign the icon classes for the social links in the sidebar.

In the [final version](https://github.com/Blind3y3Design/backbone-resume) I used backbone and handlebars to build out the template. 

As with the others I pulled in all of the resume data from a single JSON file and then used backbone and handlebars to build out the page. Backbone presented some challenges that were not present with just handlebars. 
- By default backbone uses underscore as it's template library. Since I already had the handlebars template built I decided to just include handlebars and modify the `render()` function to use the `handlebars.compile` method instead.
- This was also my first time really using backbone in almost 3 years. Because it is such an open library it was a little bit harder to find a concise guide on how to do simple tasks, everyone has their own way to build a backbone application. Ultimatelt I ended up using Joel Berghoff's [Simple Backbone.js Tutorial](http://blog.joelberghoff.com/2012/07/22/backbone-js-tutorial-part-1/) in order to get the application up and running.