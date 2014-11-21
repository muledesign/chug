# Chug

Chug is a simple [Grunt](http://gruntjs.com/)-based development tool that will
build a nice static HTML site for you, based on your many templates and assets.
Chug is a little bit opinionated, and assumes that you are an intelligent and
attractive person that loves Mustache and Sass.

## Getting Started
Put Chug's gruntfile in a directory and run `grunt new` to get your directory
structure. Run `grunt watch` and start writing code. That's it!

Your Sass will compile to CSS, and Mustache templates in `templates/pages` will
compile to flat HTML in the project root directory.

## Components:
* [Mustatic](https://github.com/dbushell/dbushell-grunt-mustatic)
* [Sass](http://sass-lang.com/)

## Todos:
* Automatic image compression.
* Commission a logo featuring an image of [Rupert](https://www.flickr.com/photos/mulegirl/10352944543/in/photostream/).
* When [libsass](https://github.com/sass/libsass) 3.4 comes out, make the switch.
* Some kind of script that makes it easy to install chug in a
directory. Something like `chug install` and the gruntfile magically appears
and runs `npm install`. Might also be cool to have `chug` act as an alias for
Chug's grunt tasks, so you can run `chug watch`.
* Coffeescript support for people who want it.