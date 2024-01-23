# ✨ reqprettier

Prettier with fully customised configuration for use in any project. Don't hesitate and get your project up and running quickly with Prettier ready.

## How to use

You need to install the `reqprettier` package and make it clear that you need to use this config.

### Dependency installation

```bash
npm install reqprettier -D # or another package manager
```

### Enabling the configuration

There are 2 options offered here:

#### 1) Via `package.json`.

In the `package.json` file, add:

```jsonc
{
  // ...
  "prettier": "reqprettier"
  // ...
}
```

#### 2) By importing the config from the package

The default import of the `reqprettier` package returns a config. It can be simply installed or extended.

```js
import reqprettierConfig from 'reqprettier'
```

```js
export default reqprettierConfig
```

or

```js
export default {
  ...reqprettierConfig,
  singleQuote: false,
}
```
