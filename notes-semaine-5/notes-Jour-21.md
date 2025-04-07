# Notes Jour 21

## SASS  Partials & Import

### Partials

You can make partial SCSS files that contains some short css code that you can use in other files.

You need to name them with a leading underscore for them to be recognized as partial SCSS files and not generate it as a full CSS file.

You can use it with the `@use` rule

### Imports

Same syntax as CSS imports, however, allows to import multiple files at once by separating them with commas, instead of writing `@import` for each.

*Will soon become depracated, usage of `@use rule` preferred.*

