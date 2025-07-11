---
pubDate: 2024-06-22T12:00:00-04:00
title: "Config 2024 Wishlist"
description: ""
tags:
  - design
  - HTML
  - CSS
  - conference
---

With Config 2024 right around the corner I figured I’d put together a little wishlist of things I’d like to see them announce, some more plausible than others.

## The Likely

### More Variable Support

The most likely thing on this wishlist is additional advancements of Figma Variables. As a member of the Design Token Community Group, I’d love to see them adopt a broader set of tokens and use-cases, as well as adopting the term **Token,** instead of continuing to call them _variables_.

### Additional Auto Layout Changes

I’m not completely sure what this would or even could look like, but some additional changes or enhancements to the auto layout system seems likely. Auto Layout is the closest thing we have to true flexbox in a design program that is not using direct web features. I’d like to see some enhancements for auto layout to also provide a “grid-like” experience. CSS Grid has been available and adopted in browsers long enough that having a tool that allows for grid-like layouts and behavior would be a huge benefit to design and development teams.

### More Dev Mode

Again, not sure what this would end up looking like, but since locking down dev mode behind a paid seat last year, I feel like there needs to be enhancements and additions to this functionality that make the paid seat worth it. We’ll likely see some tie-ins with “AI” functionality here.

For me, from a design systems lens, I’d like to see a broader native system for aligning coded components with settings in Figma. If I can create and maintain the relationships between props in a coded component, and the props and settings in a Figma component it would be great if dev mode could just show the coded component’s code with all of the correct settings and props to enable a simple copy/paste of that snippet. Taking this a step further, if I have multiple languages or frameworks, provide my developers with a dropdown that can swap them between those specific snippets.

## Less Likely Bets

### Enhanced Documentation Support

Currently within Figma components you can provide a description for how to use a component. You can also link a component to external documentation through dev mode functionality. I could see a function or feature that uses an “AI” or ML model to combine or enhance these features. Providing “point-of-use” guidance or documentation for a designer without needing to open another window or app in order to access this information

### Design Clippy

Don’t get me wrong, I don’t think anyone actually misses Clippy, but some kind of “AI” assistant that could help a designer get their work done sounds cool. It may even just be a deeper integration with a specific set of features within Figma. The search function for components already checks the name and description of components. If a designer isn’t sure what the exact name of something they’re looking for is this sort of “helper” could provide suggestions.

Alternatively, one of the biggest challenges in design remains the time it takes for a human to generate multiple explorations of an idea, something computers are amazing at. If I could prompt an “AI” design assistant to provide 10+ iterations on an idea or even a concept I’ve already produced this could save time. Obviously a human designer would still need to review and vet these explorations, but that likely takes less time than producing those explorations by hand. I’m all-in on anything that enhances a product team’s ability to explore more broadly, while also taking less time.

## The Long Shots

### First-Class Responsive Support

One of the few major drawbacks that still exist when designing with Figma today is that by its very nature the design and elements are still static.

While we’ve gained the ability to use the tools and mental models of component-based designs, at the end of the day, you still need to understand that Figma is a static snapshot of what a design will end up looking like on a production site or app. Components still need to provide “breakpoint” style sizes or variants if the shape or contents change when a viewport size does, this in turn forces a designer to design multiple “screens” using static frames and component variants.

I’d love a world where library or component designers could define styles using breakpoints or other modern responsive methods and have those components simply “do” that behavior when placed in a design at a specific size. We’ve got parts of this model in Figma already, using the auto layout `fill` property along with min and max width settings we can state the upper and lower bounds of an element. The next logical step for me, would be to allow me to define points where this component could natively change, even if it’s just swapping between variants.

### Responsive Typography

Much like the full-blown support above, I’d love to see responsive type make its way into Figma. When looking at modern methods for creating fluid responsive type stacks the inability to replicate this pattern in Figma feels like a major drawback.

A single look at a tool like [utopia.fyi](http://utopia.fyi) makes it clear that a single static value no longer meets the needs of modern typesetting. If my system and development teams have adopted a fluid type scale how am I supposed to represent that within a tool like Figma? Should I pick the biggest size? What if our designers are not designing at the _largest_ possible screen size? Then their designs will not match. Sure, we could specify multiple type styles that indicate different size viewport “snapshots,” but that feels like it could turn into a usability nightmare if our designers are now being asked to filter through a massive list of styles.

Giving designers and teams the ability to define these fluid type scales and having them act appropriately within a design seems like a much better option. Simply set the text element to `fill` and have the font increase or decrease in size based on the width of that fill.

### Enhanced Inline-Element Functionality

With the caveat that I have no knowledge on the underlying functionality of how Figma works, I’d like to see some improvements around laying out and working with inline elements. Due to the nature of elements in Figma all being boxes, it can be hard to work with inline-style elements.

Placing design elements like a footnote indicator, or a “read more” link inline or _inside_ of a text element often requires abandoning the functionality of auto layout. Likewise, modifying a single word or line of text within a larger text-block requires breaking any existing test style that may be applied. While this may be an edge-case, designers may choose not to use text styles if they can’t modify individual nodes within the text element that may require bold or italic styling.

On the web, we can wrap those individual nodes with a `span`, `strong`, or `em` tag to apply those styles without abandoning the larger parent styling, or losing the inline nature of those elements. Something similar would be great to see when it comes to laying out type in Figma.

### Less Functionality Locked Behind Paywalls

From a business standpoint, this is probably the least likely on the list to happen, but as things currently stand, I feel like it needs to shift at least a little.

Dev mode is great, and if they want to push more advanced features of this mode I’m okay with a paid seat to access those features, but Figma removed a lot of what I’d consider to be “basic” developer features from view mode in order to entice companions and teams to purchase dev seats. I feel like in the long run this has, and is likely to continue to hurt teams who don’t want to, or can’t pay for those developer seats.

I spoke about this last year with Chris Strahl when I was on Knapsacks [Design Systems Podcast](https://www.designsystemspodcast.com/episodes/episode/791d8bf0/75-adam-sedwick-senior-product-manager-harnessing-the-power-of-design-systems-to-unify-your-team), but the arbitrary limit of 4 modes for Figma Variables is another thing I’d like to see adjusted. This issue is compounded to me by the fact that the only way to get around this limit is Figma’s top-of-the-line _Enterprise_ plan. Figma continues to showcase amazing things that can be done with their variables functionality, but unfortunately for you if you need more than 4 modes, better get on the phone with your IT or Finance departments, because there’s a massive jump in price to access this feature. Not to mention the fact that access to the REST API is also locked behind this same enterprise wall.

If we want designers and developers to work closer together, and as a community we’re pushing for teams to use this sort of functionality, this steep restriction flies in the face of that ability. Figma has already been able to help teams work better together, restricting these tools, processes, and functionality from teams who can’t foot the enterprise bill feels like a mistake.

I’m looking forward to everything being presented as well as getting to hang out with some other community members in person. I’ll also be attending the Knapsack/Clarity event on Wednesday. If you see me there please say hi!
