---
date: 2023-09-18T16:00:00
title: "CSS Reset, Normalize, and Base Styles"
thoughtStatus: Evergreen
tags: css, quick thoughts
---

Inspired by a conversation between Dave and Chris on the recent shoptalk show [episode 582](https://shoptalkshow.com/582/), I wanted to take a look at the history of CSS resets and see what I could put into a “reset” or “normalize” file that was tailored to my specific sensibilities. 

## Why did we need to reset CSS?

Since the earliest days of the web different browsers have had their own opinions on what the default presentation of elements should be. The most common offending styles were the default `padding` and `margin` styles applied across base elements such as headings or p tags. A CSS reset was a file that would take all of these browser opinions and wipe them out.

As an example, one of the most well-known css reset created by [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/) contained this selector:

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
```

As you can see in this line of code, there is a massive list of elements, and all of those elements are being force to have no margin, padding, or border. The font size for all of these elements is also set to be 100%, which for most browsers equates to 16px. `font: inherit` and `vertical-align: baseline` force these elements to all use the same font settings and vertical alignment respectively.

These practice of using these types of files allowed designers and developers to work from a completely blank slate without needing to fight with or override existing styles for every individual browser.

## Normalizing browser behavior instead of wiping it out

In 2012 Nicolas Gallagher created and released [normalize.css](https://nicolasgallagher.com/about-normalize-css/) the idea behind this project was to move past the idea of completely wiping out browser defaults in favor of preserving useful defaults and “normalizing” them across all browsers.

> Resets impose a homogenous visual style by flattening the default styles for almost all elements. In contrast, normalize.css retains many useful default browser styles. This means that you don’t have to redeclare styles for all the common typographic elements.
> 
> 
> When an element has different default styles in different browsers, normalize.css aims to make those styles consistent and in line with modern standards when possible.
> 

By this time HTML5 and CSS3 along with web standards had taken hold and browsers had come closer into alignment on more generally agreeable base styles. Using something like normalize made much more sense for projects as it meant that we did not have to manually write styles for every element being used, and if you forgot to style an element it wouldn’t appear completely broken since we didn’t completely destroy it’s native styles.

Proving it’s usefulness and widespread adoption, you can still go to the [normalize.css](https://github.com/necolas/normalize.css/) github repository and see the project has over 50k stars and is used in over 545k other repos.

## A modern web reset?

As discussed on the Shoptalk show, Andy Bell created a post in 2019 titled [A Modern CSS Reset](https://andy-bell.co.uk/a-modern-css-reset/). If the community had moved away from resetting styles and adopted something like normalize.css so strongly, why would we go backwards and reset css today?

For starters when taking a look at Andy’s post you’ll note the reset is significantly smaller, more conservative, and even uses a few modern selector features to intelligently target specific situations.

Starting at the top the very first item in the reset should be familiar to anyone who has worked with CSS:

```css
/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

To the chagrin of many CSS developers, one of the great things about the web platform is how unlikely it is to change something in favor of backwards compatibility. Because of this the browser default for the box model and thus `box-sizing` is still `content-box`. Unfortunately for us, this means that if you add a border to an element, by default that border is not included in in the width calculations for an element. This universal reset forces every element, as well as the psuedo `::before` and `::after` elements to use the `border-box` model; matching how many people think about sizing, and saving developers from having to make complex calculations to account for borders.

Similarly, Andy’s reset removes the base margin from many elements. In my own work I often find I am either removing or overriding browser default margins on all of these elements as well, so this is another case where I feel a reset is also applicable.

Looking at one last item from this reset:

```css
/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}
```

I wanted to call this out because it shows the novel thinking behind this style of reset and I feel this sets the foundation for thinking about our own resets or base styles. What this selector is doing is grabbing any `<a>` tag that does not have it’s own custom class and applies the `text-decoration-skip-ink: auto;` style. I personally jive with this line of thinking. Often when we’re styling an experience we will create our own custom styles for elements, and with a selector like this we’re still defining what we would consider a pleasant default to be even if an element does not end up getting the full treatment of a custom class.

## My own base styles

While I don’t necessarily consider it a “reset” I will often find that I am creating a similar baseline to build my styles off of. I would consider these to be my “base styles,” a clean and simple foundation that I can build the rest of my styles on top of.

I’ve taken many of the ideas in Andy’s post with some of my own personal thoughts and combined them with some of CSS’s new features like [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting) to create my own personal base styles.

Here they are:

```css
*,
*::before,
*::after {
    box-sizing: border-box;

    @media (prefers-reduced-motion: reduce) {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

body {
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 1.4;
    min-height: 100dvh;
}

h1, h2, h3, h4, h5, h6 {
    &:not([class]) {
        color: var(--header-color);
        font-weight: bold;
        line-height: 1.2;
    }
}

a:not([class]) {
    color: var(--link-color);
    text-decoration-skip-ink: auto;
}

img,
picture {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select {
    font: inherit;
}
```