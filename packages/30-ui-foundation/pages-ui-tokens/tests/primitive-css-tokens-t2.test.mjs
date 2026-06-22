import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";

test("T2: interactive primitive token files include focus and disabled state coverage", () => {
  const actionCss = readFileSync(resolve("src/styles/primitive-actions.css"), "utf8");
  const formCss = readFileSync(resolve("src/styles/primitive-forms.css"), "utf8");

  assert.ok(actionCss.includes(":focus-visible"), "action primitives should define focus-visible state");
  assert.ok(actionCss.includes(":disabled"), "action primitives should define disabled state");
  assert.ok(formCss.includes(":focus-visible"), "form primitives should define focus-visible state");
  assert.ok(formCss.includes(":disabled"), "form primitives should define disabled state");
});

test("T2: primitive token list has no duplicate token names", () => {
  const tokens = tokenExports.MDWRK_PAGES_UI_PRIMITIVE_TOKEN_NAMES;
  assert.equal(new Set(tokens).size, tokens.length);
});
