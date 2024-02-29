---
pubDate: 2024-02-29T12:00:00-04:00
title: "Declarative Design and the Unknown Web"
description: ""
tags:
  - design
  - development
  - design-systems
---

This past week I got enticed into and pulled down a web design rabbit hole. Chris Coyier [wrote on FrontendMasters](https://frontendmasters.com/blog/the-case-for-design-engineers/) back in mid February about [part 2](https://blog.jim-nielsen.com/2024/the-case-for-design-engineers-pt-ii/) of Jim Nielsen’s [The Case for Design Engineers](https://blog.jim-nielsen.com/2022/the-case-for-design-engineers/).

The post Chris links to is a great argument for why we need people who can "bridge the gap" between design and development. It’s a fantastic article in it’s own right, but to get further context I wanted to read part 1.

## Down the rabbit hole we go.

In Jim’s original post he links out to Jason Grigsby’s [Traditional Web Design Process is Fundamentally Broken](https://cloudfour.com/thinks/traditional-web-design-process-is-fundamentally-broken/) series, naturally I had to read all 5 parts. The main point of Jason makes is that we’re spending _far_ too much time designing a facsimile of a final product, rather than producing _actual_ products in the _actual_ medium that they will ultimately live in. Jason’s thoughts are largely centered around responsive design, how we can easily get to "**sixty artifacts** in a best case scenario."

The second article in the series is titled "Design Happens Between Breakpoints," with the main idea being that we don’t _know_ how a user may actually come to the site, and building a design based on 3 static mockups means there’s a lot of "in-between" where decisions need to be made, often times by a developer.

Thematically related, Jim closes out his post with a link to Jeremy Keith’s [Declarative Design](https://adactio.com/journal/18982) post, in which Jeremy explores and identifies the similarities in work like [Intrinsic Web Design](https://www.youtube.com/watch?v=AMPKmh98XLY), [Every Layout](https://every-layout.dev/), and [Utopia](https://utopia.fyi/) ultimately aligning on the ideas of "Declarative Design," the idea that you’re setting up more general rule-sets and allowing the browser to do the work of selecting which font-size, spacing, etc. to use in order to achieve the desired design. This is in opposition to something like Tailwind which is _imperative_ in nature, strictly stating how something should appear in every case.

## Does This Even Matter?

The ideas expressed in all of the posts, videos, books, and sites above really jive with the way I think about web design and design systems. As I’ve continued to work with diverse teams and products with differing needs I find that often times I’d much rather be able to give a globally useful, generally generic ruleset rather than strictly defining how something should look or behave at every single possible viewport or breakpoint.

It seems both simpler and more robust to say "I want you to be generally this size, but no bigger than x, or smaller than y," than it would be to say "Be this size at this viewport, and this size at this viewport, and this size at this viewport, etc. etc. etc."

Specifically from a maintenance standpoint when I think about creating text styles in a design system, using a single `clamp()` function with intrinsic sizing for a globally usable font-size _feels_ more maintainable than trying to identify any number of breakpoints or use-cases that could arise.

This method of declarative design might also explain why I prefer using `gap` to something like `margin` when spacing elements within a layout. Rather than saying "every item here should have x space on the top/right/bottom/left," it feel more natural to say "put x space between all the children of this thing." If you’re defining something complex or unique you _can_ reach for margins or other tools, but for the standard or generic layout you can use a more general rule.

I like the idea of defining a "good" base of styles that can be generally applied and used across most interfaces, I think it’s a big part of why I’m naturally drawn to design systems work. If we have these baselines, and our teams work with an understanding of how pages and layouts shift based on those rules, it’s possible to get some of the benefits of a design engineer just through the use of those rules. Maybe we _don’t_ need to mock out every scenario, because the team already knows how a component or layout is going to behave across those screens.
