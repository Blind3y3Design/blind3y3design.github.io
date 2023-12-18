---
pubDate: 2023-11-27T12:00:00-04:00
title: "Semantic HTML and Accessibility"
description: "Explaining what semantic HTML is and how it benefits accessibility"
tags:
  - HTML
  - development
  - accessibility
---

## What is Semantic HTML?

In programming, _semantics_ refers to the meaning of a piece of code. HTML (Hypertext Markup Language) is the backbone of the web, it is ultimately what is rendered in a browser when someone visits a website.

**Semantic HTML** is the concept that markup should be coded to represent that _data_ that an element contains and not just based on default presentation or styling. Presentation (how does this look) is the responsibility of CSS.

A simple example of semantic markup is the `h1` element. You can style an `h1` to appear however you want, but simply by using an `h1` you are explicitly telling the browser that “this is first, and primary heading of this page.”

### What Are The Benefits of Using Semantic HTML?

There is implicit meaning associated with semantic HTML elements. This means that by simply using semantic markup we can effectively describe the structure of a layout without additional markup.

Assistive technology can use the same implicit meaning of semantic elements as signposts and landmarks to help users navigate the web.

Semantic markup elements can assist developers in understanding the types of content that will be populated into them.

Some semantic elements have intrinsic interaction and event bindings reducing the need to write custom code to account for these interactions.

## Understanding Semantic HTML By Creating A Custom Accessible Button

Take the simple HTML `<button>`element, at it’s simplest:

- it is understood in markup to be an interactive element
- it is announced to assistive technology as a `button` indicating that a user can interact with it
- it can be `clicked` with a pointer device, or interacted with through the `space` or `enter` keys on a keyboard
- it accepts a `disabled` attribute to prevent interaction and indicate that it is disabled
- it has default visual styling that indicates `default`, `hover`, `focus`, and `active` states
- it can be passed any other native html attributes such as an `id` or `class`

```html
<button>Button</button>
```

The following example but does a good job of demonstrating why we should strive to use semantic elements.

```jsx
const Button = (props) => {
  const { disabled } = props;
  const onClick = () => {
    if (!disabled) {
      console.log("Click!");
    }
  };
  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={disabled ? "-1" : "0"}
      onKeyDown={onKeyDown}
      className={`button ${disabled ? "button--disabled" : ""}`}
      aria-disabled={disabled}
    >
      Delete
    </div>
  );
};
```

Neither one of these “button” elements _does_ anything yet. This is the bare minimum required to get an interactive `button` onto the page. Not only does the semantic HTML `button` have significantly less code, it is easier to understand as a developer, and there is no concern about accounting for different interaction methods or states.

### Breaking Down the Implicit Attributes

If we look at the “button” created with react code you can see multiple attributes need to be added to the generic `<div>` element:

- `onClick` and the associated function is needed to handle pointer interaction
- `role` is needed to indicate what the “role” of the element is to assistive technology
- `tabIndex` is needed to allow the element to be accessed through the keyboard, however we need an additional conditional and property here to disallow this access if the button is supposed to be disabled.
- `onKeyDown` similarly to `onClick` is needed along with the associated function to provide keyboard interactivity
- `className` is needed to provide classes to the element in order to give provide any meaningful visual styles, since be default a div has none. Again we see the `disabled` prop is required here as well
- `aria-disabled` is used to indicate to assistive technology that this element is disabled

All of these properties and attributes are provided “out of the box” with the natively semantic `<button>` element.

## Final Thoughts

We’ll dig into what ARIA (Accessible Rich Internet Applications) is in another post, but there’s two great principles that can be used as checkpoints when considering how to code accessible applications using semantic HTML.

The first is known as “[The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1)”:

> If you _can_ use a native HTML element [[HTML51](https://www.w3.org/TR/using-aria/#bib-html51)] or attribute with the semantics and behavior you require **already built in**, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible**, then do so**.

This may seem pretty obvious, if something already exists natively as a part of the web platform use that. Anything that is provided as a part of the HTML spec has often already gone through rigorous testing to ensure that it is understood across all browsers, has any necessary interactions, labels, and identifiers by default, and will be understood by assistive technology.

The second is a common saying among accessibility professionals:

> No ARIA is better than bad ARIA

The idea behind this is that often, even with the best of intentions, simply slapping aria attributes or roles on an element can cause more harm than good. If you’re creating a custom element and finding yourself needing to add a multitude of attributes or complex logic it might be a good idea to take a step back and evaluate if this is the best way to achieve the desired goal.
