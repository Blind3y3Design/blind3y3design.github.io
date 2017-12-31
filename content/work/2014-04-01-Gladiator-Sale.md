---
author: Blind3y3Design
categories:
- work
date: 2014-04-01T10:58:00Z
exampleLink: http://www.gladiatorgarageworks.com/
fullImage: /images/aisleRocket/gladiator_product.jpg
hidden: true
tags:
- aisleRocket
thumbnail: /images/aisleRocket/thumbnails/gladiator_product.jpg
title: Gladiator GarageWorks Sale Page
url: /2014/04/01/Gladiator-Sale/

sitename: Gladiator Sale Page
siteurl: http://www.gladiatorgarageworks.com/global_Product-Sale.content.html
---

The gladiator sale page takes data from a JSON file and transforms it in to a massive listing of all the products on sale.

<!--more-->

This page had to be build from the ground up. The layout was fairly basic. The content of the page is where the work really began.

When we build large pages containing a list of products we generally use underscore templates because of their ease of use and flexability. With underscore you define the template inside a script tag. 

{{< highlight html linenos >}}
<script type="template">
	//You put your template data here
	<%= Variable %>
</script>
{{< / highlight >}}


We would then generate JSON files and reference them inside the templates. We have a well written module that we use so that we are not writing new code every time.

However, we discovered that due to the way IBM's TeamSite platform handles script tags this was not an option. The TeamSite installs that we have to use has a strange behavior where it comments out all code inside of the script and style tags. This commenting out caused the template to fail. Because of this we ended up building the templade in plain javascript.

We ended up using an AJAX call in order to retrieve the json file. On success of the file we ran an .each() loop and for each JSON object we ran the data through the template.