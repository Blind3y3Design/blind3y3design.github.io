---
pubDate: 2024-05-05T12:00:00-04:00
title: "Native CSS Nesting"
description: ""
tags:
  - development
  - css
---

With the release of Firefox 117 CSS nesting has full browser support coverage. Let’s take a look at how nesting works in CSS, how it compares to pre-processors like Sass, and some tips, tricks, and gotchas to watch out for.

## What is Nesting?

In any programming language, when you have a declaration inside of another declaration this is called nesting, typically you can identify nested declarations because they are indented within the parent declaration. CSS nesting works no differently, you can nest one selector inside of another selector, and the browser will now identify that nested selector as if it had been manually declared with the parent selector in front of it.

```css
.some-class {
  /* Styles */

  .some-other-class {
    /* More Styles */
  }
}
```

The code above will now render within the browser the same as if you had previously written it like this:

```css
.some-class {
  /* Styles */
}

.some-class .some-other-class {
  /* More Styles */
}
```

This may be familiar if you’ve used any CSS preprocessor in the last decade. The main difference with native CSS nesting is that there is no compile step. Previously, when using a preprocessor your sass/less/stylus code would be run through a build-time compile step that would take the first example and transform it into the second one. With CSS nesting this step is no longer necessary.

## So I don’t need a preprocessor any more?

Well, _it depends._

If you were only using a preprocessor for nesting, and you’re only nesting complete selectors you’re good to go. Just convert your file to the standard CSS format, remove your build step and you’re off to the races!

However, many people use more features of a preprocessor that just nesting. Variables are another common pattern and use-case for preprocessors, they can now be removed thanks to [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), but you’ll have to make sure you swap them all over before running straight to no-build-time land. If you have any preprocessor variables like this `$some-variable` in your code CSS wont know what to do with them, and they’ll ultimately just be an invalid value for the property they’re assigned to.

Another major draw for preprocessor of the ability to add logic to our CSS. Functions and Mixins are the last bastion of preprocessor functionality that hasn’t been added to CSS or handled by another system in a build. There’s currently an [open proposal](https://github.com/w3c/csswg-drafts/issues/9350) that has been accepted by the CSS Working Group, though it’s still under heavy discussion. So if you’re using functions and mixins, you’re still going to need a preprocessor.

## You mentioned “complete selectors” above, what does that mean?

One of the patterns available with preprocessors that was not adopted by CSS is the ability to concatenate strings onto the end of a selector.

In Sass/Less/Stylus you could write the following code:

```sass
.some-class {
    // Styles

    &--special {
	    // More Styles
	}
}
```

And it would compile to:

```css
.some-class {
  /* Styles */
}

.some-class--special {
  /* More Styles */
}
```

While this pattern has seen some popularity, many people also consider it an anti-pattern. It results in source code that can not easily be searched because the compiled selector does not actually exist within the source.

If you have this sort of nesting within your preprocessor code you would need to refactor all of the selector partials into full, complete selectors in order to use native CSS nesting.

## Some helpful nesting patterns

One of my favorite patterns for nesting is co-locating states within their parent. When styling an interactive element, it’s good practice to ensure you’re also proving _at least_ `:hover` and `:focus` states, if not also accounting for `:active`, or other input-specific states. The nested state pattern would look something like this:

```css
a {
  color: var(--link-color);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:focus-visible {
    outline-width: 2px;
    outline-color: var(--link-color);
    outline-style: solid;
  }
}
```

You can see that the additional states are nested within the `a` selector. By nesting the states it’s clear when scanning code that they apply directly to the class or element that they’re nested within, allowing other authors to easily understand the relation.

Another useful pattern is applying additional styles based on the contents of an element using the `has()` selector.

```css
blockquote {
  --blockquote-background-color: transprent;
  --blockquote-border-color: var(--text-color, var(--body-color));
  --blockquote-text-color: var(--text-color, var(--body-color));
  --blockquote-link-color: var(--link-color, var(--gold));

  background: var(--blockquote-background-color);
  border-inline-start: 5px solid var(--blockquote-border-color);
  border-radius: 2px;
  color: var(--blockquote-text-color);
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  gap: 8px;
  padding: 16px;

  a {
    color: var(--blockquote-link-color);
  }

  * {
    font-size: inherit;
  }

  &:has(cite a[href*="twitter"]) {
    --blockquote-background-color: #000000;
    --blockquote-border-color: rgb(29, 155, 240);
    --blockquote-text-color: #ffffff;
    --blockquote-link-color: rgb(29, 155, 240);
  }

  &:has(cite a[href*="mastodon.social"]) {
    --blockquote-background-color: #282c37;
    --blockquote-border-color: #6364ff;
    --blockquote-text-color: #ffffff;
    --blockquote-link-color: #6364ff;
  }
}
```

This is the block quote code on this site created in [this post](https://www.blind3y3design.com/writing/2023/social-block-message/). The basic idea here is that we’re using the `has()` selector to swap the value of custom properties based on the contents within the `blockquote` element. This pattern is handy when you’re modifying an existing element based on the contents inside; or with the upcoming [style() queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries_2), a custom property. This is a useful way to specify a base set of styles, and then only override or modify what is needed without needing to add additional classes or markup to your elements.

I hope you found a couple things interesting, and maybe learned a thing or two about native CSS nesting and how it can be used today to enhance your CSS. Happy coding!
