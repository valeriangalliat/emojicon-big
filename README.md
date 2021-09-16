# emojicon-big

> Like [Emojicon] but bigger. 🚀

[Emojicon]: https://github.com/JosephusPaye/emojicon

## Overview

Tiny library to use in the browser to dynamically generate a favicon
from any emoji.

The advantage of doing it in the browser is that we can keep the emoji
font consistent with the rest of the user's UI, while we need to pick a
specific vendor rendering when generating an icon from the backend.

It differs from [Emojicon] in the way we render the emoji in a larger
canvas and them trim it to the edge pixels, resulting in the emoji being
as big as possible in the favicon.

## Installation

```sh
npm install emojicon-big
```

You can directly load the scripts in this repository:

```html
<script src="node_modules/emojicon-big/index.js"></script>
```

Or with any CommonJS-compatible bundler:

```js
const emojicon = require('emojicon-big')
```

## Usage

```js
emojicon('🍺')
```

This will find the first `<link rel="icon">` and set its `href` to the
emoji rendered with the user's font, staying consistent with the rest of
your content.

You can pass an element of your choice as second argument:

```js
emojicon('🍺', document.getElementById('emojicon'))
```

**Recommended:** add an empty favicon to prevent the browser from
automatically requesting `/favicon.ico` (or put a default favicon image
on your server if you prefer).

```html
<link rel="icon" href="data:,">
```

Lastly, if you want to just get the data URL:

```js
emojicon.render('🍺')
```

## Auto mode

You can also use the auto mode with the following markup:

```html
<link rel="icon" href="data:," data-emoji="🍺">
```

Enable it like this in vanilla HTML:

```html
<script src="node_modules/emojicon-big/index.js"></script>
<script src="node_modules/emojicon-big/auto.js"></script>
```

Or with a bundler:

```js
const emojicon = require('emojicon-big/auto')
```
