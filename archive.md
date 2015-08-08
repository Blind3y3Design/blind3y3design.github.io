---
layout: page
title: Archive
---

<section id="archive">
  <h3>{{ site.time | date: '%Y' }}</h3>
  {% for post in site.posts %}
    {% unless post.next %}
      <ul>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        </ul>
        <h3>{{ post.date | date: '%Y' }}</h3>
        <ul>
      {% endif %}
    {% endunless %}
      {% if post.external-url %}
          <li class="archive-item">
            <a href="{{ post.external-url | xml_escape }}" title="{{ post.title | xml_escape }}" class="archive-link">{{ post.title | truncate: 40, "..." | xml_escape }}</a>
            <time class="archive-time">{{ post.date | date: '%B %d, %Y' }}</time>
          </li>
      {% else %}
          <li class="archive-item">
            <a href="{{ post.url | xml_escape }}" title="{{ post.title | xml_escape }}" class="archive-link">{{ post.title | truncate: 40, "..." | xml_escape }}</a>
            <time class="archive-time">{{ post.date | date: '%B %d, %Y' }}</time>
          </li>
      {% endif %}
  {% endfor %}
  </ul>
</section>