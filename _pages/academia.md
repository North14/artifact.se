---
layout: page
title: "Academic Contributions"
permalink: "/academia.html"
---


<div class="container my-5">
  <h1 class="mb-4"><i class="fas fa-graduation-cap"></i> Academic Contributions</h1>
  <p class="text-muted mb-5">A selection of my academic work published through the University of Skövde and available via DiVA.</p>

  <div class="row">
    {% assign pubs = site.data.Library | sort: "issued.date-parts[0][0]" | reverse %}
    {% for pub in pubs %}
    <div class="col-md-6 mb-4">
      <div class="card shadow-sm h-100" data-publication-title="{{ pub.title }}" data-publication-author="{{ pub.author[0].family }}">
        <div class="card-body">
          <h5 class="card-title">
            <i class="fas fa-book-open text-light"></i> {{ pub.title }}
          </h5>
          <ul class="list-unstyled text-muted small mb-3">
            <li><i class="fas fa-user"></i> {{ pub.author[0].given }} {{ pub.author[0].family }}</li>
            <li><i class="fas fa-university"></i> {{ pub.publisher }}</li>
            <li><i class="fas fa-file-alt"></i> {{ pub.genre }} | {{ pub["number-of-pages"] }} pages</li>
            <li><i class="far fa-calendar-alt"></i> {{ pub.issued["date-parts"][0][0] }}</li>
            <li class="citation-count text-muted"><i class="fas fa-spinner fa-spin"></i> Loading citations...</li>
          </ul>
          <a href="{{ pub.URL }}" class="btn btn-sm btn-outline-primary" target="_blank">
            <i class="fas fa-external-link-alt"></i> View on DiVA
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script src="{{ site.baseurl }}/assets/js/citations.js"></script>
