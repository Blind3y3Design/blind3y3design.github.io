---
pubDate: 2024-06-26T12:00:00-04:00
title: "Config 2024 Day One"
description: ""
tags:
  - design
  - development
  - config
  - conference
---

Figma started off the day strong with their opening keynote. UI3 looks like a fresh take on the editor interface, and aims to solve a number of existing issues, from small improvements to massive overhauls that needed a refresh to tackle. The improvements to dev mode are a welcome addition given my previous complaints about it not feeling worth the price, code connect coming out of beta is a huge plus. The AI features announced are numerous and varied, from a visual and extra fuzzy “find similar”, to the ability to generate entire design explorations based on a prompt. Just like any good product demo, they ended with a riff on the “one more thing,” for Figma it’s a new product called Slides. I [tweeted](https://x.com/adamsedwick/status/1806012452385202190?s=46&t=ziJvbl70w2xEkYPqD7uMrA) about the fact that the crowd was collectively more vocally excited for this feature than anything else in the keynote.

## Wishlist Review

So how many items on my wishlist did we get? Quite a few actually!

### Variables

There wasn’t much talk about additional variables or support, but given the type support is relatively new, and all of the other changes, this is not all that surprising.

### Auto Layout

*Massive* changes and additions for Auto Layout! While the functionality is not changing all that much, the reorganization of information and settings as a part of UI3 is a welcome change that I see helping a lot of designers understand and use the feature more. Additionally, as part of UI3 and the new AI functionality there’s a new option called “Suggest Auto Layout.” What this does is Figma analyzes the contents and layout of your component or frame, and generates nested frames on the fly in the position and order required to achieve the existing layout as an auto layout.

Without getting to play with it yet, I am beyond excited for the updates to auto layout and look forward to getting my hands dirty seeing how far I can push the suggestions and how this ability is going to speed up our teams.

### More Dev Mode

Another massive win for the wishlist. Between updates in UI3, and a whole sweet of new features, dev mode is coming into 2024 with a strong argument for the cost and it’s place in the product development process.

Figma iterated on the “Ready for Dev” feature, by addition additional states that identify when something previously marked as ready has had changes, and a new interface to indicate what those changes are when re-marking as ready.

The big changes come in when the dev themselves come into the file. Their new focused mode means developers no longer have to worry about navigating or understanding a complex Figma file, everything they need is surfaced in a lightweight and clean interface. The addition of the “Mark as complete” functionality means that this system can *and should* be integrated into the traditional “handoff” and “review” process. When a developer completes their work they can mark the change in Figma as complete, and The designer can review those changes against the section.

Rounding out dev mode, Code Connect is out of beta and it’s value prop and path to provide developers with actual system code that your team has written, with matching and aligned props is a clear value add. The component explorer combined with this looks like it could be a potential replacement or competitor for basic implementations of storybook or other dev tools. If you just want to be able to see how a component is going to look and change when you change prop values, that’s not possible through Figma Dev Mode and Code Connect.

### Enhanced Documentation Support and “Design Clippy”

Lumping these two together as I feel like they both got mostly answered by the AI releases today.

My wishlist item for enhanced documentation was centered mainly around the ability to provide documentation at “point-of-use” for designers, while we didn’t get exactly that, the visual and “extra” fuzzy search enhancements are a step in this direction. Whether drawing an icon or asking Figma “where is this interface?” And having it spit out exactly what you were looking for a a huge win for ease-of-use, and exactly what I described in the first part of my “Design Clippy” item: “If a designer isn’t sure what the exact name they’re looking for is this sort of ‘helper’ could provide suggestions.”

The second half of my Design Clippy was also admittedly a bit of a softball, creating a feature to allow Figma to automatically generate explorations seemed like a no-brainer to include if they were going to invest in generative AI. I do appreciate Dylan pointing out that these explorations are likely the most basic and common solutions, given that the models in use were trained on the most basic and generic data. Only time will tell if teams allow Figma to train on their designs, and how effective this feature is in the long-term.

### First-Class Responsive Support and Responsive Typography

One of the new features showed off as part of the UI3 demo was a responsive prototype viewer! This was awesome to see, and is absolutely a step in the right direction for enhanced responsive support. I’d still like to see more features come to components in terms of responsive behaviors or breakpoint-style controls. The responsive prototype viewer did ring a little hollow knowing that one of my other major asks was responsive type. Maybe some day in the future, but for now responsive type is still missing. This means that we can now design and wire up fully interactive, responsive prototypes, but if your design system or development teams are using fluid type scales, you’re still going to be unable to replicate that functionality.

### Inline Elements, and Less Paywalls

Nothing explicit about changes to how text or inline elements behave, but I’ll have to explore how things work and are laid out in UI3 to see if there may have been some small enhancements that weren’t announced.

As for less paywalls, we got even more!

Figma’s newest addition to their software is called Slides, It’s a full-blown presentation tool. Myself along with a significant portion of the keynote audience is incredibly exited for this. Now we can create, edit, reorganize, and present *with notes* all from within Figma. It’s free for the remainder of 2024, and then is moving to a pricing of $5/seat/month for org and enterprise teams.

All of the AI features are incredibly new, and Figma is unsure of cost, or level of usage for these tools, so for now that is also going to be free, but they’ve stated they’ll be watching usage and cost data, and are likely to put out a pricing model for these features next year. 

Overall, while I don’t love seeing things put behind paywalls, at least the pricing and value of the different products seem to be much closer aligned. Dev mode is looking to provide massive value for teams, Figjam is still a simple collaborative whiteboard, and Slides is the Keynote/Powerpoint killer I think a lot of designers have been wanting. If we’re going to have to pay more, at least the product are delivering on that cost.

## Presentations, People, and Pubs

I only ended up catching 2 sessions outside of the opening and closing keynotes in person. 

**Building and the Craft of Figma** started with a talk by KC Oh, Ryhan Hassan, and Joel Miller where they dove into the changes, updates, and work behind the UI3 redesign. It was great to hear them talk about the challenges, explorations, and ultimate path to launch for such a major change. With a through line of “Try the hard thing,” I think there’s a number of lessons many product teams could take away.

Showcasing skills like product discovery, idea validation, and market viability analysis, Saron Yitbarek made a clear and simple argument for developers to slow down before diving into the work of building in her talk **Should Developers Design**. Too often developers jump right into building, spending time thinking about or debating frameworks, tech stacks, deployment strategies, etc. before we know if the thing we’re so excited to build is even worth building.

I ended up meeting 5 coworkers in person for the first time, most of these people I’v been working with for the better part of 5 years. I also managed to chat with Jina and Adekunle from the Design Token Community Group for a bit, always great chatting about design tokens. Got a [photo](https://x.com/adamsedwick/status/1806191432920858856?s=46&t=ziJvbl70w2xEkYPqD7uMrA) with Jason Lengstorf, and spoke with many others in the hallways, lines, and in passing. 

Wrapping up the day, I hung out with Chris, Jina, and many other Design System professionals at the Clarity/Knapsack happy hour event. Got to share and hear stories from some amazing folks including representations from the Wayfair and REI (Cedar) Design system teams. 

## Closing Out

Day one of Config 2024 definitely didn’t disappoint. Looking forward to arriving early tomorrow to get some shopping in and customize by bag before diving in to multiple sessions on design systems and running teams.

If you see me say hi! Happy Config.