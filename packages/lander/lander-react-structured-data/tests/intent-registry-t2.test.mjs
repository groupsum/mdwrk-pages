import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { importStructuredDataReactDist } from "./load-dist.mjs";

test("T2: unsupported intent kinds fail closed through both lookup and render paths", async () => {
  const mod = await importStructuredDataReactDist();
  assert.throws(() => mod.getStructuredDataIntentRendererEntry("UnsupportedKind"), /Unsupported structured data intent kind/);
  assert.throws(
    () =>
      mod.renderStructuredDataIntent({
        id: "intent:unsupported",
        kind: "UnsupportedKind",
        pagePath: "/unsupported/",
        source: "schema",
        data: {},
      }),
    /Unsupported structured data intent kind/,
  );
});

test("T2: registry rendering is deterministic for repeated intent renders", async () => {
  const mod = await importStructuredDataReactDist();
  const intent = {
    id: "intent:webpage",
    kind: "WebPage",
    pagePath: "/deterministic/",
    source: "schema",
    data: { name: "Deterministic Page", url: "https://mdwrk.test/deterministic", description: "Stable output" },
  };

  const first = renderToStaticMarkup(mod.renderStructuredDataIntent(intent));
  const second = renderToStaticMarkup(mod.renderStructuredDataIntent(intent));
  assert.equal(second, first);
  assert.ok(first.includes('"WebPage"'));
});
