---
pubDate: 2024-07-21T12:00:00-04:00
title: "Leading Design Systems"
description: ""
tags:
  - professional-development
  - design-operations
  - design-systems
---

As I look to progress in my career one thing that I’ve had to grapple with over the last few months is the idea that I’d no longer be the one with the hands on the wheel of our design systems. Focusing on larger Design Operations and product leadership initiatives means I’m going to have less time to focus on the specifics of design systems. Having been the leader of this team for the better part of a decade, it feels a bit like leaving a part of myself behind.

When done well, design systems work is some of the most interesting, exciting, and dynamic work I can think of. With core goals of improving team effectiveness, reducing simple repetitive work, and providing a trusted baseline for design, functionality and accessibility, there’s always something new to explore or work on that provides new challenges. In a way, design systems are all about finding the best way to provide premium solutions to the hardest “simple” problems.

In my opinion the most critical “skill” I brought to my team was the fact that I’m a polyglot. I’ve been a designer, a developer, and a product manager, I still excel at many aspects of these roles and I speak each language fluently. It’s always been easy for me to jam on a design collab or hop on a call and pair program with someone. These skills meant that I could understand the entire landscape of design systems.

## Understanding Design Systems

Design systems by nature serve (at least) two different user-bases with drastically different needs and expectations. Sure, a simple component library might solve the needs of a developer, but that provides no value to a designer. Similarly, a sticker sheet or Figma library is great for designers, but provides no value to a developer. The magic of design systems is that they live in these spaces, and fill in the space between.

Design Tokens are the perfect example of this idea, they provide a “single source of truth,” for both designers and developers to reference. This means that a designer has a high sense of confidence that if they specify something as `color-primary-100` in their design tool, the developer can just pick up that reference in their codebase and the colors will be the same.

This “in-between” is where I’ve always seen the most value for design systems. A component library that is the same in code and in a design tool is critical, and often the foundation of many design systems, it’s a logical place to start. But when you start looking deeper, or dive into the real roadblocks of design/dev collaboration you find that this is often not the issue.

For a dev team, it might be that they’re spending excessive amounts of time inspecting designed components to understand what props they need to fill out to achieve the desired look. For something like this the design systems team may find it valuable to create a plugin for the design software that crawls the component and outputs exactly what props and values are being used.

For a design team, they may feel a need to provide highly detailed specs for developers to reference or follow. A design systems team may look at this issue and come up with a solution that does this automatically (Thankfully Nathan Curtis thought of it first, and has [already done a lot of the work](https://www.specsplugin.com/) for us).

## Design Systems Leadership

The promise of the design system is “build once, use everywhere.” To me, in order to fulfill that promise you _need_ someone technical in a leadership position. They need to be able to understand the intricacies of software development. If your system needs to support multiple platforms of frameworks how the team addresses this requirement is going to impact their ability to update, maintain, or publish components. A less technical individual might not see a problem with creating and maintaining multiple unique versions of a component.

Alternatively, having someone who is very well versed in development, but does not understand business principles may not be able to parse that it’s not viable right now to rewrite an entire vue or react codebase into web-components given other business objectives.

Design is right there in the name, the leader also needs to be able to understand and talk to designers. Being able to empathize with design-related issues, and having a firm grasp of how design work gets done is crucial to providing the best experience for the teams using your systems.

Part of the problem with finding someone who checks all of these boxes is the industry push towards highly specialized individuals. Amazing designers and developers often specialize in their role and either don’t have the experience, or desire to pivot into this new kind of work. Plus, we really don’t want to take the best performers and remove them from doing their work either.

## Finding the Right Person

It’s 7 years old at this point, but Nathan’s post [Design a Systems Team](https://medium.com/eightshapes-llc/designing-a-systems-team-d22f27a2d81d) does a great job of breaking down the type of leadership that a design system needs. The “Lead” needs to have many of the skills of others on the team in addition to having product leadership and management competencies.

If the design systems team is large enough, it’s possible to split this role into multiple individuals like a design and development leader working in tandem to create and execute on the system’s roadmap. This type of leadership can be seen working to great success at Github, the Primer team is lead by Diana Mounter on the design side and Neha Batra on the engineering side. They gave [a talk at Config](https://www.youtube.com/watch?v=2XuWY2z2TUo&list=PLXDU_eVOJTx6mJpwG0duv0ZZI3aQppm6S&index=64) this year and shared the story of how they found success with this paradigm.

Overall, I’m not quite sure what the future of design systems will look like for my team right now, I’ve still got an eye on the wheel, and my leads are continuing to provide excellent service to our product teams. With new tools and AI on the horizon the list of “things you need to understand,” isn’t getting any shorter, but our designers and developers deserve that we put our best foot forward and continue to serve their unique needs in compelling ways.
