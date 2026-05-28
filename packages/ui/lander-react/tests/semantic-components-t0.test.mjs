import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

test("T0: every fused semantic component exports, renders visible markup, and emits JSON-LD by default", async () => {
  const mod = await importLanderReactDist();

  for (const fixture of semanticFixtures) {
    assert.equal(typeof mod[fixture.name], "function", `${fixture.name} must be exported`);
    const markup = renderToStaticMarkup(React.createElement(mod[fixture.name], fixture.props));
    assert.ok(markup.includes("application/ld+json"), `${fixture.name} must emit JSON-LD`);
    assert.ok(markup.includes(`"@type":"${fixture.expectedType}"`), `${fixture.name} must emit ${fixture.expectedType}`);
    for (const snippet of fixture.visible) {
      assert.ok(markup.includes(snippet), `${fixture.name} must render visible snippet: ${snippet}`);
    }
  }
});

test("T0: article-family fused components render distinct shell classes for their family-specific token surfaces", async () => {
  const mod = await importLanderReactDist();
  const articleMarkup = renderToStaticMarkup(React.createElement(mod.Article, { title: "Article", body: React.createElement("p", null, "body") }));
  const blogMarkup = renderToStaticMarkup(React.createElement(mod.BlogPosting, { title: "Blog", body: React.createElement("p", null, "body") }));
  const newsMarkup = renderToStaticMarkup(React.createElement(mod.NewsArticle, { title: "News", body: React.createElement("p", null, "body") }));
  const techMarkup = renderToStaticMarkup(React.createElement(mod.TechArticle, { title: "Tech", body: React.createElement("p", null, "body") }));
  const discussionMarkup = renderToStaticMarkup(React.createElement(mod.DiscussionForumPosting, { title: "Thread", articleBody: "Discussion body" }));
  const claimMarkup = renderToStaticMarkup(React.createElement(mod.ClaimReview, { title: "Claim", claimReviewed: "Claim text" }));

  assert.ok(articleMarkup.includes("lander-semantic--article"));
  assert.ok(blogMarkup.includes("lander-semantic--blog-posting"));
  assert.ok(newsMarkup.includes("lander-semantic--news-article"));
  assert.ok(techMarkup.includes("lander-semantic--tech-article"));
  assert.ok(discussionMarkup.includes("lander-semantic--discussion-forum-posting"));
  assert.ok(claimMarkup.includes("lander-semantic--claim-review"));
  assert.ok(claimMarkup.includes("lander-semantic__callout"));
});
