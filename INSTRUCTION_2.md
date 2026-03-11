# Create a Github Repository and Push the code
Here is a **step-by-step guide to commit code to a GitHub repository** using Git from the command line. This assumes Git is installed and you already have a repository on GitHub.

---

# 1. Configure Git (first time only)

Set your name and email (these appear in commits).

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Verify:

```bash
git config --list
```

---

# 2. Clone the repository (if it already exists)

Go to the repo page on GitHub and copy the HTTPS or SSH URL.

```bash
git clone https://github.com/username/repository.git
```

Then move into the project:

```bash
cd repository
```

---

# 3. Add or modify your code

Create or edit files normally.

Example:

```bash
touch index.js
```

or edit files with your editor.

---

# 4. Check the repository status

See what files changed.

```bash
git status
```

You will see files marked as **untracked** or **modified**.

---

# 5. Stage the files

Add files to the commit.

Add a specific file:

```bash
git add index.js
```

Add all changed files:

```bash
git add .
```

---

# 6. Commit the changes

Create a commit with a message describing the change.

```bash
git commit -m "Add initial Node.js file"
```

Good commit messages are short but clear.

Example:

```
Fix login validation bug
Add API tests
Update README
```

---

# 7. Push the commit to GitHub

Send your commit to the remote repository.

```bash
git push origin main
```

If the branch is `master`:

```bash
git push origin master
```

---

# 8. Verify on GitHub

Go to the repository page on GitHub and refresh.
You should see the new commit in the **commit history**.

---

# Typical Daily Workflow

Most developers repeat this cycle:

```bash
git pull
# edit code
git add .
git commit -m "Describe change"
git push
```

---

✅ **Example full workflow**

```bash
git clone https://github.com/user/my-project.git
cd my-project

# edit files

git add .
git commit -m "Add lint configuration"
git push origin main
```
