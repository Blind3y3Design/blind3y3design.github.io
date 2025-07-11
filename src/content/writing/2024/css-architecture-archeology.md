---
pubDate: 2024-08-25T12:00:00-04:00
title: "CSS Architecture Archeology"
description: ""
tags:
  - code
  - css
  - development
  - public-learning
---

In web development, one of the most crucial aspects of creating efficient and maintainable CSS is the ability to reduce code duplication and establish a reliable system of reuse. This approach not only streamlines the development process but also enhances the overall performance and scalability of web projects. Thoughtful CSS architecture strategies can create a more organized and flexible codebase that allows for easier maintenance and faster iterations.

In this post, I reflect on some of the CSS architectures that have influenced my approach to structuring and reasoning about CSS, exploring their strengths, limitations, and impact on my web design practices.

## Starting with SMACSS

Back in 2011 Jonathan Snook wrote a book about Scalable and Modular Architecture for CSS ([SMACCS](https://smacss.com/)). I was immediately drawn to this concept, and my teams ended up implementing it across all of our projects at the company I was at, it proved a means to think about the architecture of CSS in a way that worked with, and built on top of the cascade.

Ethan’s industry-changing [Responsive Web Design](https://abookapart.com/products/responsive-web-design.html) had only been published a year or so prior, and SMACSS provided a lens to look at web pages as a structural layout that gets populated by modules (we call these components today). This approach to organizing and thinking about front-end code as reusable modules was a major step towards creating more robust reusable systems.

## Moving to and Using BEM

While I can’t pinpoint exactly when I was introduced to or started using [BEM](https://getbem.com/), I have been using it for the better part of a decade. BEM (Block, Element, Modifier) is a naming convention for CSS that quickly saw adoption among many teams in the 2010s because it provided a meaningful and robust means to think about the relationship between elements, and how we named them.

The core idea behind BEM was the relationship between the three parts of it’s name, the `block`, `element`, and `modifier`. A `block` is a standalone entity that is meaningful on it’s own, some examples are `header`, `navigation`, or `menu`. An `element` differs from a `block` in that it does not have any meaning by itself, and is directly related to the `block` it is a part of, a `menu item` for example. Finally a `modifier` is a flag on a `block` or `element` that indicated how it is different than the base configuration or style.

BEM allowed teams to quickly and easily understand and reason about the architecture of their components, you’d be able to see at a glance how and when sections of code related to each other, and what was unique about them. A block would simply be a class name, where an element would need to follow the block class with a double underscore indicating it’s relation to the block, something like `card` and `card__description`.

### Common issues with BEM

While BEM was undoubtedly helpful it also suffered from a number of issues that would inevitably come up when working on larger components and codebases.

The most common question or concern that would come up was that of the “grandchild” selector. In BEM, every element is a “child” of a block, but there is no direction or indication on what to do if an element has “children”. A frequent example of this issue is `navigation` blocks.

```html
<nav class="navigation">
  <ul class="navigation__list">
    <li>
      <a href="">One</a>
    </li>
    <li>
      <a href="">two</a>
    </li>
    <li>
      <a href="">three</a>
    </li>
  </ul>
</nav>
```

In this example we have our `navigation` block, and a `navigation__list` element, but how are we supposed to name the list items and links? The proposal that typically comes up first is the “double element”, `navigation__list__item` and `navigation__list__link`. According to BEM standards, every element should be directly related to it’s block, so the “correct” way to name these would be `navigation__item` and `navigation__link`, this can be confusing for individuals when working on large components that may have many descendants or complex relationships.

The second most commonly discussed issue is the fact that BEM does not generally align with or allow for generic or utility classes. In BEM any time you’re adjusting or modifying something you should be using a `--modifier` class. This strict pattern often results in significant code duplication for common patterns like `--hidden` or `--active`, where in other systems you might simply have a generic `is-hidden` state class that is reused across multiple components.

## Enter CUBE CSS

In the last year or two I became aware of Andy Bell’s [CUBE CSS](https://cube.fyi/) architecture. CUBE (Composition, Utility, Block, Exception) CSS is an architecture that I feel builds on some of the best parts of both SMACSS and BEM, while solving issues that both had. CUBE is; as Andy puts it “an **extension of CSS**,**”** it builds on the foundational function of the cascade and then enhances it with additional functionality.

The `Composition` portion functions very similarly to the `layout` function of SMACSS in that it defines the macro “composition” of elements. The biggest difference is that in CUBE a `composition` is not tied to a page layout alone, it could be used to define a page, section, or even single component’s compositional properties.

The `Block` in CUBE is equivalent to it’s BEM counterpart, but without the strict syntax rules. A block is used to identify and style a group of elements that “only apply in that context.” Unlike BEM however, because most of the “structural” work has been done in the `composition` layer, `block` styles are much lighter and specific to the unique context of the block.

`Utility` styles are built right into the name of the architecture, so they’ve got first-class treatment and support. In CUBE `utility` styles are very small and specific, doing only one thing: `bg-primary` vs `bg-secondary` defining only the background of an element, or `sr-only` applying styles that visually hide an element, but leave it available to assistive technology.

I’ve only used CUBE-style architecture on a few side projects, but my experience with it has been exceptional. This site is built using CUBE ideas and the `composition` classes alone feel like a superpower when coming from a strict BEM environment.

## The Tailwind Sized Elephant

I’d be remiss if I didn’t talk about [tailwind](https://tailwindcss.com/) in a post about CSS architecture. For me personally tailwind isn’t the vibe, I know plenty of developers who enjoy working with it and think it “solved CSS,” but the complete dismissal of the cascade and excessive markup don’t align with my own personal feelings of front-end code. I’d much rather have some semantic meaning when looking at my code than an alphabet soup of pure utility classes at every level.

## Thoughts Moving Forward

In today’s modern component-based development ecosystem something along the lines of CUBE’s architecture feels like it strikes the right balance of meaningful code and developer freedom. Within a design system we can expose these sorts of compositional freedoms through “structural” components like a `stack`, `box`, or `card`. This type of structural `composition` component can be lightly prescriptive in what they do, and allow development teams freedom to place whatever content is required for the interface inside of them. Pairing these with existing `block` style components like `button` or `badge` provides teams with the ability to create a multitude of layouts and interfaces without the need to override or duplicate code for one-offs.
