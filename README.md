# Browserslist Config

A shareable [Browserslist](https://www.npmjs.com/package/browserslist) config.

This config keeps a minimum of 90% global browser coverage.

## Installation

```shell
npm install --save-dev @moonjellydigital/browserslist-config
```

## Usage

Add the following to your `package.json`:

```json
"browserslist": [
  "extends @moonjellydigital/browserslist-config"
]
```

Or add the following to your `.browserslistrc`:

```
extends @moonjellydigital/browserslist-config
```

Or if your build transforms a browserslist config to other targets, you can
import the config directly into your script:

```js
import config from '@moonjellydigital/browserslist-config';
```

## License

[MIT](./LICENSE)
