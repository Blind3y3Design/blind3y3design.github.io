---
date: 2019-09-13T20:00:00
title: Extending CSS with Programmatic Selectors
subtitle: Powerful CSS tricks beyond the simple class and id selectors
headerImage: ./src/images/extending-css/header.jpg
---

There are many powerful tricks in CSS that allow developers to apply styles in more nuanced ways than a simple class or id. The goal of this article is to introduce developers to some of the more obscure and nuanced selectors and how they can be used to apply styles in a more programmatic way.

## Introducing the Attribute Selector

I often see developers write Javascript code to add or remove classes to apply styles that could be applied through native html or data attributes.

This is where the `[attr=""]` selector comes in to play. For example `html[dir="rtl"]` applies styles when the html element has the dir attribute with a value of `rtl`.

### Data Attributes

Much like native attributes, you can select data attributes instead of also requiring a custom class. Many modern JS frameworks use data attributes to indicate the state of components. By using the `[data-attr=""]` selector you can apply styles based on this existing code rather than also applying additional markup for presentational means.

``` html
<button class="button button-with-tooltip button-with-tooltip--top" data-tooltip-text="I am a Tooltip" data-tooltip-location="top">I have a tooltip</button>
```

The above code is how a developer would add classes to an element in order to use them as hooks for styling.

``` html
<button class="button" data-tooltip-text="I am a Tooltip" data-tooltip-location="top">I have a tooltip</button>
```

The same element using data attributes to apply styles without additional classes.

`.button[data-tooltip-text]` matches any button where the data attribute is present regardless of the attribute value. We can use this to apple global styles for any button with a tooltip.

`.button[data-tooltip-location="top"]` matches buttons with the data attribute value of `top`. With this selector we can apply styles that are specific to buttons where the tooltip will be displayed above the button.

### Wildcard matches

You can select elements with attributes — `href`, `class`, etc. — that include, start, or end with specific strings. This can be useful to target specific types of links, or a full set of class types.

- Contains = `[class*="card"]`. The `*` wildcard matches any attribute value that contains the passed string.
- Starts with = `href^="tel:"`. The `^` wildcard matches any attribute value that begins with the passed string.
- Ends with = `href$=".org"` The `$` wildcard matches any attribute value that ends with the passed string.

## Psuedo-selectors

Psuedo-selectors are used to target elements based on a specified state. `:hover`, `:visited`, `:active`, `:disabled` and `:checked` are the more commonly used psuedo-selectors.

### Empty Element Selectors

`:empty`, `:blank`, and `:-moz-only-whitespace`. Useful for cleaning up excess whitespace that may be caused by empty elements generated by content management system text editors.

- `:empty` targets elements with no content or only comments, but will fail to target elements that have any whitespace.
- `:blank` is part of the level 4 selector spec. As part of the Working Draft it is not currently available, but is on the horizon.
- `:-moz-only-whitespace` functions like `:blank` and is currently available in Firefox.

### Focus-Within

`:focus-within` applies to an element that has received focus or contains any children that have focus.

`:focus-within` is a newer selector that has support in most modern browsers. There is no support in Internet Explorer or current versions of Edge; but, there are many small polyfills available if desired.

### Content Length Selectors

`:nth-child`, `:nth-of-type`, `:only-child`, `:only-of-type`

The most common use-cases are to use `:nth-child(odd)` to style table rows in a zebra pattern, or `:first-child` and `:last-child` to remove margins.

Extending these selectors with some logic and math opens their potential to create new dynamic layouts. Chris Coyer wrote an [extensive article](https://css-tricks.com/useful-nth-child-recipies/) back in 2011 detailing some of the more useful recipes.

One recipe I end up using a lot is :nth-child(Xn+Y) This formula allows you to select every X child, starting with child Y. When creating grids of items you can select the beginning or end of every row for more granular control.

``` css
.card:nth-child(4n+4) {
    // Add styles to every 4 .card elements starting with the 4th
}
```

### The Target Selector

`:target` display styles when the id of an element matches the segment of the current url.

## Pre-processor Selectors

Many developers now use CSS pre-processors like Sass, Less, and Stylus. These pre-processors have built-in-functions that provide additional utility when authoring CSS.

### Pre-processor parent context selector

This selector is useful to reduce code bloat if you need to add a specific style based on the parent element’s class.

``` scss
.class {
    &.other-class {
        // these styles apply if .class also has .other-class
    }
    .parent-class & {
        // these styles apply if .class has a parent with .parent-class
    }
}}
```

compiles to

``` css
.class.other-class {
    /* these styles apply if .class also has .other-class */
}
.parent-class .class {
    /* these styles apply if .class has a parent with .parent-class */
}
```

### Pre-processor selector modifying

You can combine selectors by touching the ampersand. This works well with naming systems like BEM. Rather than writing out the block each time you can nest inside the block and use the ampersand.

``` scss
.block {
    &__element {
        // these styles match .block__element
    }
    &--modifier {
        // these styles match .block--modifier
    }
}}
```

compiles to

``` css
.block__element {
    /* these styles match .block__element */
}
.block--modifier {
    /* these styles match .block--modifier */
}
```

## Bringing it Home

Thinking in a more programmatic way about how to author styles allows for cleaner semantic markup, and reduces the complexity and points of failure when combining presentational and functional changes.

Combining this way of thinking with modern build tools available to developers means code can be easily scanned and human-readable speeding up the development process and reducing human error.

<hr/>

Thanks for reading!

If you have any suggestions or ideas, feel free to reach out on Twitter or drop a reply.

Header photo by [Maik Jonietz](https://unsplash.com/@der_maik_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/css?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)