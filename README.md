# Global Hack Week Workshop: GitHub Actions

This repository is used for the 2026 Global Hack Week workshop on GitHub Actions.
It includes workshop slides and practical workflow examples that you can run and modify.

## Slides

Slides from the session are available in the `slides/` folder. Slides are powered by [Marp](https://marp.app/).

## Practical Examples

The workshop includes 5 example workflows in `.github/workflows/`:

1. `hello-workflow.yml`: basic workflow structure and event context.
2. `triggers-and-dispatch.yml`: push filters and manual `workflow_dispatch` inputs.
3. `expressions-and-conditions.yml`: `if` expressions at job and step level.
4. `contexts-and-env.yml`: contexts, environment variables, and `$GITHUB_ENV`.
5. `ci-node-matrix.yml`: matrix testing with Node.js and caching.

## Running The Examples

1. Open one workflow file from `.github/workflows/`.
2. Commit a small change to trigger `push`-based workflows.
3. Use the Actions tab to run manual workflows (`workflow_dispatch`).
4. Review logs and compare behavior between examples.

## Resources

- [GitHub Actions docs](https://docs.github.com/en/actions)
- [Workflow syntax reference](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Events that trigger workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)
