---
layout: post
title: "Gladiator GarageWorks Sale Page"
date: "2014-04-2 10:58:00 -0500"
author: Blind3y3Design
categories: [projects]
tags: [aisleRocket]
excerpt: The gladiator sale page takes data from a JSON file and transforms it in to a massive listing of all the products on sale.
---

<div>
	<a href="http://www.gladiatorgarageworks.com/global_Product-Sale.content.html" title="Gladiator">
		<img class="thumbnail" src="{{site.baseurl}}/images/aisleRocket/gladiatorProductSale.png" alt="Gladiator Image">
	</a>
</div>

[Gladiator](http://www.gladiatorgarageworks.com/global_Product-Sale.content.html)

The gladiator sale page takes data from a JSON file and transforms it in to a massive listing of all the products on sale.

<!--more-->

This page had to be build from the ground up. The layout was fairly basic. The content of the page is where the work really began.

When we build large pages containing a list of products we generally use underscore templates because of their ease of use and flexability. With underscore you define the template inside a script tag. 

``` HTML
	<script type="template">
		//You put your template data here
		<%= Variable %>
	</script>
```

We would then generate JSON files and reference them inside the templates. We have a well written module that we use so that we are not writing new code every time.

However, we discovered that due to the way IBM's TeamSite platform handles script tags this was not an option. The TeamSite installs that we have to use has a strange behavior where it comments out all code inside of the script and style tags. This commenting out caused the template to fail. Because of this we ended up building the templade in plain javascript.

We ended up using an AJAX call in order to retrieve the json file. On success of the file we ran an .each() loop and for each JSON object we ran the data through the template.

``` Javascript
	<script type="text/javascript">
		$.ajax({
		    url: 'http://bab4f2fa8b2db81b2242-4d0fcbb069fff5c8ea5214991fa0d577.r83.cf1.rackcdn.com/productSaleJSON/gladiatorSaleProducts.json?callback=?',
		    type: 'GET',
		    crossDomain: true,
		    dataType: 'jsonp',
		    jsonpCallback: 'jsonp_sale_products',
		    success: function(data){
		    	// console.log('success');
		    	if(data.products.length > 4){
		            var html = '';
		            $.each(data.products, function (i, p) {
		            	// console.log(p.ModelNumber);
		                html += (''
							+	'<li id="' + p.ModelNumber + '" class="product ' + p.Category + '">'
							+		'<a class="product-image" href="' + p.PDPURL + '" title="' + p.ProductName + '|'  + p.ModelNumber + '">'
							+			'<img class="lazy" alt="' + p.ProductName + '|' + p.ModelNumber + '" src="' + p.ImageURL + '" width="144"/>'
							+		'</a>'
							+		'<div class="product-information">'
							+			'<a class="product-title" alt="' + p.ProductName + '|' + p.ModelNumber + '">' + p.ProductName + '</a>'
							+			'<p>Model # ' + p.ModelNumber + '</p>'
							+			'<div class="product-prices">'
							+				'<div class="product-sale-price">' + p.SalePrice + '</div>'
							+				'<div class="product-regular-price">was ' + p.MSRPPrice + '</div>'
							+			'</div>'
							+		'</div>'
							+		'<div class="addContainer">'
							+			'<a class="addLink" href="' + p.PDPURL + '" title="Add to tool set | ' + p.ProductName + '|' + p.ModelNumber + '">View</a>'
							+		'</div>'
							+	'</li>'
						);
		       		});
					// console.log(html);
		        	$('.prodWrapper').html(html);
		        }
		        // console.log('template success');
		    },
		    error: function (data) {
		        // console.log('FAIL!');
		    }
		});
	</script>
```