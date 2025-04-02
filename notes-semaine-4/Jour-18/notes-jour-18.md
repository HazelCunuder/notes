# Notes Jour 18

## CSS Preprocessors

A CSS Preprocessor is a program that lets you generate a CSS file from the Preprocessor's unique syntax.

In other words, it's a program to import a premade CSS stylesheet.

It's like a CSS with superpowers, it goes beyond what CSS is normally able to do and is then recompiled into a regular CSS file which can be imported to style your own website.

## Why use a CSS Preprocessor ?

Because it streamlines the CSS process, making it easier to read and to structure by introducing functions that aren't in base CSS like:

* Nesting: Group selectors together, making the code easier to read by avoiding repetition

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
