# Storytime Block

With Larva experiments. There are two build steps – larva scripts for front-end assets, and wp scripts for block JS.

To develop, run all commands from `assets`:

Start with `npm install`.

To develop front-end UI:

1. Run `npm run larva` to open the Larva server.
2. In a new command window, run `npm run dev` to start the watch task for JS and SCSS compilation.

To develop blocks:

1. Run `npm run start`

## Asset Building

* `npm run prod` – Build minified CSS and JS for production.
* `npm run prod:scss` - Compile only CSS.
* `npm run prod:js` - Compile only JS.
* `npm run dev` - start a watcher for JS and one for SCSS files.
* `npm run dev:scss` - Start the watcher for SCSS.
* `npm run dev:js` - Start the watcher for JS.
* `npm run build-icons` – Build an icon sprite from SVGs inside assets/src/svg/icons to assets/build/defs/svg/svg-sprite.defs.svg

## Larva Commands

* `npm run larva` - Start the Larva pattern server. Navigate in the browser to http://localhost:3000.
* `npm run parser` - Parse recently changed pattern Twig files to PHP.
* `npm run write-json` - write pattern objects to JSON files.

## Linting

* `npm run lint` - Lint SCSS and JS in src/
* `npm run lint:scss` - Lint SCSS.
* `npm run lint:js` - Lint JS in src/.
* `npm run lint-fix:scss` - Lint and fix auto-fixable errors in SCSS.
* `npm run lint-fix:js` - Lint and fix auto-fixable errors in JS.

## Read the docs

Read about developing UI [on the Larva Wiki](https://github.com/penske-media-corp/pmc-larva/wiki).

