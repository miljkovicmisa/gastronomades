---
layout: default
title:  Συνταγές Ζαχαροπλαστικής
subtitle: "Σημειώσεις Μαθήματος"
author: "Milos Miljkovic"
supervisor: "Παράσχος Λεωνίδου"
institute: "ΙΕΚ ΗΡΑΚΛΕΙΟΥ"
department: "Τμήμα Τεχνικών Μαγειρικής Τέχνης"
school-year: "2013-2014"
date:   2016-04-15 19:28:07 +0200
tags: ζαχαροπλαστική συνταγές βασικές
permalink: /pastry/recipes/
---

# Ζαχαροπλαστική
{:.no_toc}

## {{ page.subtitle }}
{:.no_toc}

### {{ page.author }}

### Καθηγητής: {{ page.supervisor }}

### {{ page.institute }} <br/>{{ page.department }} <br/>{{ page.school-year }}

<nav markdown="1">

### Περιεχόμενα
{:.no_toc}

* Αυτό θα αντικατασταθεί με τα περιεχόμενα
{:toc}

</nav>

{% for recipe in site.pastry_recipes %}

<article markdown="1" class="h-recipe">

## {{ recipe.title }}
{:.p-name}

{% if recipe.subtitle %}

### {{ recipe.subtitle }}

{% endif %}

#### ΥΛΙΚΑ

{% for ingredientcategory in recipe.ingredients %}

{% if ingredientcategory.title %}

##### {{ ingredientcategory.title }}

{% endif %}

{% for eachingredient in ingredientcategory.theingredients %}

* {:.p-ingredient} {{ eachingredient.ingredient }}

{% endfor %}

{% endfor %}

#### ΕΚΤΕΛΕΣΗ

{% for preparationcategory in recipe.preparation %}

{% if preparationcategory.title %}

##### {{ preparationcategory.title }}

{% endif %}

{{ preparationcategory.method }}
{:.e-instructions}

{% endfor %}

{% for everyfootnote in recipe.footnotes %}

{% if everyfootnote.footnote %}

{{ everyfootnote.footnote }}

{% endif %}

{% endfor %}

</article>

{% endfor %}

