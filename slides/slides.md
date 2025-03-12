---
marp: true
theme: default
paginate: true
footer: "GitHub Actions | Major League Hacking"
size: 16:9
---

# 🚀 Introduction to GitHub Actions

**Presented by:** Alberto Camarena
**Date:** 12/03/25 📅

---

# 📌 Agenda

1. What is CI/CD?
2. What are GitHub Actions?
3. Alternatives
4. Why GitHub Actions?
5. Use Cases & Integrations
6. Writing GitHub Actions
7. Understanding YAML & Workflow Structure
8. Breakdown of a Workflow File
9. Examples & Demos
10. Summary & Q&A

---

# 🔄 What is CI/CD?

**Continuous Integration (CI)**
- Automatically test and merge code changes.
- Ensures software quality and stability.

**Continuous Deployment (CD)**
- Automatically deploys code to production.
- Reduces manual effort and speeds up releases.

---

# ⚙️ What are GitHub Actions?

- **Automated workflows** within GitHub.
- Allows CI/CD directly in GitHub repositories.
- Uses YAML syntax for defining workflows.
- Supports custom and community actions.

🔗 [Official Documentation](https://docs.github.com/en/actions)

---

# 📊 Alternatives to GitHub Actions

| CI/CD Tool    | Hosting  | Notable Features       |
|--------------|---------|----------------------|
| **Jenkins**  | Self-hosted | Highly customizable |
| **GitLab CI** | Cloud/Self | Integrated with GitLab |
| **CircleCI** | Cloud/Self | Fast and scalable  |
| **Travis CI** | Cloud | Simple setup for OSS |

---

# 🎯 Why GitHub Actions?

✅ **Seamless GitHub integration**
✅ **Easy-to-use YAML syntax**
✅ **Flexible workflows**
✅ **Marketplace with pre-built actions**
✅ **Free for public repositories**

---

# 🛠️ Use Cases & Integrations

### Use Cases:
- 🚀 **Automated testing**
- 📦 **Build & deploy applications**
- 🔄 **Dependency updates**
- 🔍 **Code quality checks**

### Integrations:
- **AWS, Azure, GCP** for cloud deployments
- **Docker** for containerized applications
- **Slack & Teams** for notifications

---

# ✍️ Writing GitHub Actions

- Define workflows using **YAML** files.
- Workflows are stored in `.github/workflows/`.
- Each workflow consists of **triggers, jobs, and steps**.
- Can use predefined or custom actions.

---

# 📜 Understanding YAML

- **YAML (Yet Another Markup Language)** is used for configuration.
- Uses indentation instead of brackets.
- Key-value pairs structure.
- Example:

```yaml
name: Example Workflow
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Print a message
        run: echo "Hello, YAML!"
```

---

# 📄 Breakdown of a Workflow File

### **name**
- Defines the workflow name.
- Helps identify it in GitHub Actions UI.

```yaml
name: CI Pipeline
```

---

# 🏷️ run-name

- Defines a **dynamic name** for the workflow run.
- Useful for custom naming based on events.

```yaml
run-name: Deploying ${{ github.ref }}
```

---

# 🎯 on (Triggers)

- Specifies when the workflow runs.
- Supports events like `push`, `pull_request`, `schedule`.

```yaml
on:
  push:
    branches:
      - main
```

---

# 🏗️ jobs

- Defines what will be executed.
- Each job runs in a separate runner.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
```

---

# 🔄 steps

- Sequence of tasks in a job.
- Can run shell commands or use prebuilt actions.

```yaml
steps:
  - name: Print a message
    run: echo "Hello World!"
```

---

# 🔌 Using Prebuilt Actions

- GitHub Actions Marketplace has reusable actions.
- Example: Checking out a repository.

```yaml
- name: Checkout repository
  uses: actions/checkout@v3
```

---

# 📝 Example: Simple CI Workflow

```yaml
name: CI Pipeline

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

---

# 📌 Summary

- GitHub Actions enable powerful CI/CD workflows.
- YAML-based configuration for automation.
- Flexible triggers, jobs, and steps.
- Supports marketplace actions for easy integration.

---

# ❓ Q&A

💡 Questions? Let's discuss! 🚀