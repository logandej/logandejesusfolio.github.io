---
title:
layout: default
permalink: /projects/
published: true
---

<div class="ProjectContainer">

{% assign categories_list = "universitaire,professionnel,personnel" | split: "," %}
{% assign categories_labels = "Projets Universitaires,Projets Professionnels,Projets Personnels" | split: "," %}

{% for i in (0..2) %}
  {% assign cat_key = categories_list[i] %}
  {% assign cat_label = categories_labels[i] %}
  
  <div><h2>{{ cat_label }}</h2></div>

  <div class="gallery">
    
    {% assign projects = site.projects | where: "categorie", cat_key %}
    
    {% if projects.size > 0 %}
      {% for project in projects %}
        <div class="projectTile" {% if cat_key == "universitaire" %}id="universitaire"{% endif %} style="background-image: url('{{ site.baseurl }}{{ project.projectTileBgImg }}')">

          {% assign link = project.redirect | default: project.url | prepend: site.baseurl | prepend: site.url %}

          <a href="{{ link }}" {% if project.redirect %}target="_blank"{% endif %}>
            <span>
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </span>
          </a>
        </div>
      {% endfor %}
    {% else %}
      <p>Aucun projet</p>
    {% endif %}

  </div>

{% endfor %}
</div>

