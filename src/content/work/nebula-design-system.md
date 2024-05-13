---
pubDate: 2023-05-13
# link: https://accessibility.blind3y3design.com/
title: Nebula Design System
heroImage: "@images/work/nebula/design-system-overview.png"
description: Reworking Discovery Education's Design System from the Ground Up
---

## Responsibilities

As the Design Systems Lead at Discovery Education it is my job to drive the vision and product management of our design systems. This includes but is not limited to: driving initiatives to identify and define core principles and values, working with design to create and refine the overall visual style, collaborating with dev to prioritize and create coded components, and ensuring proper creation and adherance to robust guidelines defining those patterns and components.

Each iteration of the design system has been conducted based on user research and testing to validate design decisions and continuously improve the design system. We establish and maintain strong working partnerships with consuming products to understand their needs and ensure components are tested on implementation in actual end-user products.

<div class="breakout">
<!-- Turn this into a responsive component -->

![We are fueled by the belief that every brand has a unique voice, and our mission is to amplify it through thoughtful design and strategic vision.](@images/work/nebula/blue-victor-bg.png)

</div>

## The Existing System

At the start of this work consuming product teams were already utilizing our former design system named Comet, while Comet was serving it’s purpose and displayed usefulness accross multiple products throughout the years, it had some core issues that needed attention:

- Comet was outdated, and many of its basic functions, components, and principles belonged to a time that lacked support.
- It lacked a unique style that could visually represent the essence of Discovery Education.
- Inefficiencies in UI stylistics and needs for new or missing components that were direct needs from product teams.
- The UI and UX patterns were largely inconsistent, causing a disjointed user experience on the platform.
- While Discovery Education served as a singular experience for both Teachers and Students, new theming and composability features could allow for a tailored experience based on individual user roles and needs.

<div class="breakout">

![Composition of over 10 different versions of a single interface element](@images/work/nebula/comet-problems.png)

</div>

### The First Hurdle

We discovered our first hurder almost immediately. When looking at the issues that the organization had with the existing system there was one critical question that needed to be answered: How are we going to get teams to adopt this new design?

Product teams that had strong adoption of the system's design and components were unlikely to have the runway and resources to spend ensuring that a massive design overhaul was not going break their existing work. If these teams were not going to be able to adopt this new version then it might as well not exist. Sure, if a new product was going to get designed or built it could use this new design language, but how would that integrate for the end user? Now they're seeing a disjointed product resulting in a worse overall experience.

In a similar vein, if we chose to abandon the old system and create a new one from scratch, how would we convince products to switch over to the new system? They'd already invested time and effort into integrating the existing system, what benefits would they see from effectively redoing that effort to move to a completely new system?

This is where our creative director Kandice Levero chimed in with a real-world analogy that we would cement as our mental model moving forward for both the design, development, and adoption of this work.

<div class="breakout">

![Aerial photograph of the construction if a new Ise shrine next to an old one](@images/work/nebula/ise-shrine.png)

</div>

To an outsider the Ise Jingu grand shrine in Japan seems to be an eternal structure that evades the eroding effects of time. Those who are familiar with the structure and the special process around it understand that in reality the shrine is torn down and rebuilt every 20 years. A major part of this process is the construction of the new structure, while continuing to use and care for the existing one, even knowing that it will ultimately be torn down and destroyed.

Using the Ise shrine as our analog, we decided to embark on the journey of creating a new system. We would continue to support the existing system while developing the new one, working in the open with our product teams and showcasing how the new system is based on; but improved over, the old. Once we were confident in our build we would begin migrating products over to the new system, eventually moving everyone and finally decomissioning the existing system.

## Taking Aim at the Stars

So began the creation and foundations of **Nebula**!

<p class="breakout aside">
A nebula is a distinct luminescent part of interstellar medium, which can consist of ionized, neutral, or molecular hydrogen and also cosmic dust. Nebulae are often star-forming regions, such as in the "Pillars of Creation" in the Eagle Nebula. (an enormous cloud of dust and gas occupying the space between stars and acting as a nursery for new stars)
</p>

We utilized all necessary understandings, flaws and learnings from the development stages of Comet when beginning Nebula. Without continued support and investment of a system, it can and will become stale which leads to adoption fall off as new needs arise from product teams. While Comet functioned as it needed being a system, it was missing proper usage and visual guidelines. The “who we are” and how we “feel” as a brand and product.

A design system will innately raise the quality floor of the product teams producing experiences, but without a dedicated exploration and experimentation team it can also squash the quality ceiling resulting in a decent, but not a stellar experience or product.

We needed to hone in on our product identity as a separate artifact, helping us stay focused on who we are, while improving the experiences of products for our end users.

## The Foundations

The Design Systems team chose to target and address both product thinking and human centered design goals. Executing key business results, understanding both spectrums of our target audience while co-collaborating and tailoring solutions for each product team needs.

### Color

One of the first things we tackled as a team was an update to our existing color palettes. Taking our learning and process from the Comet system we set out to establish a set of product agnostic palettes. These colors would be used for general interface elements, anything that is not branded or set to a specific product theme.

<div class="breakout">

![Neutral, inteface, and Interactive Color Palettes](@images/work/nebula/colors.png)

</div>

Additionally, each color was tested with our default text color, if the default color did not meet contrast requirements it would be tested with white text. The resulting WCAG compliance levels are listed within the colored badge allowing designers to easily know which text color would be appropriate for use.

### Typography

<div class="breakout">

![Example specimen of Proxima Vara and Mikado-Chan fonts](@images/work/nebula/typography.png)

</div>

Proxima Vara is now our go-to font at Discovery Education, chosen for its accessibility, variety, and impact. While we previously used Proxima Nova as our main system font in the Comet Design System, we've now upgraded to Proxima Vara. This change offers our Product and Print designers more flexibility with weight and slant options, while providing a single file and performance increases for developers.

Mikado-Chan is a custom typeface designed for Discovery Education to align with readability standards in education for both US and UK students. The original Mikado font was crafted by Hannes von Döhren in 2013, we worked with him to expand it by adding additional character sets. We use Mikado-Chan in lessons and resources that teachers can offer to their younger students.

<div class="breakout">

![Glyph adjustment chart for Mikado-Chan creation](@images/work/nebula/mikado-chan.png)

</div>

### Iconography

We refreshed our Iconography, doing away with clutter and redundant icons. Instead of continuing with an increasingly confusing array, we reset from ground zero introducing icons that hold specific purpose or meaning to enhance usability. All updated icons have been crafted in-house by our principal designer Darrell Moore.

<div class="breakout">

![Example of icon offerings in the Nebula Design System](@images/work/nebula/icons.png)

</div>

## Components

Each component is carefully considered with usability, accessibility, and scalability in mind. Buttons, text fields, and other atomic components should be designed to stand alone and combine to form larger, more complex components. It’s essential to consider how each component will adapt to different screen sizes and devices, ensuring a smooth user experience.

<div class="breakout">

![Showcase of input field component specimen](@images/work/nebula/components.png)

</div>

## Credits

I am incredibly proud of my team and the work we've put into the creation of the Nebula Design Systems. There's no way I could have done any of this work without them.

**Creative Director**: Kandice Levero, **Principle Designer**: Darrell Moore, **Sr. Front-End Developer**: Katie O'Connor, and all of our product contributors.
