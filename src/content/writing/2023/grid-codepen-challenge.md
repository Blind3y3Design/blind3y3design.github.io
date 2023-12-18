---
pubDate: 2023-11-18T12:00:00-04:00
title: "Learning Grid Thanks to Codepen Challenges"
description: "Sharing thoughts about how I learned more about CSS Grid thanks to the November codepen challenge"
tags:
  - HTML
  - css
  - development
  - code
  - design
  - public-learning
---

This past week I partook in my very first Codepen [Challenge](https://codepen.io/challenges).

This month’s Codepen challenge is **Style Trends**. It’s an interesting “meta-challenge” where every week the HTML template provided is exactly the same and you need to create a unique design that matches the theme of the week.

This past week the theme was **_[Neo-Brutalism](https://bootcamp.uxdesign.cc/the-neubrutalism-or-neo-brutalism-ui-design-trend-641714825fed)_**, and while I don’t fancy myself the best designer in the world, I do happen to enjoy a good challenge, Having a background in print design focused on [Bauhaus](https://en.wikipedia.org/wiki/Bauhaus) and [International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style) I thought this would be an exploration that is right up my alley.

## The Challenge

The most interesting part of the challenge for me was the limitation that you can’t alter the markup in any way.

<p class="codepen" data-height="600" data-default-tab="html" data-slug-hash="poGdqGb" data-user="Blind3y3Design" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Blind3y3Design/pen/poGdqGb">
  Neo-Brutalism Codepen Challenge</a> by Adam Sedwick (<a href="https://codepen.io/Blind3y3Design">@Blind3y3Design</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

As you can see, every “section” is nested within a single parent. There is no actual implied or intended layout at all. With the goal of making a “dashboard” I wanted to be able to have grids of “cards” that I would be able to arrange into a specific layout.

In terms of modern layout technologies I know flexbox like the back of my hand, but it’s also the tool I typically reach for when designing components and layouts, unfortunately without any additional layout-based containers flexbox wasn’t going to work here.

I was going to need to use CSS Grids. Within my own work I’ve only dipped my toes into the power that Grid provides. I’ve used it to great simple “grids” of cards, and occasionally within a component itself for layouts, but never for anything this big or complex.

```css
.dashboard {
  grid-template-areas:
    "profile profile profile profile profile profile activity activity"
    "schedule schedule schedule schedule exercises exercises activity activity"
    "calories calories personal personal challenges challenges activity activity";
}
.profile {
  grid-area: profile;
}
.schedule-table {
  grid-area: schedule;
}
.exercise-table {
  grid-area: exercises;
}
.calories {
  grid-area: calories;
}
.personal-bests {
  grid-area: personal;
}
.challenges {
  grid-area: challenges;
}
.activity-feed {
  grid-area: activity;
}
```

I initially tried to use `grid-template-areas`, but it quickly became frustrated with the way they work, given I wanted a row with 2 items, followed by a row with 3, and then 4. In order to accomplish this I would need to spell out exactly where I wanted each item in a repetitive fashion with named grid-areas, It just seemed like more work and duplication than what I could achieve with `grid-template-columns` and `grid-template-rows`.

Focusing on my chosen method of using columns and rows, I was able to combine multiple selectors that had similar styling in order to reduce the complexity of the code. In my design the `.calories`, `.personal-bests`, and `.challenges` elements all had the same basic style and layout, so I could combine all of that code into a single style.

```css
.calories,
.personal-bests,
.challenges {
  --color-inner-shadow: var(--color-white);

  background: var(--color-white);
  border: var(--brutal-border);
  box-shadow:
    10px 10px 0 -3px var(--color-inner-shadow),
    10px 10px var(--color-black);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-1);

  @media (min-width: 1024px) {
    grid-column: span 2;
    grid-row: 3;
  }

  ul {
    gap: var(--space-1);
  }
}
```

The main layout heavy work here is being handled within the media query. The entire dashboard is single column below 1024px. You better believe this dashboard is responsive.

```css
@media (min-width: 1024px) {
  grid-column: span 2;
  grid-row: 3;
}
```

Because this style is being applied to all 3 elements I know that they will all span 2 columns, and be located in the 3rd row. These elements are the first, second, and third elements in this row, so they take up the first 6 columns, leaving 2 columns of space all the way to the right for the `.activity-feed` element, which is styled to start at column 7 and span 2 while starting in row 1 and span 3.

```css
.activity-feed {
  // Other Styles

	@media (min-width: 1024px) {
    grid-column: 7 / span 2;
    grid-row: 1 / span 3;
  }
}
```

## Final Thoughts

This was the most I’ve ever worked with CSS Grid, and by far the most complex layout style I’ve done with it. My go-to would have been to wrap the content in multiple containing element in order to section out the layout and use flexbox to achieve this same design. I’m incredibly happy with the final product, and don’t know if I would have had the opportunity to explore the layout power of Grid had I not attempted this challenge.

I look forward to evaluating past code and, when considering work in the future, watching for where we can begin to smartly implement CSS Grid over multiple nested elements to achieve a layout.

If nothing else, I had a blast with this challenge, and will be trying my hand at the next 2 weeks as well to see what different kinds of techniques, layouts, and designs this inspires. I would encourage anyone to take a look at these challenges as they’re a great way to practice your skills and try out new things with “real-world” style constraints.

Here's the final results (for a full-view visit [the pen](https://codepen.io/Blind3y3Design/pen/poGdqGb)):

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="poGdqGb" data-user="Blind3y3Design" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Blind3y3Design/pen/poGdqGb">
  Neo-Brutalism Codepen Challenge</a> by Adam Sedwick (<a href="https://codepen.io/Blind3y3Design">@Blind3y3Design</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
