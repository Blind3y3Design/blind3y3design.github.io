---
pubDate: 2024-03-17T12:00:00-04:00
title: "Solving Complex Dynamic Problems with Systemic Design"
description: ""
tags:
  - design
  - design-systems
  - product-development
---

Over the past few weeks, I've been collaborating with a product team to create an interface for state and academic standards. The primary idea is that a user could select the standards document they want to view and then browse or filter the records for a specific standard. They could then view all related assets and materials that we provide for that standard.

Everything seemed to be on track. We were refining some visuals with the project's designer to align them with our design system. However, during a design review last week, it was pointed out that the designer's assumption about categorizing content into headings was flawed. It turns out that there is no uniform structure across all the different states and standard documents, and these headings could be repeated, even within the same section. This left the designer feeling frustrated and overwhelmed. What were they supposed to be _designing_ at this point?

## The Drawback of "Traditional" Design

Situations like these highlight the value of design systems and, more importantly, systemic design. The designer's previous approach was to design an interface to accommodate the structure of a single standards document. While the designs they presented looked great, they didn't account for other structures or the unexpected repetition of data.

Many people are familiar with this design approach, which is often the go-to design process for projects. When all the requirements are clearly laid out, and there are minimal unknowns or constraints beyond your control, this approach works well. But why doesn't it work in this instance?

In this case, there are significant constraints that we cannot control. We don't determine the structure or data within these documents. They are produced by governing bodies within individual state or academic groups. If we design a clever interface based on one dataset, we can't guarantee that a completely different dataset will function the same way. Additionally, assumptions made based on the document's structure, such as headings, parent/child relationships, additional metadata, etc., may not hold true across the diverse set of documents we need to support.

To use this design method for this project, we would need to create unique interfaces for every new type of document we want to support. Even if we only consider the 50 states in the US, each state has multiple documents for different subjects, and these documents could be created and released decades apart.

## Systemic Design as a Solution

Systemic design is more of a design methodology than a single change in the design process. The main idea is to view the entire design as a system, or series of systems, and consider how they interact to produce the final result.

In this case, it involves **identifying** the basic elements shared across all documents, **understanding** how these elements relate to each other, and **defining** a set of rules for how they can be combined to create an interface.

### Identify

The first major step in creating a systemic solution to any complex and unpredictable design problem is to identify as many variables as possible up front. This sets us up for success moving forward.

For us, this involved creating a single "item" with conditional elements based on the data present. We ended up with an item that:

- May have children
- May have aligned resources within our products
- May have one or many labels that need to be displayed
- May have a number associated with it
- Will have a description

## Understand

By identifying all these conditions, we can start with the simplest definition of an "item" as a piece of text. The only thing that _every_ "item" has in common is a description. From there, we can begin to layer on and combine other elements to create a full interface.

Some questions we can ask to begin understanding the relationships between these systems include:

- Does this item have children? How do we indicate that relationship? How many descendants can we feasibly support?
- What does an item look like with no label? With one label? With multiple labels?
- How do we indicate when we have resources within our product that relate to this?
- How complex is this single item if all these variables are present? How do we gracefully increase or decrease that complexity?

## Define

Once we've identified the variables and understood the relationships between them, we can start defining rules to construct the final result based on the available data. This is where the term "systemic" design truly earns its name - it's where we design how the system will work.

Potential solutions based on the data we've been using could include:

- If an item has children, present it as an expandable section, possibly with a visual container or background.
- If an item has a number, display it in bold, inline, before the description text. This serves as an anchoring element for the user to quickly scan the page.
- Display labels above their respective content in a way that clearly indicates they are labels.

The real benefit here is that once these decisions are made and rules are in place, we don't need to design additional interfaces when the content changes. The system automatically produces the desired result.

## The Final Product

Now that we've defined the rules of our system, we can test it. The best way to do this is to take samples from several diverse data sets and see what works and what could be improved. Do our assumptions hold up across these data sets? Does the final design make visual and logical sense? Do our individual decisions work together or against each other?

While this process may take longer to produce a final product, the time invested in analyzing, testing, evaluating, and adapting to the results will be worth it. By taking the time to thoroughly understand the system you're creating and how it needs to respond to dynamic inputs, you'll produce a more robust and sustainable end result.
