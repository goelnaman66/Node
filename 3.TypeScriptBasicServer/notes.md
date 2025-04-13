# Dev Dependencies in Node.js

In a Node.js project, **dev dependencies** are packages that are **only needed during development** and **not required in production**.

## Common Use Cases

Dev dependencies are typically used for:

- **Testing**: e.g. `jest`, `mocha`
- **Linting**: e.g. `eslint`, `prettier`
- **Transpiling**: e.g. `babel`, `typescript`
- **Bundling**: e.g. `webpack`, `vite`, `rollup`
- **Code formatting or documentation**

## Installing Dev Dependencies

To install a package as a dev dependency, use:

```bash
npm install --save-dev <package-name>

npm i -D <package-name>



Running the command:

```
npx tsc --init
```

will generate a tsconfig.json file in your project directory. This file is used to configure the TypeScript compiler (tsc).

What It Does
Initializes a TypeScript project by creating a tsconfig.json.

This file includes various compiler options (many commented out by default) that you can tweak to fit your project needs.