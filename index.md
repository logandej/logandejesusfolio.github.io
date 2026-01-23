---
layout: about
permalink: /
profile:
  align: right
  image: profile.jpg
published: true
---


<div class="bandeau">
  <img class="bandeau__avatar" src="{{ page.profile.image | prepend: '/assets/images/' | relative_url }}">
  <div class="section-item">
    <h1 class="bandeau-name">{{ site.name | default: "Logan De Jesus" }}</h1>
    <div class="bandeau-desc">{{ site.description | default: "pb" }}</div>

    <p class="bandeau-intro">
      Je m'appelle {{ site.name | default: "Logan" }}. Après avoir passé <strong>2 ans d'IUT à Montpellier</strong> et <strong>3 ans de formation au CNAM en ingénieur informatique et multimédia à Toulon</strong>, je suis maintenant diplômé et je suis devenu professionnel dans la création de jeux vidéo, notamment en réalité virtuelle.
    </p>

    <ul class="bandeau-icons" aria-label="Icônes de profil">
      {% assign icons = site.static_files | where_exp: "f", "f.path contains 'assets/images/profileicons/'" | sort: "name" %}
      {% for icon in icons %}
        <li>
            <img src="{{ icon.path | relative_url }}" alt="{{ icon.name }}" loading="lazy" />
        </li>
      {% endfor %}

    </ul>
  </div>


</div>

<section class="section-item">
	<h2>Mon Histoire</h2>
		<div>
			<ul>
			<li>2025 — Diplômé, CDD 6 Mois au CNAM en tant qu'ingénieur développeur et Chef de projet XR</li>
			<li>2022–2025 — Formation d'ingénieur au CNAM en alternance (informatique & multimédia)</li>
			<li>2020–2022 — Études à l'IUT de Montpellier (informatique)</li>
		</ul>
		<p>J'aime concevoir des expériences immersives, prototyper rapidement et travailler en équipe pour mener un projet de l'idée au produit fini.</p>
		</div>
</section>

<section class="section-item">
	<h2>Compétences Techniques</h2>
		<div>
			<ul>
			<li>Langages : C#, Python, Java, C, HTML/CSS, JavaScript</li>
			<li>Moteurs : Unity (C#), Unreal Engine (Blueprints)</li>
			<li>Outils : Git, Blender, Visual Studio, JIRA</li>
			<li>Spécialisations : Réalité Virtuelle (VR), Graphismes Temps Réel, Prototypage Rapide, Design de Jeux</li>
		</ul>
		</div>
</section>


<section class="section-item">
	<h2>Infos Rapides</h2>
		<div>
			<ul>
			<li>Localisation : Montpellier, Toulon, où je veux !</li>
			<li>Domaines : Jeux vidéo, Réalité virtuelle</li>
			<li>Statut : Disponible pour collaborations et missions</li>
		</ul>
		</div>
</section>

<section class="section-item">
<h2> Projets & Contact </h2>
<p>Parcourez la section <a href="{{site.baseurl}}/Projects"> Projets </a> pour voir mes réalisations, et le <a href="{{site.baseurl}}/blogs">Blog</a> pour mes notes techniques et post-mortems. Si vous souhaitez me contacter ou collaborer, utilisez les liens en bas de page.</p>
</section>

