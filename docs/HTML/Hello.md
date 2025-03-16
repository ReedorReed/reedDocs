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

### _Key points_:

- `<!DOCTYPE html>`: Declares the document as an HTML5 document.
- `<html>`: Is the root element of the page.
- `<head>`: Contains the meta data of the page and it is also here we link our CSS & JS files.
- `<body>`: Contains all the content of the web page, like; images, text, links etc.


## Common HTML elements

### Headings `<h1> - <h6>`

Used for headlines and subtitles as we saw in the example above.

```html
<h1>Main title</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>
```

### Paragraphs and Line Breaks `<p> & <br>`

```html
<p>This is a paragraph.</p>
<p>This is a paragraph with a <br> line break.</p>
```

### Links `<a>`

Used for navigation

```html
<a href="https://christianreed.dk" target="_blank">Visit my site</a>
```

- `href`: Specifies the url.
- `target="_blank"`: Opens the url in a new tab.

### Images `<img>`

Used to display pictures on a web page

```html
<img src="image.jpg" alt="Description of image">
```

- `src`: Is the file path or url to the image.
- `alt`: A descriptive text of the image for accessibility (I will dive deeper into accessibility later as this is important).
- You can also add more attributes, so you can for example, define the `width="100px"` and `height="100px"` of the picture. But this is best practice to do in a seperate CSS file.
