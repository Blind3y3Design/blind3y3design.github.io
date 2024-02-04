---
pubDate: 2024-02-03T12:00:00-04:00
title: "Managing Change in your Design System: Workflows and Change Control at Enterprise Scale"
description: "Notes from the fantastic webinar put on by Knapsack with Nathan Curtis"
tags:
  - design
  - design-systems
  - public-learning
  - product-development
---

This past week [Knapsack](https://www.knapsack.cloud/) held a session with [Nathan Curtis](https://twitter.com/nathanacurtis) all about managing change in a design system.

I took some notes on things I thought were interesting, figured it be worth sharing them here as well.

## **How do I make this [Design Systems] a priority for my organization?**

### Hitching your Wagon

Often times there are other groups or teams within your organization who are beginning to commit, or are already committed to a broader effort. As the design systems team/organization you should look at these efforts as opportunities to shine.

If the design system can enable or ease these efforts that is a clear path to success — “By using the design system, our Infra team was able to spin up this new admin panel in half the time.” Congrats! You’ve now shown the org how investing in; and committing to using, the design system had a direct effect on the organization’s ability to get work done.

### Adoption

Along with the concept of hitching your wagon, when we look at adoption numbers, we need to understand that the system itself needs to provide more value than the opportunity cost of implementing and adopting the system. Even if the time/opportunity cost of adopting a design system is net-neutral, the adopting team could have spent that time on other work.

When we look at what the system is providing and how easy it is to adopt, we should ensure we’re focusing on providing maximum value with a quick and easy onboarding process so teams can focus on what they actually care about.

### Product Managers

As a member of the PM org within our company this one is especially familiar to me.

A great way to show value and get the company to care about design systems aside from hitching your wagon is enabling other teams to complete their work. If you can meet with a PM; or better still — _all_ the PMs you serve, and talk with them about their roadmaps then you have a map of golden opportunities to show how your team is impacting the company and providing value.

How and when can the design systems team lean in and help product teams deliver on their goals? Find ways to accelerate teams and de-risk other initiatives and design systems will become a clear partner in the creation of products within your organization.

## **How do I find ways to create success stories?**

Before we can create success stories we need to understand what success looks like.

Adoption is often the go-to metric for design systems, but what kind of adoption are you looking for at your current system state and size? Is 100% adoption of all components across all products a true metric of success? Many teams may not need all of your components, or may not be able to adopt at this time due to other priorities.

A great way to begin to accrue and tell success stories is to work with teams and create a snowball of success. Get a smaller team to adopt a portion of your system and show how it improves their processes. Take that success and move onto another team, slowly and tactically growing your successes over time. This will build trust within your organization and allow other teams to see how adopting the system can benefit them as well.

## **How do you communicate with your audience?**

An important factor in the longevity and success of a design system is the partners the system works with. Communication is key to developing strong relationships with the teams and adopters you serve.

### Create a Public Roadmap

Creating and distributing a public roadmap is a clear and easy way to indicate the priorities for your team, along with the intentions and direction the system is headed.

A roadmap can also serve as a useful tool for advocates to share the system within their spheres of influence. A team may not have full adoption of a system, but if you or an advocate can show that a feature on their roadmap is also on your roadmap it can allow them to work with the systems team to speed up their process and increase their likelihood of using the system in the future.

## Developing beyond a set of components

As a system grows in maturity and the needs of teams evolve you may find that the system needs to shift in priority as well. Once you have a strong baseline of components, patterns, and principles you may feel you’re becoming stagnant or don’t know how else to deliver additional value to the organization.

If the goals of a design system are to improve the overall abilities of product teams, speed up development time, or de-risk new bets, you may find other avenues will be valuable to explore. Can your system provide tooling or processes to help development teams with automated testing and approval of pull requests? Can you set up or develop tooling to test for things like accessibility? Maybe the team develops an API to communicate between Figma and Code to speed up the time it takes to get from a design to a functional prototype or v1 of a product.

## Q&A

### “Does it make sense to create a ‘universal’ system that caters to all teams?”

- Probably not, across different teams is their enough alignment and consistency that makes sense for those teams to share?
- Are you going to change at the same rate based on the same priorities and languages?
  - If one team is going to change based on different rates or priorities, it may not make sense to adopt the same system as another

### Source of truth should be a technology agnostic Specification

- The framework or library is a representation of the spec.
- There can be a “reference” build that perfectly provides an example of what to expect
- If individual teams need a different implementation, they should be able to come to a clear definition within the spec and use that to develop their own implementation
- Design → Spec → Production Pipeline (Dev Docs, Framework Component, Figma Component, etc.)

### “When is it OK to introduce something completely novel to product without adding it to the design system?”

- **\*ALL THE TIME -** Most things are not necessary to be in the system\*
- Great ideas need time to percolate
- Product the pockets of innovation

### “When someone comes to the design system team and wants to make a variant of something, how do you have that conversation while balancing consistency with innovation?”

- **_Shared Need_**
- There’s always a greater level of effort to add something to the system. How does adding this to the system solve a shared need across different product teams.
- What is the level of quality it needs to reach?
- Who is going to work on this feature?
- Does this need to be part of the “core system” or can it live within an alternative shared library?
  - Central system → Central team created, Everyone uses
  - Local system → Local team created, Only used by 1 team
  - Shared system → Community created, Optionally available for others to use
