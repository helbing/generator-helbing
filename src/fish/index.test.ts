/* eslint-disable vitest/expect-expect */

import path from "path"
import { fileURLToPath } from "url"

import { afterAll, beforeAll, describe, test } from "vitest"
import helpers, { result } from "yeoman-test"

import { GeneratorOptions, IAnswers } from "."

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe("Test generator", () => {
  const name = "helloworld"

  beforeAll(async () => {
    await helpers.run(path.join(__dirname, "../../generators/fish"))

    await result
      .create(path.join(__dirname, "../../generators/fish"))
      .withOptions({ isTesting: true } as GeneratorOptions)
      .withAnswers({ name: name } as IAnswers)
      .run()
  })

  afterAll(() => {
    result.cleanup()
  })

  test("Expect index.js is created", () => {
    result.assertFile("index.js")
  })

  test("Expect package.json is created", () => {
    result.assertFile("package.json")
  })

  test("Expect package.json have correct name", () => {
    result.assertFileContent("package.json", `"name": "${name}"`)
  })
})
