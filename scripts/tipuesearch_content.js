---
---

    var tipuesearch = {"pages": [
      {% for post in site.posts %}{"title": "{{ post.title }}", "text": "{{ post.content | strip_html | strip_newlines }}{{ post.instructions | strip_html | strip_newlines }}{{ post.footer | strip_html | strip_newlines }}", "tags": "{% for tagings in post.tags %}{{ tagings }}, {% endfor %}", "url": "{{ post.url | prepend: site.baseurl }}"},
      {% endfor %}
]};




