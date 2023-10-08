---
date: 2023-10-06T18:50:00
title: "The Production-Ready Myth"
tags: 
    - accessibility
    - development
    - product-development
    - code
    - AI
---

For years now there have been programs, tools and libraries that all claim to deliver on the same promise, delivering to you “Production-Ready” code.

Dreamweaver was entirely based on the idea that you could design a website in their visual tool and it would generate all of the HTML for you, neat!

And now, in this new era of AI, there is a sea of tools, plugins, and apps making the same claim. Just feed the hungry machine a juicy prompt and it will spit out a fully formed “production-ready” app, magic!

The problem is that neither of these things are true.

## Production-Ready For Who?

In the early days of “web design,” when we were still using tables and very rudimentary CSS the Dreamweaver proposition made a lot of sense, and surely did end up saving people time. We no longer live in that word, websites and apps have become much more complex, and (as of today) computers simply aren’t smart enough to parse an image and understand the best way to build a website from it, let alone all the nuanced decisions that come along with the range viewports of modern devices.

I have not personally used many of the magic AI tools, but it doesn’t take a wizard to understand that these tools are not going to generate perfectly usable, responsive, and accessible code that can just slot right into any kind of existing product or project. *Maybe* if you’re starting something completely from scratch one of these tools could get you to a quick alpha or beta release, but I just don’t buy that we’ve cracked the code here. The majority of the internet is not accessible, if these tools were trained on code that already exists, they learned to write code based on a majority that does not concern itself with being accessible to everyone, that doesn’t sound production ready to me.

## Providing Realistic Expectations

Working in design systems, I and my teams have often used the term “Production-Ready” when describing the components, patterns, and styles that we provide. After the thinking that went into this post, I don’t know if I will continue to make that claim. The reality is that the work we put out is suitable and viable for production, but I can not determine how that code or styling is being integrated into a product or experience.

If you take a component from our system and plop it onto a page it should be completely ready to go. We don’t ship anything that is not responsive, accessible, or functional.  If you don’t change anything, are working in the same stack we build in, don’t have other potential integration needs, and are trying to solve the same problems, sure our stuff should be 100% production ready; but that feels like a lot of caveats.

For me, I’d much prefer to think of what we create and ship as Production-Viable, or Production-Suitable. These things can be used in production, you don’t have to start from scratch and we’ve solved many problems already, but we should still validate that the final implementation meets our requirements and not assume that the “production-ready” code just works.