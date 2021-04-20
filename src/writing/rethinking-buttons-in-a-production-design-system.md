---
date: 2021-02-16T20:00:00
title: Rethinking Buttons in a Production Design System
headerImage: ./src/images/rethinking-buttons/header.jpg
---

After two years of the Comet Design System being used by our teams in product we'd begun to see and hear designers and product owners consider non-system button styles and variations.
In situations like this you need to make a decision as a system - either become the dreaded design police and "squash creative freedom" or embrace the idea of product inspired variation. We chose the latter.


<hr/>

## Embracing external variation

Our original button component had two possible colors, two sizes, and three visual variations. All in all it was a pretty standard spread, you had your primary and secondary colors, "default," ghost, and flat buttons, and the ability to make them smaller with reduced padding.

{% image "./src/images/rethinking-buttons/original-buttons.jpg", "Primary, Secondary, Ghost, and Flat buttons" %}

This worked fine for a time, but eventually product teams would want a product branded button, or we'd hear concerns about the secondary color looking like a disabled button, causing the ghost variation to become our de facto "secondary button."

We also saw some explorations and desire for additional shapes of buttons. Younger audiences showed more interest in bigger, rounder, "softer" buttons, a pill button for example. Specific global callouts or action items could benefit from a FAB - floating action button.

Using these requests we began the task of internal system variation exploration. One of the key factors in this exploration was defining variation categories and their relationships to each other.


<hr/>

## Variation categories

Looking at our existing button component it became clear that we didn't not have the ability to have a ghost or flat button using anything other than our primary color. This realization revealed that our button component was quite restrictive in use. You could have a "default" button in two colors, and then a ghost or flat button in one. Our amazing extensible, design system had unintentionally limited our design potential to 4 fairly similar buttons.

Why could we not have a secondary ghost? Was there logical reasoning behind it or had we simply overlooked it? Could there be the potential of color variation for product branding or creating intentional friction to slow a user when required? The answer to both of these questions is yes of course. Taking stock of our variations allowed us to identify what we call variation categories.

We identified four core categories to expand our button:
- Color
- Type
- Shape
- Size

Having these specified categories allows for a more nuanced way of thinking about the variations, a button would have any value from each category to create a custom variation.

### Color

The *color* category defines what color a button is this may seem simple, but as a system it is important to identify and explore all options because we have made a commitment to inclusive, extensible, and sustainable design. Being able to identify color as a specific category allows us to identify when some variations should be disallowed - a light colored ghost button on a white background for example.

{% image "./src/images/rethinking-buttons/button-examples.jpg", "Left: Light and Dark ghost buttons on White and Dark backgrounds | Right: Primary and Light Ghost buttons on White and Dark backgrounds" %}
 
We expanded our button color palette to include product branded colors as well as light, dark, success, warning, and danger colors. We also made the decision to allow any button to be any color. This alone expanded the creative possibilities greatly.

### Type

The *type* category defines the type, or style, of button. In our case we settled on the same three variations we had before; the filled, ghost, and flat types.

### Shape

The *shape* category defines the shape of the button. What shape your button takes can change the feeling and tone if a design. Our default shape was a rectangle with rounded corners, we expanded upon this shape with a pill for use when a softer aesthetic is desired. We also created an icon-only FAB shape variation for use when we need a global-style callout.

### Size

*Size* is simple enough to think about, is the button normal, small, or large. Smaller buttons may be desired in a denser interface or as actions in a table layout. Larger or expanded buttons may be desired as promotional elements or for younger audiences and those with cognitive or physical difficulties.


<hr/>

Now instead of limiting our designs to one of four variations our designers and developers could use and combination of category values to create hundreds of variations to fit their specific needs.

Header Photo by [Siora Photography](https://medium.com/r/?url=https%3A%2F%2Funsplash.com%2F%40siora18%3Futm_source%3Dunsplash%26utm_medium%3Dreferral%26utm_content%3DcreditCopyText) on [Unsplash](https://medium.com/r/?url=https%3A%2F%2Funsplash.com%2F%3Futm_source%3Dunsplash%26utm_medium%3Dreferral%26utm_content%3DcreditCopyText)