---
pubDate: 2023-09-23T12:00:00-04:00
title: "Rendezvous with Cassidoo Newsletter 9/18 Interview Question"
description: ""
tags:
  - public-learning
  - cassidoo
  - development
  - code
---

Here's my answer to the [Sept. 18th Rendezvous with Cassidoo](https://buttondown.email/cassidoo/archive/let-us-remember-that-our-voice-is-a-precious-gift/) newsletter interview question. It was a fun little coding challenge.

It's a little more verbose than needed, but I liked the idea of calling out and explicitly naming the variables so that other people could follow the logic. I also adding small bit of error handing to ensure that you did in fact pass the function a number.

```js
function buildStaircase(n) {
  const numberOfStones = n;
  let numberOfSteps = 0,
    stonesPerStep,
    remainingStones = numberOfStones;

  if (isNaN(numberOfStones)) {
    return "Error: must provide a number.";
  }

  for (stonesPerStep = 1; stonesPerStep <= remainingStones; stonesPerStep++) {
    remainingStones -= stonesPerStep;
    numberOfSteps++;
  }

  return numberOfSteps;
}

buildStaircase("not a number");
// Returns Error: must provide a number.

buildStaircase(6);
// Returns 3

buildStaircase(10);
// Returns 4
```
