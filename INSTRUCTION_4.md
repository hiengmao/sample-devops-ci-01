Below is a **professional Git workflow used in most teams** when working with GitHub:

**branch → commit → push → pull request → review → merge**

This prevents breaking the main branch and enables code review.

---

# 1. Clone the repository

If you haven't downloaded the project yet:

```bash
git clone https://github.com/username/repository.git
cd repository
```

---

# 2. Update your local main branch

Always start from the latest `main`.

```bash
git checkout main
git pull origin main
```

This ensures your work is based on the latest code.

---

# 3. Create a feature branch

Never work directly on `main`.
Create a **feature branch**.

```bash
git checkout -b feature/add-login-api
```

Branch naming conventions commonly used:

```
feature/add-login-api
feature/user-profile-page
fix/login-validation-bug
hotfix/security-patch
```

---

# 4. Implement your changes

Edit or add files in your project.

Example:

```
src/loginController.js
tests/login.test.js
```

---

# 5. Check changed files

```bash
git status
```

---

# 6. Stage the changes

Add files to the commit.

```bash
git add .
```

or specific files:

```bash
git add src/loginController.js
```

---

# 7. Commit your changes

Write a clear commit message.

```bash
git commit -m "feat: add login API endpoint"
```

Example professional commit messages:

```
feat: add user authentication API
fix: resolve login validation bug
test: add unit tests for auth service
docs: update README setup guide
```

---

# 8. Push the branch to GitHub

```bash
git push origin feature/add-login-api
```

Your branch is now available on GitHub.

---

# 9. Create a Pull Request (PR)

On the repository page on GitHub:

1. Open the repository
2. Click **Compare & pull request**
3. Set:

```
base branch: main
compare branch: feature/add-login-api
```

4. Add:

* Title
* Description
* Screenshots (if UI changes)

Example PR description:

```
## Changes
- Add login API endpoint
- Implement JWT authentication
- Add unit tests

## Testing
- npm test
- Verified login flow manually
```

Then click **Create Pull Request**.

---

# 10. Code Review

Team members review the PR and may request changes.

If changes are requested:

```bash
# modify code
git add .
git commit -m "fix: address review comments"
git push
```

The PR automatically updates.

---

# 11. Merge the Pull Request

Once approved:

Click **Merge Pull Request** on GitHub.

Common merge methods:

* **Merge commit** (default)
* **Squash and merge** (clean history)
* **Rebase and merge**

Many teams prefer **Squash and merge**.

---

# 12. Delete the branch

After merging:

On GitHub click **Delete branch**, or locally:

```bash
git branch -d feature/add-login-api
```

---

# 13. Update local repository

```bash
git checkout main
git pull origin main
```

---

# Complete Workflow Summary

```
git checkout main
git pull origin main

git checkout -b feature/new-feature

# write code

git add .
git commit -m "feat: implement new feature"

git push origin feature/new-feature

# create PR on GitHub

# after merge
git checkout main
git pull origin main
git branch -d feature/new-feature
```