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
6. Examples & Demos
7. Summary & Q&A

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
- Seamless integration with GitHub repositories.
- Supports various automation use cases.
- Marketplace offers reusable actions.

---

# ❓ Q&A

💡 Questions? Let's discuss! 🚀
