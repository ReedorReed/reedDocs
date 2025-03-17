---
title: HTML - Semantics
description: HTML basic semantics
slug: /html-semantics
sidebar_position: 2
sidebar_label: 'HTML - Semantics'
---

## Also known as semantic elements

Are elements with a meaning.

This means, when we use `HTML` elements, we use elements which clearly decribes their meaning and purpose, for both the browser and the developer.

Semantic elements give more context about the content they contain, which makes it easier for search engines, screen readers etc. understand and process the website.

A few examples on **non-semantic** and **semantic elements**:

**Non-semantic** elements: `<div>` & `<span>` tells nothing about their content.

**Semantic** elements: `<img>`, `<table>` & `<article>` clearly defines their content.

### Why use semantic elements?

- **Accessibility**: Semantic elements make web pages more accessible. As stated above screen readers and other assistive tools use semantic elements to navigate and interpret the web pages more effecient.
- **SEO**: When a web page is structured better it leads to better search engine optimization. Because search engines prioritize well-structured content as it is easier to index.
- **Maintainability**: Semantic HTML helps make the web page logically structured, which helps when reading and maintaining the code.

### Here is an example of a semantic web page

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="styles.css" />
		<title>Semantic HTML Page</title>
	</head>
	<body>
		<header>
			<h2 class="logo-text">HTML Semantics</h2>
			<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="contact.html">Contact</a></li>
					<li><a href="about.html">About</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<h1>Welcome</h1>
			<figure id="img-sandbox">
				<img src="img/sandbox.jpeg" alt="Image of a sandbox" />
			</figure>
			<h2>Lorem ipsum.</h2>
			<p class="border-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut
				velit qui voluptatibus, eius possimus.
			</p>
		</main>
		<footer style="display: flex; justify-content: space-evenly">
			<section>
				<h3>Address</h3>
				<address>
					<p>Donald Duck</p>
					<p>disney road</p>
					<p>Duckville</p>
				</address>
			</section>
			<section>
				<h3>SoMe</h3>
				<p><a href="#">Instagram</a></p>
				<p><a href="#">Facebook</a></p>
				<p><a href="#">LinkedIn</a></p>
			</section>
		</footer>
	</body>
</html>
```

As we can see in the above example; the `body` is divided into different sections. The `header` is commonly used for navigation. After that the `main` section is used for the main content and can have both `<section>` & `<article>` tags nested. Lastly there's the `footer` which is commonly used for addresses, SoMe, etc.

The reason the `<h1>` isn't in the header as the logo. Is because it's best practice to only have one `<h1>` tag per page, as it acts like the pages title.
