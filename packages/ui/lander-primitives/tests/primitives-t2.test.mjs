import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  CheckboxField,
  CheckboxGroup,
  ColorPicker,
  ChatPrompt,
  DataTable,
  DateRangeField,
  FileDropzone,
  IntegerQuantityField,
  JsonPreview,
  Map,
  MapBeacon,
  MapBox,
  MapPath,
  MapPoint,
  Progress,
  RadioGroup,
  TodoList,
  TaggedCrudField,
  TextCompletionField,
  TimeRangeField,
  ToggleSection,
} from "../dist/index.js";

test("T2: data and preview primitives contain long values without dropping content", () => {
  const longValue = "schema-property-acceptedPaymentMethod-".repeat(8);
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(JsonPreview, { value: { longValue } }),
    React.createElement(DataTable, { columns: ["name", "value"], rows: [{ name: "identifier", value: longValue }] }),
  ));

  assert.match(markup, /schema-property-acceptedPaymentMethod/);
  assert.match(markup, /data-mdwrk-primitive="data-table"/);
});

test("T2: stateful primitives render failure-resistant default semantics", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(Progress, { value: 25, max: 100, label: "Job progress" }),
    React.createElement(TextCompletionField, { label: "Schema type", defaultValue: "Art", options: [{ value: "Article", label: "Article" }] }),
    React.createElement(TaggedCrudField, { label: "Keywords", tags: ["schema", "json-ld"], defaultValue: "landing-page" }),
    React.createElement(IntegerQuantityField, { label: "Seats", defaultValue: 12 }),
    React.createElement(DateRangeField, { label: "Travel", startProps: { defaultValue: "2026-06-10" }, endProps: { defaultValue: "2026-06-18" } }),
    React.createElement(TimeRangeField, { label: "Hours", startProps: { defaultValue: "09:00" }, endProps: { defaultValue: "17:00" } }),
    React.createElement(CheckboxField, { label: "Enabled", defaultChecked: true }, "Enabled"),
    React.createElement(RadioGroup, { label: "Delivery", value: "standard", options: [{ value: "standard", label: "Standard" }] }),
    React.createElement(CheckboxGroup, { label: "Channels", values: ["email"], options: [{ value: "email", label: "Email" }] }),
    React.createElement(ColorPicker, { label: "Accent", defaultValue: "#2f735f" }),
    React.createElement(FileDropzone, { label: "Upload schema", multiple: true }),
    React.createElement(ChatPrompt, { label: "Prompt", defaultValue: "Compare these files", attachments: [{ name: "a.json", kind: "JSON" }, { name: "b.png", kind: "Image" }] }),
    React.createElement(TodoList, { items: [{ label: "Ready", done: true }, { label: "Pending", done: false }] }),
    React.createElement(Map, null, "Route map"),
    React.createElement(MapPoint, null, "Point A"),
    React.createElement(MapPath, null, "Route 1"),
    React.createElement(MapBox, null, "Viewport"),
    React.createElement(MapBeacon, null, "Beacon"),
    React.createElement(ToggleSection, { title: "Details" }, "Expandable content"),
  ));

  assert.match(markup, /aria-label="Job progress"/);
  assert.match(markup, /data-mdwrk-primitive="text-completion-field"/);
  assert.match(markup, /data-mdwrk-primitive="tagged-crud-field"/);
  assert.match(markup, /data-mdwrk-primitive="integer-quantity-field"/);
  assert.match(markup, /data-mdwrk-primitive="date-range-field"/);
  assert.match(markup, /data-mdwrk-primitive="time-range-field"/);
  assert.match(markup, /data-mdwrk-primitive="checkbox-field"/);
  assert.match(markup, /data-mdwrk-primitive="radio-group"/);
  assert.match(markup, /data-mdwrk-primitive="checkbox-group"/);
  assert.match(markup, /mdwrk-primitive__control--swatch/);
  assert.match(markup, /type="file"/);
  assert.match(markup, /multiple=""/);
  assert.match(markup, /data-mdwrk-primitive="chat-prompt"/);
  assert.match(markup, /data-mdwrk-primitive="todo-list"/);
  assert.match(markup, /data-mdwrk-primitive="map"/);
  assert.match(markup, /data-mdwrk-primitive="map-point"/);
  assert.match(markup, /data-mdwrk-primitive="map-path"/);
  assert.match(markup, /data-mdwrk-primitive="map-box"/);
  assert.match(markup, /data-mdwrk-primitive="map-beacon"/);
  assert.match(markup, /<details/);
});
