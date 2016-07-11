---
layout: project
hidden: true
title: "Backbone Resume"
date: 2016-07-11 24:00:00 -0400
author: Blind3y3Design
categories: [work]
tags: [blind3y3design]

# Custom Metadata
exampleLink: https://github.com/Blind3y3Design/backbone-resume
external-url: https://github.com/Blind3y3Design/backbone-resume

---


This project was inspired by the [JSON Resume](https://jsonresume.org/) project. The idea is that you create a standard JSON-based dataset, and then you can easily reuse that data across a multitide of templates without having to re-write your resume each time you wanted to update the look and feel. Any time you need to update any relevant data you can simply update the JSON and that data is accessible anywhere.

I decided to find a pre-built html resume template that I thought looked interesting and had an array of different data types. I chose to go with [Orbit](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/) from #rd Wave Media because it was clean, responsive and had a number of differing data types and ways of displaying that data.

In this version of the resume we used backbone and handlebars to build out the template. 

As with the [JSON Resume](https://blind3y3design.github.io/json-resume/) I pulled in all of the resume data from a single JSON file and then used backbone and handlebars to build out the page. Backbone presented some challenges that were not present with just handlebars. 
- By default backbone uses underscore as it's template library. Since I already had the handlebars template built I decided to just include handlebars and modify the `render()` function to use the `handlebars.compile` method instead.
- This was also my first time really using backbone in almost 3 years. Because it is such an open library it was a little bit harder to find a concise guide on how to do simple tasks, everyone has their own way to build a backbone application. Ultimatelt I ended up using Joel Berghoff's [Simple Backbone.js Tutorial](http://blog.joelberghoff.com/2012/07/22/backbone-js-tutorial-part-1/) in order to get the application up and running.