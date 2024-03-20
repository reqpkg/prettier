# ✨ reqprettier

[Prettier](https://prettier.io) with fully customised configuration for use in any project. Don't hesitate and get your project up and running quickly with Prettier ready.

- [✨ reqprettier](#-reqprettier)
  - [How to use](#how-to-use)
    - [Dependency installation](#dependency-installation)
    - [Enabling the configuration](#enabling-the-configuration)
      - [1) Via `package.json`.](#1-via-packagejson)
      - [2) Or you can customise the configuration](#2-or-you-can-customise-the-configuration)
  - [Examples](#examples)
    - [Javascript](#javascript)

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
  "prettier": "reqprettier",
  // ...
}
```

#### 2) Or you can customise the configuration

The default import of the `reqprettier` package returns a config. It can be simply installed or extended.

```js
import reqprettierConfig from 'reqprettier'

export default {
  ...reqprettierConfig,
  singleQuote: false,
}
```

## Examples

### Javascript

<table width="100%">
  <thead>
    <th width="30%">Before</th>
    <th width="50%">After</th>
  </thead>
  <tbody>
    <td>
      <img src="https://raw.githubusercontent.com/reqpkg/reqprettier/main/images/javascript-before.png" />
    </td>
    <td>
      <img src="https://raw.githubusercontent.com/reqpkg/reqprettier/main/images/javascript-after.png" />
    </td>
  </tbody>
</table>
