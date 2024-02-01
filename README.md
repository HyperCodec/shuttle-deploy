# shuttle-deploy
Github Actions repo for deploying to https://shuttle.rs

### Quickstart
```yaml
name: Deploy

on:
    push:
        branches:
            - main
    pull_request:
        branches:
            - main
    workflow_dispatch:

concurrency: production

jobs:
    deploy:
        runs-on: ubuntu-latest
        environment: production
        steps:
            - uses: actions/checkout@v3
            - uses: inflectrix/shuttle-deploy@latest
              with:
                api_key: ${{ secrets.SHUTTLE_API_KEY }}
```

### Parameters
`* = required`

- api_key* - Your shuttle.rs API key. For security reasons, please use [Github Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) so as to not leak access to your Shuttle account.
- project_name - The name of the Shuttle project.
- path - The path to your Shuttle project.

### Common Errors
- `404 not found` - This usually means that your Shuttle project does not exist. To solve this issue ensure that you have run `cargo shuttle init` and `cargo shuttle project start` to initialize the project on your [shuttle console](https://console.shuttle.rs)
