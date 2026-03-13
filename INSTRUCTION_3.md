Here is a **practical step-by-step guide to implementing CI/CD with GitHub using GitHub Actions**.
Since you mentioned working with **Node.js projects** earlier, I’ll include a **Node.js CI pipeline example** (lint + test + optional deployment).

---

# 1. Understand the CI/CD Concepts

Before implementing, know the workflow:

**CI – Continuous Integration**

* Every push or pull request automatically:

  * installs dependencies
  * runs lint
  * runs tests
  * verifies build

**CD – Continuous Deployment / Delivery**

* If CI passes:

  * deploy application automatically
  * or allow manual release

Typical pipeline:

```
Developer Push Code
        ↓
GitHub Actions Trigger
        ↓
Install Dependencies
        ↓
Run Lint
        ↓
Run Tests
        ↓
Build
        ↓
Deploy (optional)
```

---

# 2. Prerequisites

You need:

* GitHub repository
* Node.js project
* `package.json`
* scripts for lint/test

Example `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest",
    "build": "npm run lint && npm run test"
  }
}
```

---

# 3. Create GitHub Actions Folder

In your repository root:

```
mkdir -p .github/workflows
```

Structure:

```
project
 ├── src
 ├── package.json
 └── .github
     └── workflows
         └── ci.yml
```

---

# 4. Create a CI Workflow File

Create:

```
.github/workflows/ci.yml
```

Example:

```yaml
name: Node CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test
```

---

# 5. Commit the Workflow

Commit like a normal change:

```bash
git add .github/workflows/ci.yml
git commit -m "add github actions CI"
git push origin main
```

---

# 6. Verify CI Pipeline

1. Go to your GitHub repository
2. Click **Actions**
3. You will see your workflow running

Example pipeline view:

```
Actions
 └ Node CI
     └ build
         ✓ Checkout
         ✓ Setup Node
         ✓ Install dependencies
         ✓ Run lint
         ✓ Run tests
```

If tests fail → PR will fail.

---

# 7. Enable CI for Pull Requests

Already included in:

```yaml
on:
  pull_request:
```

Now every PR will automatically:

```
Create PR
   ↓
GitHub Actions run
   ↓
Tests pass → merge allowed
Tests fail → fix required
```

This protects your main branch.

---

# 8. Add Build Artifact (Optional)

Example: upload build output.

```yaml
- name: Build
  run: npm run build

- name: Upload artifact
  uses: actions/upload-artifact@v4
  with:
    name: build
    path: dist
```

---

# 9. Add Deployment (CD Example)

Example: deploy after merge to main.

```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'

  steps:
    - uses: actions/checkout@v4

    - name: Deploy
      run: echo "Deploy your application here"
```

Real deployments usually go to:

* Docker registry
* VPS server
* Kubernetes
* Cloud platforms

---

# 10. Use Secrets for Secure Deployment

Add secrets:

```
Repository
 → Settings
 → Secrets
 → Actions
 → New repository secret
```

Example:

```
DEPLOY_KEY
AWS_ACCESS_KEY
```

Use in workflow:

```yaml
env:
  API_KEY: ${{ secrets.DEPLOY_KEY }}
```

---

# 11. Example Full CI/CD Pipeline

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 24

      - run: npm ci
      - run: npm run lint
      - run: npm test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest

    steps:
      - run: echo "Deploying app..."
```

---

# 12. Recommended CI Best Practices

✔ Run CI on every PR
✔ Keep jobs fast (<5 minutes)
✔ Use `npm ci` instead of `npm install`
✔ Cache dependencies
✔ Protect main branch

Example cache:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 24
    cache: 'npm'
```

---

# 13. Professional Workflow (Recommended)

```
feature branch
     ↓
commit
     ↓
push
     ↓
create PR
     ↓
CI runs (lint + test)
     ↓
review
     ↓
merge to main
     ↓
CD deploys automatically
```
