---
pubDate: 2024-02-16T12:00:00-04:00
title: "Indicating Link Posts"
description: "Making posts that link to other's work more obvious"
tags:
  - design
  - HTML
  - css
  - astro
---

As I read posts or see cool videos on the web I want to be able to write a short post and link to those resources. However, I want to be able to clearly indicate those posts and differentiate them from other blog posts that are primarily content to be read on this site.

Thankfully that's relatively easy to do, and I wanted to share how I went about it using Astro.

The first step was going through my old posts and adding a new `tag` that I've named `link-post`. By using a tag I get a couple of things for free. I've already got tags displayed on the bottom of each page, and 'tag' specific routes on this site.

<p class="aside">
One of the other major benefits of using tags is that in the future, if I want to create a nicer page that shows all of the link posts I could just filter my writing collection to find all posts with the link-post tag. Additionally, I could also filter out any post containing that tag from my main writing feed. I don't see a major reason to do that at this time, but it's nice to have the options available.
</p>

The next order of business was to indicate what posts are link posts on my post lists, again tags coming in handy for this. I'd been meaning to clean up some of my old migrated site architecture and code so I ended up creating a component for my post previews. While grabbing post data and passing it ot the component I pass a simple `.includes` check to a boolean prop indicating whether or not the post is a link post based on the tags on the post.

```astro
<PostPreview
  link={post.slug}
  title={post.data.title}
  pubDate={post.data.pubDate}
  isLinkPost={post.data.tags.includes("link-post")}
  type="compact"
/>
```

Then within the component I'm just conditionally rendering the link icon next to the title if the boolean value is true.

```astro
<p class="post-preview__title">
  {title}
  {
    isLinkPost && (
      <Icon class="post-preview__link-icon" name="mdi:link-variant" />
    )
  }
</p>
```

The last link in the chain was create a small astro component that I can use on these posts to create an obvious CTA linking back to the main source.

```astro
---
import type { HTMLAttributes } from "astro/types";
import { Icon } from "astro-icon";

interface Props extends HTMLAttributes<"a"> {
  link: string;
  linkText: string;
}

const { link, linkText = "View Link", ...props } = Astro.props;
---

<a href={link} class="post-link" {...props}>
  {linkText}
  <Icon class="post-link__icon" name="mdi:link-variant" />
</a>;
```

Super basic stuff going on here. I'm just extending the base `a` element with a couple of props so that I can reuse this bit of code in mdx files without needing to manually copy and pase it. This component outputs a simple button styled link onto the page.

In addition to getting a neat new feature that indicates posts on the site that link out to other content, I was able to componentize a couple areas and clean up some major styling debt. There's still more work to do, but I'm having a blast working in astro and bringing my site into the modern web era.
