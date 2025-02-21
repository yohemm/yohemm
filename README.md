# Portfolio Yohem
## Dev init

1. Clone the  repo
2. `npm install` for node dependancies
3. `npm run dev` for start server in dev mode
# In dev
[Listing des expériences](./docs/experience.md)

[Update web/Composants react](./docs/Front.md)

## A faire

### Dev 
- [x] ProjectShowing
  - [x] Redisign
  - [x] liens
- [x] components/Projects.tsx
  - [x] Laisons entre project showing et projects liste (en rajoutant la connection au image)
- [x] elements/Projects.tsx
  - [x] ajout de l'attribut, "text-presentation" dans Projects
- [] Ajout de la section contact sur l'accueil
- [ ] Compétances

### Redaction
- [ ] homepage
- [ ] Projects:
- [ ] formation
  - [ ] details des formation
  - [ ] sectio autodidact
- [ ] Compétance

# CI-CD

## [Format](https://semantic-release.gitbook.io/semantic-release#commit-message-format)
    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>

exemple avec un changement de version: 
  
    feat: Changes welcome message

    BREAKING CHANGE:
      My message to describe new version



build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests

_BREAKING CHANGE: major version_
_feat: minor version_
_fix: fix index_

ci n'execute pas semantic release
