# CI CD portfoliol

## Utils

[Build Docker Image on DockerHub](https://docs.docker.com/guides/nodejs/configure-ci-cd/)

[React Build Artifact](https://medium.com/@nomannayeem/ci-cd-made-simple-deploy-reactjs-with-aws-github-actions-9d224c35f822)

[GH actions market place](https://github.com/marketplace?type=actions)

[GH market react deploy on GH pages](https://github.com/marketplace/actions/deploy-react-to-github-pages)
## CI
steps:
1. Checkout
2. Node v20
3. typecheck
4. eslint
5. build
6. build artefacts

## Build Image
Create docker image, first host on github, then on VPS docker repository

uses the build artefacts


var for :
- DOCKER_USER

secrets for:
- GITHUB_KEY
- DOCKERHUB_TOKEN

steps:
- githubBuild with artefacts

## CD
secrets for :
- ssh key

Deploy image on VPS

