# Notes Jour 21

## SASS  Partials & Import

### Partials

You can make partial SCSS files that contains some short css code that you can use in other files.

You need to name them with a leading underscore for them to be recognized as partial SCSS files and not generate it as a full CSS file.

You can use it with the `@use` rule

### Imports

Same syntax as CSS imports, however, allows to import multiple files at once by separating them with commas, instead of writing `@import` for each.

*Will soon become depracated, usage of `@use` preferred.*

> `@use` has to be used before any other rule on your .scss file, aside from maybe `@forward`

## SASS extend

`@extend` is used to tell SASS that one selector should inherit the styles of another.

It styles all elements that match the extender, as though they also match the calls being extended.

It differs from mixins because it only updates rules that contain the extended selector so that it contains the extending selector as well.

Extends are to be used when you're trying to express a relationship between semantic classes or selectors.

## 7-1 architecture

The 7-1 architecture in SASS refers to 7 folders for a single main file. This is one of the many ways to organize them.

![7-1 sass](https://media.licdn.com/dms/image/v2/D4D12AQGBeGtHTg1IDw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1733240833652?e=1749686400&v=beta&t=omlJ9izoVvKXWM0BTJ37vCuK7a-N5sNvlMAQ7XpCYyM)

### Why use 7-1 architecture

- Easier to manage and organize thanks to clear organization
- Easier to scale up
- Easily reusable depending on the projects
- Makes collaboration simpler thanks to its consistent structure.

## CSS colors

### Notations

- RGBa: Red (0-255), Green (0-255), Blue (0-255), alpha (0-1). Written: `rgba(x,x,x,x)`
- HSLa: Hue (0-360), Saturation (0%-100%), Lightness (0% - 100%), alpha (0-1). Written: `hsla(x,x%,x%,x)`
- Hexadecimal code: Range of values: 00-FF Written: `#RRGGBB`
- Pre-defined colors: 140 different color names
