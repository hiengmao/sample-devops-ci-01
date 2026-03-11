# Create a Github Actions Workflow
Let’s build the understanding step-by-step instead of jumping straight to the final YAML.

First, a quick concept check.

### What is Continuous Integration?

Continuous Integration (CI) means:

> Every time code is pushed to the repository, automated checks run (tests, linting, build, etc.).

On GitHub, this is done using **GitHub Actions**.

Typical CI pipeline for your Node project would:

1. Trigger when code is pushed or a PR is opened.
2. Install dependencies.
3. Run linting.
4. Run tests.
5. Fail if something breaks.

---

# Step 1 — Understand the Workflow File

In **GitHub**, CI is defined by a **workflow file** stored in:

```
.github/workflows/
```

Example structure:

```
your-project
 ├─ src
 ├─ tests
 ├─ package.json
 └─ .github
     └─ workflows
         └─ ci.yml
```

GitHub automatically detects workflow files in that folder.

---

# Step 2 — Think about the CI steps

Before writing YAML, let's think about the pipeline logically.

For your Node project, CI needs to:

1️⃣ Checkout the repository
2️⃣ Install Node
3️⃣ Install dependencies
4️⃣ Run ESLint
5️⃣ Run tests

These will become **steps** in the workflow.

---

# Step 3 — Triggering the workflow

CI should run when:

* code is **pushed**
* a **pull request** is created

In GitHub Actions this is defined using an **event trigger**.

---
Good choice. ✅
Running CI on **both `push` and `pull_request`** is the most common setup.

* `push` → validates code pushed directly to branches
* `pull_request` → checks code **before merging**

This is exactly how most projects use **GitHub Actions**.

---

# Step 1 — Create the workflow file

Inside your repository create:

```
.github/workflows/ci.yml
```

GitHub automatically detects workflow files in this folder.

---

# Step 2 — Define the workflow trigger

The first part defines **when CI runs**.

Example:

```yaml
name: Node CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
```

This means:

* Run CI when pushing to `main`
* Run CI when opening a PR to `main`

---

# Step 3 — Define the job environment

Now we define **what machine runs the CI**.

Example:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
```

GitHub will create a **temporary Linux VM** to run your pipeline.

---

# Step 4 — Add the CI steps

Think back to the steps we listed earlier:

1. checkout code
2. setup Node
3. install dependencies
4. run lint
5. run tests

These become the workflow **steps**.

Example structure:

```yaml
steps:
  - checkout repository
  - setup node
  - install dependencies
  - run lint
  - run tests
```

But in GitHub Actions, some steps use **pre-built actions**.

For example:

* checkout action
* node setup action

---
