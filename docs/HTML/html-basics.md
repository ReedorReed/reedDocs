---
title: HTML - Basics
description: HTML basics and structure
slug: /html-basics
sidebar_position: 1
sidebar_label: 'HTML - Basics'
---

## What is HTML?

**HTML** which is short for **Hyper Text Mark-up Language**, is the standard language for creating web pages. You could call it the skeleton of a web page, as it defines the structure of a web page. It does this by using elements and tags. Tags are the element name surrounded by `<` & `>`.

An example could be: `<h1>Hello World</h1>`, here we have created a headline that says _**Hello World**_. It is best practice to write all tags in lower-case.

Further more we can use elements in different ways. One way is as `blok` elements, which means the elements at stacked on top of each other. The other way is `inline` elements, which as its name suggests is inline i.e. directly in the tag.

## Basic HTML Structure

All web pages share the same basic HTML structure

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>

```

As we can see in the above example of `HTML` the code is nested like so many other programming languages.

### _Key points_

- `<!DOCTYPE html>`: Declares the document as an HTML5 document.
- `<html>`: Is the root element of the page.
- `<head>`: Contains the meta data of the page and it is also here we link our CSS & JS files.
- `<body>`: Contains all the content of the web page, like; images, text, links etc.

## Common HTML elements

### Headings: `<h1> - <h6>`

Used for headlines and subtitles as we saw in the example above.

```html
<h1>Main title</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>
```

### Paragraphs and Line Breaks: `<p> & <br>`

```html
<p>This is a paragraph.</p>
<p>This is a paragraph with a <br> line break.</p>
```

### Links: `<a>`

Used for navigation

```html
<a href="https://christianreed.dk" target="_blank">Visit my site</a>
```

We use _attributes_ in the `<a>`tag. Attributes usually come in name/value pairs like: _name="value"_ and the value is always inside qutation marks " ".

- `href`: Specifies the url.
- `target="_blank"`: Opens the url in a new tab.

### Images: `<img>`

Used to display pictures on a web page

```html
<img src="image.jpg" alt="Description of image">
```

- `src`: Is the file path or url to the image.
- `alt`: A descriptive text of the image for accessibility (I will dive deeper into accessibility later as this is important).
- You can also add more attributes, so you can for example, define the `width="100px"` and `height="100px"` of the picture. But this is best practice to do in a seperate CSS file.

### Lists: `<ul>, <ol> & <li>`

Used to create lists, which also can be used to create navigation bars.

```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>

<ol>
    <li>First list item</li>
    <li>Second list item</li>
</ol>
```

- `<ul>`: _Unordered list_ (bullet points).
- `<ol>`: _Ordered list_ (numbered).
- `<li>`: _List item_.

### Forms and Inputs: `<form> & <input>`

``` html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <input type="submit" value="Submit">
</form>
```

- `action`: Specifies where to send form data.
- `method`: Can be `GET` or `POST`.
- `input type="text"`: Creates a text field.
- `input type="submit"`: Creates a submit button.
- The `<input>` tag can be used to make a lot of different input actions like, checkboxes, radio buttons etc.

### HTML Tables: `<table>`

Used to display data in rows and columns

``` html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Christian</td>
        <td>37</td>
    </tr>
</table>
```

- `<th>`: Table header.
- `<td>`: Table data cell.
- `<tr>`: Table row.

### HTML Semantic Elements

Semantic elements improve accessibility and SEO. And will have a dedicated page as there is a lot to cover. However here is a rough overview.

```html
<header>Website Header</header>
<nav>Navigation Menu</nav>
<main>Main Content</main>
<article>Blog Post</article>
<footer>Footer Section</footer>
```

- `<header>`: Top section of a webpage.
- `<nav>`: Contains links for navigation. Which as I wrote earlier could be build with lists.
- `<main>`: Main content of the page.
- `<article>`: Standalone piece of content.
- `<footer>`: Bottom section, usually contains copyright info.

### Best Practices and some common pitfalls

✅ Use semantic tags to improve readability.

✅ Add alt attributes to images for accessibility.

✅ Keep structure clean with proper indentation.

✅ Use relative paths for local resources (ex. images/photo.jpg).

❌ Avoid using deprecated tags like `<center>` and `<font>`.

❌ Avoid using UPPER-case in HTML tags.

**To learn more `HTML` please visit sites like:** [W3 Schools](https://www.w3schools.com/html/)
