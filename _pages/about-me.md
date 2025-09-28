---
title: "About Me - Filip Andersson"
layout: default
permalink: "/about-me.html"
---
<div class="container">
<div class="row justify-content-center">
    <div class="col-md-8">        
        <div class="row align-items-center mb-5">
            <div class="col-md-9">
                <p class="excerpt">{{ site.authors.admin.bio }}</p>
            </div>
            <div class="col-md-3 text-right">
                <img alt="{{ site.authors.admin.name }}" src="{{site.baseurl}}/{{ site.authors.admin.avatar }}" class="rounded-circle" height="100" width="100">
            </div>
            <div class="icon-block mt-3 d-flex justify-content-between">  
              <div>
                <a target="_blank" href="{{ site.authors.admin.github }}" aria-label="GitHub"><i class="fab fa-github text-muted"></i></a> &nbsp;
                <a target="_blank" href="{{ site.authors.admin.linkedin }}" aria-label="LinkedIn"><i class="fab fa-linkedin-in text-muted"></i></a> &nbsp;
                <a href="{{ site.authors.admin.email }}" aria-label="Email"><i class="fas fa-envelope text-muted"></i></a> &nbsp;
                <a href="{{ site.authors.admin.email-alt }}" aria-label="Alt Email"><i class="fas fa-envelope-open-text text-muted"></i></a> &nbsp;
                <a target="_blank" href="{{ site.authors.admin.orcid }}" aria-label="ORCID"><i class="fab fa-orcid text-muted"></i></a> &nbsp;
              </div>
            </div>
            <details>
              <summary><i class="fas fa-key"></i> Show PGP Public Key</summary>
              <pre>
              -----BEGIN PGP PUBLIC KEY BLOCK-----
              [insert your key here]
              -----END PGP PUBLIC KEY BLOCK-----
              </pre>
            </details>
        </div>
        <h4 class="font-weight-bold spanborder"><span>Posts by {{page.title}}</span></h4>
            {% assign posts = site.posts | where:"author","admin" %}
            {% for post in posts %}
            {% include main-loop-card.html %}
            {% endfor %}
    </div>
</div>
</div>

