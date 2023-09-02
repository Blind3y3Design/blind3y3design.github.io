---
date: 2019-08-27T20:00:00
title: Is “Mobile-First” as an idea dead?
headerImage: ./src/images/mobile-first/mobile-first-header.jpg
---

Way back in January of 2016 [Intercom](https://medium.com/intercom-inside/why-mobile-first-is-outdated-f10a3dc357bd#.o5z9a3npb) wrote a blog post titled “Why mobile first is outdated”. This post sparked a conversation over on the User Experience slack community [Designer Hangout](http://designerhangout.co/). I’m going to share some of that conversation.

## Mobile-First in a Device-Agnostic world

The ideas behind mobile-first are relatively new, They only really came about with the advent of smartphones that could reliably access the internet. The iPhone had a large hand in this, and to this day that presence can be felt across the industry.

A number of companies still use separate mobile and desktop websites, and a lot of those that have moved to “responsive design” may still only think in terms of “desktop”, “tablet”, and “mobile” device sizes, typically with one or two breakpoints for each device. Many designers and developers should be familiar with these numbers: 1024, 768, 414, 375, and 320, these are the most commonly used static breakpoints. 1024 is the width of a landscape iPad, 768 being the portrait view. 414, 375, and 320 are the widths of portrait iPhones, 6(s)+, 6(s), and 4/5(s/c) respectively.

The real question is whether or not these breakpoints still matter in today’s web landscape. The answer to that question is: no, not really. In today’s web you have no real reliable way of knowing how a user will visit your site. While waiting for my morning coffee I may check your website on my phone or smart watch, same goes for commuting. While I’m working I have access to multiple large screens. I may even happen across your site being displayed on a television. A single day may take my eyes from phone to tablet, to monitor to television, you have no way of knowing which one I will be using when I visit your site.

How can you guarantee that I’ll have the same or equivalent experiences across all of these devices? You could set up a max-width on the entire site, but then you lose the ability to take advantage of the extra real-estate on larger screens. At the same time, if you stop thinking about devices at a 320 pixel width, i’ll end up with a sub-par experience on any device that falls below that. This is where Device-Agnostic design comes in. Trent Walton has written a [great article](http://trentwalton.com/2014/03/10/device-agnostic/) on what it means to be Device-Agnostic.

## Is the “Mobile” in “Mobile-First” hurting the industry?

When most people think mobile first their first thought is of the phone in their pocket. What would this look like on my phone? This is where the term “Mobile-First” does itself a disservice. “Mobile” has an implied connotation, that of a “mobile” phone. This connotation may prevent people from thinking about even smaller devices. The implications of thinking of “mobile” as a wireless, touch-screen device also impact how we think about designing for “mobile” and “desktop”. Touch being one of the bigger features that we take for granted on mobile devices. Often we’ll see layouts better suited to touch on smaller screens. However, there is nothing stopping a larger screen from having touch capability. On the other hand, we often see larger “desktop” layouts with additional flourishes because we assume that people visiting the site on a larger screen have a more stable internet connection; as with touch, there is nothing that says a larger screen has a connection any better than a mobile device, particularly in emerging markets.

## Device-Agnostic Performance Focused Design

It might not be a catchy buzzword, but essentially what we’re striving towards with “mobile-first” methodologies is a site that is performant across the board, works across all devices; big and small, and provides the user with the information they’re looking for.

In the end, if no one is willing to use the product, you might as well not have built it.

Header Photo by [Thom](https://unsplash.com/@thomweerd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/broken-cellphone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)