---
pubDate: 2023-12-17T12:00:00-06:00
title: "Taking off with Astro"
description: "Rebuilding my website using Astro.build"
heroImage: "@images/writing/astro-takeoff/hero.png"
tags:
  - development
  - design
  - design-systems
  - public-learning
---

It's been about 3 years since I moved this site over to [11ty](https://www.11ty.dev/) (Eleventy), and it's been a great ride. I still think 11ty is a fantastic static site generator, but I wanted to try out some new front-end frameworks and I feel like a personal website is always the playground to learn new things.

The two frameworks I've had my eye on for a while now were [Astro](https://www.google.com/search?client=firefox-b-1-d&q=svelte) and [Svelte](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/). I originally explored rebuilding this site with SvelteKit and that work can still be found [here](https://github.com/Blind3y3Design/sveltekit-website). However, since I wanted to learn both, I had simultatiously set out to rebuild my [Accessibility Playbook](https://accessibility.blind3y3design.com/) which was also an 11ty site using Astro. In the end I completed that project first, and found that I gravited more to the way Astro likes to do things over Svelte, so I abandoned the SvelteKit rebuild of this site and kicked off a new build in Astro.

## Why Leave 11ty?

Since there was really nothing wring with 11ty if I wanted to just keep writing blog posts and updating the website there wasn't really anything that _needed_ to change. What ended up ultimately convincing my to hop ship was the edges I kept running up against in 11ty with wanting to build a more component-based system. In my day-to-day work with design systems I am often working with and advocating for component-based design; and it just wasn't coming together the way I wanted in 11ty. Sure you can create nunjucks macros, and pass around data that way, but there was no "native" solution to "proper" component based design patterns, at least not one I had found at the time.

## Benefits of Astro

For me, the biggest benefits to astro were:

1. The same native support for markdown (and MDX) files. Not having to move, or massively rewrite my content was a must-have,
2. Native component-based design patterns baked into the framework. It's an added benefit that Astro can effectively use any other framework's components as well. We use Vue at Discovery Education, and there's no reason I couldn't simply pick up and drop in a vue component onto this site if I wanted to.

Astro's "content collections" function very similarly to collections in 11ty with the added benefit of being able to define custom typescript based schema per-collection using [Zod](https://zod.dev/).

## Moving Forward

I've still got a fair bit of tinkering and cleanup ahead as I reduce duplicated code and create components, but all of the site links should be working and I feel it's better to launch and update than continually tweak without every launching something.

One major change right now is there are no themes on this version of the site. Losing theme support is sad, but it's high on my prioroty list to re-enstate them as soon as possible.

I've had a blast moving over to Astro and look forward to the new flexibility that I have in creating components, layouts, and content.
