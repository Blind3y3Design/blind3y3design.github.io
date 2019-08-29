---
author: Blind3y3Design
categories:
- work
date: 2014-01-11T20:23:00Z
excerpt: The work Vine Lights was an experimental piece in a series of works called
  "Inorganic Life." The works themselves try to take things that are clearly inorganic
  in nature however when constructed in such a way they become in a sense a representation
  of life.
fullImage: /images/personal/Lights_Bottom_View.jpg
hidden: true
tags:
- blind3y3design
thumbnail: /images/personal/Lights_Bottom_View.jpg
title: 'Vine Lights: Inorganic Life Series'
url: /2014/01/11/Vine-Lights/
---

The work Vine Lights was an experimental piece in a series of works called "Inorganic Life." The works themselves try to take things that are clearly inorganic in nature however when constructed in such a way they become in a sense a representation of life.

<!--more-->

The original idea behind the work was the concept of touch. Not so much the sensation of touching something but the deeper meanings and concepts of the word. How do we touch? How to living organisms interact with themselves and their environment? How does the inanimate dictate the shape or the path of a living organism? The piece was designed to explore these ideas.

Vine Lights is a simple light and wire sculpture that could simply just be plugged into a space and turned on as a series of beautiful lights. The piece would still be pleasant to look at but as far as my concept was concerned it would not complete the idea of touch; nor would it fulfill the duty to be a representation of a life form.

The piece has a series of sonar sensors built into it so that it can interact with those observing it. When left alone the piece will slowly fade in and out in such a way as to be breathing, or representing a pulse. When the viewers move in closer to investigate, the piece will react to their presence by dimming most of the lights and leaving a single string of lights fading as a warning that it recognizes your presence If the viewers continue to investigate the piece closer because of intrigue or simply to test the "creature" the piece will flash violently at them; mimicking the defense mechanisms of actual animals such as the porcupine or blow fish.

Below is part of the code used to create the piece. 

{{< highlight "c++" >}}
#define NR_OF_LIGHTS 6
  int pins[NR_OF_LIGHTS] = { 3, 5, 6, 9, 10, 11 };
  int values[NR_OF_LIGHTS];
  int steps[NR_OF_LIGHTS];

#define NR_OF_FADESTEPS 4
  int fadesteps[NR_OF_FADESTEPS] = { 192, 128, 64, 0 };
  int fade_delay = 30; // millisec
  int fade_cycles = 1000;

  int nr_of_blinks = 2;
  int blink_delay = 400; //millisec

  int effect = 1;

  int randomlights[NR_OF_LIGHTS];
  bool chosenlights[NR_OF_LIGHTS];

/****/
void setup() {
  randomSeed(analogRead(0));
  for (int i = 0; i < NR_OF_LIGHTS; i++) {
    values[i] = (int)random(230) + 13; // start values between ‘max min’ and ‘min max’
    steps[i] = (int)random(4) + 1; // steps between 1 and 4
  }
}

/****/
void loop() {
  for (int j = 0; j < fade_cycles; j++) {
    for (int i = 0; i < NR_OF_LIGHTS; i++) {
      fadingLight(i);
    }
    delay(fade_delay);
  }
  if (effect == 1) {
    blinkAll();
    effect = 2;
  }
  else if (effect == 2) {
    runningLight(0);
    effect = 3;
  }
  else if (effect == 3) {
    runningLight(255);
    effect = 1;
  }
}

/****/
void fadingLight(int i) {
  int minvalue = (NR_OF_FADESTEPS * abs(steps[i])) + 1;
  int maxvalue = 255 – minvalue;
  int fs = NR_OF_FADESTEPS;
  for (int j = 0; fs > 0; fs–, j++) {
    if (values[i] > fadesteps[j]) {
      break;
    }
  }
  values[i] += fs * steps[i];
  if (values[i] > maxvalue  ||  values[i] < minvalue) {
    steps[i] *= -1;
  }
  analogWrite(pins[i], values[i]);
}

/****/
void setAllLights(int value) {
  for (int i = 0; i < NR_OF_LIGHTS; i++) {
    analogWrite(pins[i], value);
  }
}

/****/
void blinkAll() {
  for (int i = 0; i < nr_of_blinks; i++) {
    setAllLights(255);
    delay(blink_delay);
    setAllLights(0);
    delay(blink_delay);
  }
}

/****/
void runningLight(int startvalue) {
  setAllLights(startvalue);
  for (int j = 0; j < 2; j++) {
    randomize();
    for (int i = 0; i < NR_OF_LIGHTS; i++) {
      analogWrite(pins[randomlights[i]], 255 – startvalue);
      delay(200);
      analogWrite(pins[randomlights[i]], startvalue);
    }
  }
}

/****/
void randomize() {
  for (int i = 0; i < NR_OF_LIGHTS; i++) {
    chosenlights[i] = false;
  }
  //first one always ok
    int r = (int)random(NR_OF_LIGHTS);
    randomlights[0] = r;
    chosenlights[r] = true;
  //next 4
    for (int i = 1; i < 5; i++) {
    while (true) {
      r = (int)random(NR_OF_LIGHTS);
      if (chosenlights[r] == false) {
        break;
      }
    }
    randomlights[i] = r;
    chosenlights[r] = true;
  }
  //last one
  for (int i = 0; i < NR_OF_LIGHTS; i++) {
    if (chosenlights[i] == false) {
      randomlights[5] = i;
      break;
    }
  }
}
{{< / highlight >}}

The MIT License (MIT)

Copyright &copy; 2014 Adam Sedwick, Blind3y3Design.