# Setup a NodeJS project
Below is a **simple, modern setup** for starting a **Node.js project with linting and testing**. This uses common tools used in production projects:

* **Node.js + npm**
* **ESLint** → linting
* **Prettier** → formatting
* **Jest** → testing
* **npm scripts** → automation

---

# 1. Prerequisites

Install the following first.

### 1. Install Node.js

Install **LTS version (recommended)** from
Node.js

Check installation:

```bash
node -v
npm -v
```

Recommended Node version:

```
>=18
```

---

### 2. Create a new project

```bash
mkdir my-node-project
cd my-node-project
npm init -y
```

This creates:

```
package.json
```

---

# 2. Project Structure

A simple structure:

```
my-node-project
│
├── src
│   └── index.js
│
├── tests
│   └── sum.test.js
│
├── package.json
├── .eslintrc.json
├── .prettierrc
└── .gitignore
```

---

# 3. Install Development Dependencies

Install linting + testing tools:

```bash
npm install --save-dev eslint prettier jest
```

Optional useful packages:

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-jest
```

---

# 4. Setup ESLint (Linting)

Initialize ESLint:

```bash
npx eslint --init
```

Recommended answers:

```
✔ What do you want to lint? → JavaScript
✔ How would you like to use ESLint? → check syntax and find problems
✔ What type of modules does your project use? → commonjs
✔ framework → none
✔ typescript → no
✔ environment → node
✔ eslint, @eslint/js, globals? Would you like to install them now? → Yes
✔ Which package manager do you want to use? → npm
```

Example `eslint.config.mjs`

```js
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["tests/**/*.test.js"], plugins: { jest }, rules: { ...jest.configs.recommended.rules }, languageOptions: { globals: globals.jest } },
]);
```

> **Note**: Make sure the file contains:
> ```js
> import jest from "eslint-plugin-jest";
> ```
> and
> ```js
> { files: ["tests/**/*.test.js"], plugins: { jest }, extends: ["plugin:jest/recommended"], languageOptions: { globals: globals.jest } },
> ```
---

# 5. Setup Prettier (Code Formatting)

Create `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80
}
```

Ignore build folders:

`.prettierignore`

```
node_modules
dist
coverage
```

---

# 6. Setup Jest (Testing)

Initialize:

```bash
npm init jest@latest
```

Or manually configure.

Add to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

---

# 7. Example Code

### src/sum.js

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

---

### tests/sum.test.js

```javascript
const sum = require('../src/sum');

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Run tests:

```bash
npm test
```

---

# 8. Add Useful npm Scripts

Update `package.json`

```json
"scripts": {
  "start": "node src/index.js",
  "test": "jest",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ."
}
```

Usage:

```
npm run lint
npm run lint:fix
npm run format
npm test
```

---

# 9. Add .gitignore

```
node_modules
coverage
.env
```

---

# 10. Optional but Recommended

### Git hooks (run lint/tests before commit)

Install:

```bash
npm install --save-dev husky lint-staged
```

Used widely in professional projects.

---

# 11. Final Result

Your project now supports:

* ✅ linting with **ESLint**
* ✅ formatting with **Prettier**
* ✅ testing with **Jest**
* ✅ npm automation scripts

---

💡 **Professional tip:**
Most modern Node projects also include:

* **TypeScript**
* **Vitest** (faster alternative to Jest)
* **pnpm** (faster package manager)
