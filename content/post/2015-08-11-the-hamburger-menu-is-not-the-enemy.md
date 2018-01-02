---
categories:
- blog
date: 2015-08-11T21:58:29Z
tags:
- Design
- Development
- Hamburger
- Icon
- Menu
- Navigation
- Design Patterns
title: The Hamburger Menu Is Not The Enemy
url: /2015/08/11/the-hamburger-menu-is-not-the-enemy/
---

Another anti-hamburger menu article is making it's rounds again. This time from [deep.design][1]. A simple google search returns a number of articles about how the design pattern is a "useless tool" and should be avoided at all costs. I'm going to argue that the ideas behind the design pattern are neither useless nor harmful.

The issue most often brought up is that you can't use what you can't see; and that a user is not likely to go searching for an option they're not even sure exists. While I agree with both of these points they're not the fault of the hamburger menu, they're the fault of poor lazy design. Case in point, the priority+ menu pattern works.

The issue tends to stem from people not wanting to do the hard work of IA. Pick the thing your users will actually use and display those, when there’s more screen real estate you display more content. The hamburger menu isn’t a catch all. No menu will ever be a catch all. You have to deliberately decide what to show and what to hide. 

Designers like [Luke Wroblewski][2] do a good job of identifying the issues that come with the *standard* hamburger menu. I'm arguing that hiding everyting inside of a single menu with no context the issue be it a hamburger or anything else. 

Part of a good design is a good underlying architectural pattern. Without a rock solid information architecture you're going to run in to any number of organizational and structural issues. Understanding this and setting up content structure is all part of the overall design. The hamburger menu removes any of the complicated hard work that comes with content strategy and information architecture, so people are drawn to it as the *easy* option.

As the designer part of your job is educating your stakeholders on the most effective way for them to increase value based on their business metrics. Again, I feel like this step is overlooked because it's hard and dirty work that requires research and planning, it doesn't fit the idea that the designer goes away and comes back with the mythical perfect design. 

[The Guardian][3] is the perfect example of this. It's a massive news site with a complex and sprawling taxonomy, but things are easy to find. The Guardian also happens to use the [Priority+][4] navigation pattern. The navigation displays relevant options based on how much screen real estate is available. When you lose real estate you get less options and they're moved to the expandable menu, when you gain real estate you get more options. All of the key actions are readily available and it's clear by the design that anything else is in the menu. The Facebook app is another good example of this. While it utilizes a hamburger menu it also has the most used actions readily available in the bottom bar. 

Responsive Web Design turned the industry on it's head, there are a lot of challenging problems to deal with when your site can't be fixed to a single size and layout. Part of that work is creating a functional navigation; the hamburger menu was the first on the scene and people gravitated to it because it made a small portion of their job easier, while it's not the final solution it was a move towards better design at the time. We're constantly iterating over the rest of our designs, why have we stalled on this single pattern? We need to keep pushing forward and eventually we'll find better solutions and the hamburger menu will be a relic that we barely remeber.

As always, keep building better.

<!-- Links -->

[1]: http://deep.design/the-hamburger-menu/ "Deep.Design Hamburger Menu"
[2]: http://www.lukew.com/ff/entry.asp?1945 "LukeW | Obvious Always Wins"
[3]: http://www.theguardian.com/us "The Guardian"
[4]: http://bradfrost.com/blog/post/revisiting-the-priority-pattern/ "Priority+ Pattern"