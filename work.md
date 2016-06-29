---
layout: page
title: Things I've Shipped
---

<section id="work">
  <ul>
  {% for post in site.categories.work %}
      {% if post.external-url %}
          <li class="work-item">
            <a href="{{ post.external-url | xml_escape }}" title="{{ post.title | xml_escape }}" class="work-link" target="_blank">{{ post.title | truncate: 40, "..." | xml_escape }}</a>
            <time class="work-time">{{ post.date | date: '%B %d, %Y' }}</time>
          </li>
      {% else %}
          <li class="work-item">
            <a href="{{ post.url | xml_escape }}" title="{{ post.title | xml_escape }}" class="work-link">{{ post.title | truncate: 40, "..." | xml_escape }}</a>
            <time class="work-time">{{ post.date | date: '%B %d, %Y' }}</time>
          </li>
      {% endif %}
  {% endfor %}
  </ul>
</section>