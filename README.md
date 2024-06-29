# Tailwind lite using SCSS

_By Dutchwebworks, May 2024_

* Inpsired by [TailwindCSS](https://tailwindcss.com/)
* Interesting:
	* [Building TailwindCSS with Sass](https://dpnkr.in/blog/building-tailwind)
	* [Tailwind Lite](https://tailwind-lite.com/)


## Custom lite version

The CSS file `./dist/tailwind-lite.min.css` contains a custom build lite version of Tailwind inspired classes.

You could include it in your HTML like:

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/dutchwebworks/tailwind-lite/master/dist/css/tailwind-lite.min.css" />
```

## Install

```sh
npm install
```

## Build for production

```sh
npm run build
```

This will create the following files:

* `./dist/tailwind-lite.css`
* `./dist/tailwind-lite.css.map`
* `./dist/tailwind-lite.min.css`

Use the `tailwind-lite.min.css` on production (gzip / brotli compress it as well).

## Watch for development

```sh
npm run watch
```
