import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";

test("breadcrumb rendering matches visible breadcrumb UI expectations", async () => {
  const { BreadcrumbList } = await importLanderReactDist();
  const markup = renderToStaticMarkup(React.createElement(BreadcrumbList, {
    items: [
      { label: "Home", href: "/" },
      { label: "Docs", href: "/docs/" },
      { label: "API" },
    ],
  }));

  assert.ok(markup.includes("lander-breadcrumbs"));
  assert.ok(markup.includes("Home"));
  assert.ok(markup.includes("Docs"));
  assert.ok(markup.includes("API"));
  assert.ok(markup.includes('aria-current="page"'));
});
