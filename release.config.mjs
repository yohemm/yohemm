
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  "branches": ["master", "v2"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/git", {
      // "assets": ["app", "public","docs", "package.json", "*.ts", "*.md", "tsconfig.json", "Dockerfile", "docker-compose.yml", ".dockerignore",, "release.config.mjs"], // selection des fichiers (apres l'execution du gitgnore)
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github' // automatic pull request
  ]
}