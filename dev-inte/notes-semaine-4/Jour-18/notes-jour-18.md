# Notes Jour 18

## CSS Preprocessors

A CSS Preprocessor is a program that lets you generate a CSS file from the Preprocessor's unique syntax.

In other words, it's a program to import a premade CSS stylesheet.

It's like a CSS with superpowers, it goes beyond what CSS is normally able to do and is then recompiled into a regular CSS file which can be imported to style your own website.

## Why use a CSS Preprocessor ?

Because it streamlines the CSS process, making it easier to read and to structure by introducing functions that aren't in base CSS like:

### Nesting

Group selectors together, making the code easier to read by avoiding repetition

```css
/*Instead of having this*/
.container {
    padding: 10px
}

.container h1 {
    font-size: 2em;
}

.container p { 
    color: white;
}
```

```css
/*We can have*/

.container {
    padding: 10px;

    h1 {
        font-size:2em
    }

    p {
        color: white;
    }
}
```

### Variables

Store values to reuse later on, like a main color for the background of your page, making it easier to keep your color palette consistent.

It looks like this:

```css
$main-color: #ff0547;

.container {
    background-color: $main-color;
}
```

This will apply the color set earlier.

### Mixins

Mixins are blocks of code you can reuse later on, they are very useful for creating styles that are going to be reoccuring inside a document.

It can look like this:

```css
@mixin button-style {
  border-radius: 5px;
  padding: 10px 20px;
  background: linear-gradient(to bottom, #007bff, #006fe6);
  color: #fff;
}

.btn {
  @include button-style;
  font-size: 14px;
}

.btn-big {
  @include button-style;
  font-size: 20px;
}

.btn-small {
  @include button-style;
  font-size: 10px;
}
```

### Modularity

Modular architecture in preprocessed css allows you to organize your stylesheet into smaller modules that can be reused with ease.

It can be used to create small files for different purposes like a header, a footer, your variables etc. and then import them all into your stylesheet as you need them.

## The mechanism behind it

A Preprocessor is a program that converts code written in a higher level of language that a browser cannot understands into a simpler language that can be interpreted.

The main purpose behind doing this is to be able to use functionnalities that aren't available in vanilla CSS.

In the case of CSS, it converts .scss, .less, .styl and many other languages into .css files that can then be used within your webpage.

## Sass

**[Link to the Sass Cheatsheet](../../../../lab/git/cheat-sheets/cheat-sheets/sass-cheatsheet.md)**
