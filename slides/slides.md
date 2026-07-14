---
marp: true
theme: default
paginate: true
footer: "CI/CD with GitHub Actions | Major League Hacking"
size: 16:9
title: "Global Hack Week: Season Launch"
---

# GitHub Actions Workshop

**Presented by:** Alberto Camarena
**Date:** 14/07/26

---

# Agenda

1. What is CI/CD?
2. What are GitHub Actions?
3. Core workflow anatomy
4. Practical examples (5)
5. Security defaults
6. Summary and Q&A

---

# What Is CI/CD?

**Continuous Integration (CI)**
- Automatically test and merge code changes.
- Ensures software quality and stability.

**Continuous Deployment (CD)**
- Automatically deploys code to production.
- Reduces manual effort and speeds up releases.

---

# What Are GitHub Actions?

- **Automated workflows** within GitHub.
- Allows CI/CD directly in GitHub repositories.
- Uses YAML syntax for defining workflows.
- Supports custom and community actions.

🔗 [Official Documentation](https://docs.github.com/en/actions)

---

# CI/CD Tooling Snapshot

| CI/CD Tool    | Hosting  | Notable Features       |
|--------------|---------|----------------------|
| **Jenkins**  | Self-hosted | Highly customizable |
| **GitLab CI** | Cloud/Self | Integrated with GitLab |
| **CircleCI** | Cloud/Self | Fast and scalable  |
| **Travis CI** | Cloud | Simple setup for OSS |

---

# Why Teams Use GitHub Actions

- Native integration with issues, PRs, and checks.
- Easy onboarding for repository contributors.
- Huge ecosystem of reusable actions.
- Strong support for CI, CD, maintenance, and security automation.

---

# Workflow Anatomy (At A Glance)

Every workflow has:

1. `on`: when the workflow runs
2. `jobs`: what groups of work execute
3. `steps`: commands or actions inside each job
4. `uses` / `run`: either reusable actions or shell commands

---

# Workflow Anatomy (Single File)

```yaml
name: CI Demo

on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read

...[continue]
```

---

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Run tests
        run: npm test
```

---

# YAML Tips That Save Debug Time

- Indentation matters (spaces, not tabs).
- Use clear step names so logs are readable.
- Prefer explicit branches and filters over overly broad triggers.
- Start simple, then layer matrix, caching, artifacts, and deployments.

---

# Practical Example 1: Hello Workflow

Learning goal:
- Create the smallest useful workflow.
- Understand `github.actor` and event context.

Repo file:
- `.github/workflows/hello-workflow.yml`

---

# Practical Example 2: Triggers + Manual Inputs

Learning goal:
- Run on `push` for one branch.
- Add manual `workflow_dispatch` inputs.

Repo file:
- `.github/workflows/triggers-and-dispatch.yml`

---

# Practical Example 3: Expressions + Conditions

Learning goal:
- Use `if:` at job and step level.
- Condition behavior by event type.

Repo file:
- `.github/workflows/expressions-and-conditions.yml`

---

# Practical Example 4: Contexts + Env Vars

Learning goal:
- Read from `github`, `env`, and `vars` contexts.
- Persist values during the run with `$GITHUB_ENV`.

Repo file:
- `.github/workflows/contexts-and-env.yml`

---

# Practical Example 5: Node CI Matrix

Learning goal:
- Test multiple Node versions in parallel.
- Add dependency cache via setup-node.

Repo file:
- `.github/workflows/ci-node-matrix.yml`

---

# Secure Defaults For Beginners

- Set minimal `GITHUB_TOKEN` permissions.
- Store tokens/credentials in repository or environment secrets.
- Avoid running unsafe fork code in trusted contexts.
- Pin actions to trusted versions, and use SHAs for high-security workflows.

---

# Example: Minimal Token Permissions

```yaml
permissions:
  contents: read
```

Add more permissions only when a job needs them.

---

# Where To Learn More

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow syntax reference](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Events that trigger workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)

---

# Summary

- GitHub Actions is a practical way to automate development workflows.
- Start with clear triggers and readable jobs.
- Build confidence through small, runnable examples.
- Apply secure defaults early.

---

# Q&A

Questions welcome.
