---
pubDate: 2024-02-10T12:00:00-04:00
title: "Taking Astro’s Starlight for a spin: Design System Documentation"
description: "Exploring using Astro's docs platform Starlight for design system documentation"
tags:
  - public-learning
  - development
  - design-systems
---

This past week I spent some time exploring using [Starlight](https://starlight.astro.build/) as a potential replatform for our design system documentation. The major reason I was drawn to starlight is that because it’s built atop [Astro](https://astro.build/), it has support for all of the major players in the UI framework market. Our current system is built in Vue, but if we want to explore web components (with or without lit), or service another team using react we have the ability to pull all of those components into a single place using Astro’s [framework integrations](https://docs.astro.build/en/guides/framework-components/#official-ui-framework-integrations) and [islands architecture](https://docs.astro.build/en/concepts/islands/).

Overall I’m pretty happy with the product for the short time I’ve had playing around. It’s a great system for quickly getting a doc site spun up and feels very similar to something like [VuePress](https://vuepress.vuejs.org/) or [VitePress](https://vitepress.dev/) from a general layout and design perspective. I’ve got to spend a bit more time kicking the wheels before we make any major investment in a replatform but I wanted to share my initial thoughts.

## The Good

### Startup and Performance

Unsurprisingly setting up a Starlight project is just as easy as setting up any other Astro project, because it is an Astro project. Starlight has a few additional configuration options in the Astro config provided through the starlight integration. These options are mostly to set up things like the main sidebar navigation, or to include any external files and resources.

Because starlight is basically just an Astro project you get all of the performance of an Astro project right at the beginning. Builds take practically no time, and everything is rendered SSR by default and served as HTML unless you’re using client-side hydration.

### Theme Customization

There’s a fair bit of theme customization out of the box. Working in design systems I am always likely to want more than what any “out-of-the-box” solution can provide, but I was pleasantly surprised that the light and dark themes, as well as many other defining attributes; like page width, are defined as CSS variables and can simply be overridden in a custom CSS file.

The Starlight team has gone so far as to put a full [section]() in their docs about the theme customization as well as a nifty tool that will live-update the docs as you’re viewing them and provide the necessary CSS Custom Properties to you so you can plop them right into your code knowing the result they will provide. Neat!

## The Bad

### Component Issues

I don’t feel like I can 100% blame Starlight for this but I spent the better part of 2 days trying to get our design system components imported into the project. We export cue components as an NPM package, I’ve got the package installed, and can reference other items and files in the package, but for some reason when trying to import the components, nothing.

My biggest gripe here is the silent failure. There’s no error informing me of what I’m doing wrong. When I don’t use the `client` directive, I’m at least informed that our components do not have a template or render function embedded into them, but when using `client:only=“vue”` there is no error indicating that the component isn’t going to work or load. All I get is an empty `Astro-island` element on the page.

As I said before, I’m not even sure this is Astro or Starlight’s fault. When I grab the code for a component and manually add it to a `.vue` file within the project itself it works a peach. This makes me believe there is either something wrong with how I am importing the components or how we’re exporting them in the package. My complaint with Astro/Starlight is that I am hitting a brick wall in debugging because I’m not even sure what is going wrong.

### Default styling

While I mentioned the customizability and theming options in the good section, I do feel that some of the Starlight team’s styles, or rather selectors, are a little bit of a pain. They’re quite high in specificity, and I’ve noted at least a few times where I need to either construct an oddly specific selector or, even worse, use an `!important`.

I believe the Starlight team is already aware of this issue and I think they agree, at least somewhat, since they’ve opened an [issue](https://github.com/withastro/starlight/discussions/1048) to explore using CSS `@layer` properties to house their base styles so that they’re easier to override. This gives me hope and I look forward to the update.

## Features I’d Love To See Added

### Templates

I did not love that there are only two templates, no way to create custom templates, and no way to extend the existing templates. First, the existing `doc` template covers like 90% of my designed use-case, and that is an amazing accomplishment in its own. I just wish I could add a couple things or make a few tweaks.

A simple example of this is the `description` frontmatter that is optional within doc pages. By default this property is only used for additional page metadata for a browser or social links. I’d love to be able to use this property within the header of a page and place it under the `title`. There’s no way to do with within the product as it sites now. There’s no way to edit or extend the existing templates, and trying to use a template other than `doc` or `splash` results in a type error.

Similarly to the default styling issue there’s already a [related issue](https://github.com/withastro/starlight/discussions/1112) open on the Starlight GitHub. It does look like it’s only for custom templates right now, but another promising development.
