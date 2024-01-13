import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    // link: https://github.com/aws/aws-cdk/issues/20873
    pool: "forks",
    environment: "node",
    hookTimeout: 60000,
    testTimeout: 60000,
    resolveSnapshotPath(path, extension) {
      return path + extension
    },
  },
})
