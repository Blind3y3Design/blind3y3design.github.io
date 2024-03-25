---
pubDate: 2024-03-24T12:00:00-04:00
title: "Leveraging AI to Improve Accessibility"
description: ""
tags:
  - design
  - development
  - accessibility
---

There’s been a lot of talk over the last few months about using AI to improve accessibility. I’ve seen and heard people talk about the potential for a browser or OS level AI to swoop in and solve “last-mile” accessibility issues for a user that a designer or developer has not considered or accounted for.
Examples of this type of AI include:

1. A colorblind user asking AI to fix color contrast issues on a page e.g. “I’m red-green color blind, this site is usable, can you [AI] just fix the colors on this site/page for me?
2. AI using computer vision and/or context clues to provide alt text for images.
3. AI interpreting a web page and dynamically creating or pairing form elements with labels. If a label exists, but isn’t attached to an input properly AI could just add the proper `name` and `id` attributes, or if no label exists, understanding what the input is for and providing an appropriate label.

I think these are all incredible future possibilities, but I also would like to live in a world where we don’t put the onus on the end user to solve our shitty code.

## Using AI as a Trojan Horse

One thing I haven’t seen a lot of discussion around is the fact that a lot of these AI tools; especially the new-to-market physical devices, are promising a lot of usability out of the box. Devices like the Rabbit R1 tout the ability to visit a website and place an order or book a plane ticket for you.

### Rabbit R1

At CES this year the Rabbit R1 became a viral phenomenon, if you visit their website now they’re already sold through their fifth batch of preorders. If you’re not familiar with the device, the R1 is one of many new devices this year claiming to be AI assistants for your every day life. What set the R1 apart is what they call their `LAM` (Large Action Model).

Instead of a standard web-connected LLM like ChatGPT or Bard, which can search the web and return answers, this device is supposed to be able to take actions on your behalf. According to Rabbit, you’ll be able to use the R1 to order food or a ride share, translate conversations, take notes, or even research points of interest.

Again, I feel like the POUR principles of accessibility could be incredibly important here. In order for this device to navigate a website, especially something like a checkout flow, those pages need to be designed and built well, perhaps even more so than a human user.

## Pushing for Accessibility with AI

In a time when many accessibility experts are getting burnt out and leaving due to the constant brick walls we’re running into, I can see these new technologies as something we could leverage to bring accessibility back into the fray as a critical practice for web design and development.

Businesses need to be looking at these AI tools as another potential revenue lane. They’re going to need to ensure the non-humans can use their products. Seems to me like we’ve got a perfectly good set of principles in Accessibility that are focused on making sure the widest range of use is possible within any interface or product.

Whether through computer vision or crawling the code, AI tools are going to benefit from well designed accessible sites and the use of semantic markup to build them. Getting buy in to ensure that interactions and experiences can be done by an AI can also lead to those experiences being better for users with assistive technology needs. AI doesn’t have a mouse, neither does someone who is navigating with a keyboard or a voice-based interface.

We’ve seen “AI Code Tools” produce all kinds of accessibility issues, and with a history of bad accessibility overlay products and companies it’s easy to see or hear about AI and become despondent about the future of accessibility on the web. I think, with this framing, we have the potential to use AI to our advantage and make the web a better place for everyone in the process.
