import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const semanticDir = path.join(packageRoot, "dist", "semantic");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

test("T1: fused semantic component declaration files expose semantic props instead of raw payload bags", () => {
  const article = read(path.join(semanticDir, "article.d.ts"));
  assert.match(article, /title: string;/);
  assert.match(article, /body: React\.ReactNode;/);
  assert.match(article, /articleType\?: "Article" \| "NewsArticle" \| "BlogPosting";/);

  const product = read(path.join(semanticDir, "product.d.ts"));
  assert.match(product, /name: string;/);
  assert.match(product, /price\?: number \| string;/);
  assert.match(product, /offersCta\?: \{/);

  const course = read(path.join(semanticDir, "course.d.ts"));
  assert.match(course, /name: string;/);
  assert.match(course, /provider\?: \{/);
  assert.match(course, /modules\?: Array<\{/);

  const quiz = read(path.join(semanticDir, "quiz.d.ts"));
  assert.match(quiz, /name: string;/);
  assert.match(quiz, /questions: Array<\{/);
  assert.match(quiz, /revealMode\?: "inline" \| "accordion";/);

  for (const dts of [article, product, course, quiz]) {
    assert.doesNotMatch(dts, /\bdata\?:/);
    assert.doesNotMatch(dts, /\bstructuredData:\b/);
  }
});
