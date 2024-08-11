---
pubDate: 2024-08-11T12:00:00-04:00
title: "Site Redesign Retrospective"
description: ""
tags:
  - public-learning
  - development
  - design
---

When I migrated my site from [Eleventy](https://www.11ty.dev/) to [Astro](https://astro.build/) I was more concerned with making sure everything was functional. The overall design of this site has been something that has bugged me for the last 8 months; the blue and gold didn’t really _feel_ like me, it was more a placeholder than anything else. I wanted a visual language that was clean, but poppy. Something that felt like it spoke to the combined set of skills that I have as a product polyglot.

Additionally, as I’ve been rethinking design systems and CSS architecture in general, I wanted to try my hand at creating and using some newer patterns. The biggest change being a shift away from strict BEM naming, and the adoption of the ideas from [CUBE CSS](https://cube.fyi/) and [Every Layout](https://every-layout.dev/). In it’s time I think BEM served my team and others incredibly well, it gave us a solid framework for thinking about and naming components. However, in today’s component-based ecosystem and with things like scoped styles, the strict structure of BEM isn’t really needed. Components have the ability to encapsulate styles within them, removing the need for the strict `block__element--modifier` dynamic, if code can’t escape the component, we need not worry about it colliding with another bit of code.

## The Design

Originally the scope for the design of this site was significantly larger. I had created a few different themes for the site when it was on 11ty, and had hoped to continue with that idea for the new build. For now I’ve decided to scrap the idea and focus on a single interesting theme that I feel captures my vibe. Thankfully because the entire site is styled using CSS Variables, multiple themes in the future is not off the table, and I’m sure I’ll revisit the idea later, even if just to put out a light mode.

The design language I ended up using is pretty heavily inspired by the Monokai text-editor theme. It’s been my go-to editor theme for the past 2 decades, and has survived the transition from SublimeText, to Atom, to VSCode. I’ve never liked “pure black” sites, so the “almost black” of a text editor felt like the perfect base. From there I grabbed 6 of the syntax highlight colors and applied them as accents, each one relating to a different section of the site.

- **Writing** content is accented with the blue color.
- **Work** content is pink.
- **Projects** are green.
- And finally anything related to the **About** section is orange.

The last two accents are purple and yellow. I haven’t found a major need for these yet; but the home link does turn purple on hover, a nice little surprise if you ask me.

Something that I wanted to make sure to consider with the design refresh was providing a consistent means of wayfinding as you move through the site. Links across the entire experience are highlighted in their respective accent colors. If you’re on a page and all of the links are blue you know you’re on a `/writing` page, if they’re pink you’re in the `/work` section. There are a few exceptions (as with all good rules), the homepage for example links to all 4 sections; and is not it’s own, so it uses all 4 colors, depending on where the content takes you.

## The Build

Originally when I picked Astro as a new framework I was looking for something that used similar tooling to what my teams use in our day-to-day work. While a few layers deep, Astro uses Vite and Rollup under the hood. This meant that I got a blazing fast local setup, and was familiar with all of the plugins at my disposal.

Something I wasn’t as familiar with, but have come to develop a great appreciation for is Zod. Having the site’s content by type-safe has forced me to get more familiar with typescript, and has provided another layer of consistency. The ability to enforce specific content existing, and then knowing the exact shape that data will take allows components to be a little smarter in how they expect data to be supplied.

Speaking of; refactoring the entire CSS architecture of this site has significantly impacted how I think about components. I’ve been a pretty big fan of separating the `structure` and `style` of sites for a while, but I hadn’t had the chance to really test these ideas on a full build until now. This is where CUBE CSS comes in, CUBE (Composition, Utility, Block, Exception) is a methodology for thinking about and writing CSS that emphasizes working _with_ the cascade, rather than running up against it. The majority of your structural and layout styles come from the composition layer. Specific visual treatments are then applied through the block layer. The main benefit here is that because compositions are pure `structure` you can reuse the them for anything, greatly reducing the duplicate layout code across components.

From a design system standpoint the team working on [Polaris](https://polaris.shopify.com/components/layout-and-structure) over at Shopify has created stand-alone components that provide these compositional utilities to their developers. I’ve already begun talking with my team at Discovery Education to see how we can implement something similar.

Finally, I want to give a few shoutouts to some other amazingly smart people who I’m standing on the shoulders of:

- I adapted [Lea Verou’s](https://lea.verou.me/) [tagging methods](https://lea.verou.me/blog/2023/rethinking-categorization/#categories-vs-tags) for this site, along with the idea of “orphan tags” and having them link directly to the post instead of a listing page with only 1 result.
- I’d heard about the bio selector previously, but playing with it on [Jason Lengstorf’s site](https://jason.energy/) was the motivation I needed to add it to mine. It brings a little bit of on-page interaction and playfulness to an otherwise relatively-boring and static homepage.

## Still Todos

Some of the previously existing components still need to be refactored to take advantage of the new CUBE architecture.

Astro has first-class support for [view transitions](https://docs.astro.build/en/guides/view-transitions/) and it’s something I’d like to look into. New web tech is always interesting, and their dynamic nature could bring additional interest to a static site.

As mentioned in the design section, I would like to provide _at least_ a “light mode” for users who prefer that color scheme.
