---
layout: default
title: "Knife Showcase"
permalink: "/knives.html"
---

<div class="container mt-4">
  <h1 class="mb-3">Knife Showcase</h1>
  <p class="lead mb-4">Handcrafted knives, blending traditional techniques with modern craftsmanship.</p>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {% for knife in site.knives %}
      <div class="col">
        <div class="card h-100">
          <a href="{{ knife.url | relative_url }}">
            <img src="{{ knife.image | relative_url }}" class="card-img-top" alt="{{ knife.title }}">
          </a>
          <div class="card-body">
            <h5 class="card-title">
              <a href="{{ knife.url | relative_url }}">{{ knife.title }}</a>
            </h5>
            {% comment %}
              You can add more knife details here if available in your front matter,
              e.g., <p class="card-text">{{ knife.description }}</p>
            {% endcomment %}
          </div>
           {% comment %}
            Optional: Add a card footer if needed, e.g., for a price or a button
           <div class="card-footer">
              <small class="text-muted">Price: {{ knife.price }}</small>
           </div>
           {% endcomment %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
