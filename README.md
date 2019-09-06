# ESLint Simple Rule

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

ESLint rules require some boilerplate that ranges from trivial to complicated depending on what type of rule you're trying to create. This utility helps create ESLint rules with as little boilerplate as possible and is designed for creating the simplest of rules: those that simply flag some syntax as a problem and doesn't try to fix it. The goal is to allow anyone to create custom rules faster and with less code than with using the built-in ESLint rule syntax.

## Usage

### Node.js

Install using [npm][npm] or [yarn][yarn]:

```
npm install @humanwhocodes/eslint-simple-rule --save

# or

yarn add @humanwhocodes/eslint-simple-rule
```

Import into your Node.js project:

```js
// CommonJS
const { rule } = require("@humanwhocodes/eslint-simple-rule");

// ESM
import { rule } from "@humanwhocodes/eslint-simple-rule";
```

### Deno

Import into your Deno project:

```js
import { rule } from "https://unpkg.com/@humanwhocodes/eslint-simple-rule/dist/rule.js";
```

### Browser

It's recommended to import the minified version to save bandwidth:

```js
import { rule } from "https://unpkg.com/@humanwhocodes/eslint-simple-rule/dist/rule.min.js";
```

However, you can also import the unminified version for debugging purposes:

```js
import { rule } from "https://unpkg.com/@humanwhocodes/eslint-simple-rule/dist/rule.js";
```

## API

After importing, you can create a new rule by using the `rule()` function and passing in an object literal where the keys are [esquery selectors](https://eslint.org/docs/developer-guide/selectors) indicating the node to warn on and the values are the messages to display in ESLint when a node matches the selector:

```js
export default rule({

    // warn whenever "null" is used
    "Literal[raw=\"null\"]": "Do not use null.",

    // warn whenever a "var" declaration is used
    "VariableDeclaration[kind=var]": "Use either 'let' or 'const' instead of 'var'."
});
```

Or if you are using CommonJS:

```js
module.exports = rule({

    // warn whenever "null" is used
    "Literal[raw=\"null\"]": "Do not use null.",

    // warn whenever a "var" declaration is used
    "VariableDeclaration[kind=var]": "Use either 'let' or 'const' instead of 'var'."
});
```
