# Tailwind lite using SCSS

_By Dutchwebworks, May 2024_

* Inpsired by [TailwindCSS](https://tailwindcss.com/)
* Interesting:
	* [Building TailwindCSS with Sass](https://dpnkr.in/blog/building-tailwind)
	* [Tailwind Lite](https://tailwind-lite.com/)


## Custom lite version

The CSS file `./dist/tailwind-lite.css` contains a custom build lite version of Tailwind inspired classes.

You could include it in your HTML like:

```html
<link
	rel="stylesheet"
	href="https://raw.githubusercontent.com/dutchwebworks/tailwind-lite/master/dist/css/tailwind-lite.css"
/>
```

## Install

```sh
npm install
```

## Build for production

```sh
npm run build
```

As of this writing there is no `tailwind-lite.min.css` yet.

## Watch for development

```sh
npm run watch
```
