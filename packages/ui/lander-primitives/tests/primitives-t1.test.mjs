import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Accordion, AccordionItem, AddressFieldSet, Breadcrumbs, Button, EmailField, FirstNameField, Icon, IconButton, IconButtonGroup, Modal, NameFieldSet, Navbar, NavItem, Pagination, SearchField, SecretField, SelectField, Tabs, TelephoneField, TextInput, Toolbar, UrlField, WebsiteField } from "../dist/index.js";

test("T1: interactive primitives expose accessible labels and selected states", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(IconButton, { label: "Refresh", iconName: "refresh" }),
    React.createElement(IconButtonGroup, null,
      React.createElement(IconButton, { label: "Bold", iconName: "format_bold" }),
      React.createElement(IconButton, { label: "Italic", iconName: "format_italic" }),
    ),
    React.createElement(Toolbar, { "aria-label": "Demo tools" }, React.createElement("span", null, "Tools")),
    React.createElement(Tabs, { value: "types", items: [{ value: "types", label: "Types" }, { value: "properties", label: "Properties" }] }),
    React.createElement(Pagination, { page: 2, pageCount: 4 }),
  ));

  assert.match(markup, /aria-label="Refresh"/);
  assert.match(markup, /data-mdwrk-primitive="icon-button-group"/);
  assert.match(markup, /role="toolbar"/);
  assert.match(markup, /aria-label="Demo tools"/);
  assert.match(markup, /role="tablist"/);
  assert.match(markup, /aria-selected="true"/);
  assert.match(markup, /Page 2 of 4/);
});

test("T1: form and navigation primitives preserve className hooks", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(SelectField, {
      className: "demo-select",
      label: "Kind",
      value: "type",
      readOnly: true,
      options: [{ value: "type", label: "Types" }],
    }),
    React.createElement(Breadcrumbs, { className: "demo-breadcrumbs", items: [{ label: "Home", href: "/" }, { label: "Current" }] }),
  ));

  assert.match(markup, /demo-select/);
  assert.match(markup, /demo-breadcrumbs/);
  assert.match(markup, /aria-current="page"/);
  assert.ok(!markup.includes("expand_more"), "SelectField should use the native select affordance by default");
});

test("T1: icon-integrated field primitives render adornment shells without dropping controls", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(SearchField, { label: "Search", defaultValue: "Thing", trailingIcon: React.createElement(Icon, { name: "tune", decorative: true }) }),
    React.createElement(TextInput, { label: "Title", defaultValue: "Primitive contract", leadingIcon: React.createElement(Icon, { name: "title", decorative: true }) }),
    React.createElement(SelectField, {
      label: "Family",
      defaultValue: "forms",
      leadingIcon: React.createElement(Icon, { name: "category", decorative: true }),
      options: [{ value: "forms", label: "Forms" }],
    }),
  ));

  assert.match(markup, /mdwrk-primitive__field-control-shell/);
  assert.match(markup, /mdwrk-primitive__field-adornment/);
  assert.match(markup, /mdwrk-primitive__text-fit-preserve/);
  assert.match(markup, /value="Thing"/);
  assert.match(markup, /Primitive contract/);
  assert.match(markup, /<select/);
});

test("T1: primitive token layers define the shared text-fit contract and control shell sizing rules", () => {
  const rootCss = readFileSync(resolve("../pages-ui-tokens/src/styles/root.css"), "utf8");
  const formCss = readFileSync(resolve("../pages-ui-tokens/src/styles/primitive-forms.css"), "utf8");

  for (const selector of [
    ".mdwrk-primitive__text-fit-heading",
    ".mdwrk-primitive__text-fit-preserve",
    ".mdwrk-primitive__text-fit-preview",
    ".mdwrk-primitive__text-fit-structured",
  ]) {
    assert.ok(rootCss.includes(selector), `expected text-fit selector ${selector}`);
  }

  assert.ok(formCss.includes(".mdwrk-primitive__field-control-shell > .mdwrk-primitive__control"));
  assert.ok(formCss.includes("width: 100%;"));
  assert.ok(formCss.includes("min-width: 0;"));
});

test("T1: action primitives separate hierarchy variant from semantic tone", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(Button, { variant: "primary", tone: "accent" }, "Publish"),
    React.createElement(Button, { tone: "danger" }, "Delete"),
    React.createElement(Button, { variant: "danger" }, "Deprecated delete"),
  ));

  assert.match(markup, /data-mdwrk-variant="primary"/);
  assert.match(markup, /data-mdwrk-tone="accent"/);
  assert.match(markup, /mdwrk-primitive--button-danger/);
  assert.match(markup, /data-mdwrk-variant="secondary"/);
  assert.match(markup, /Deprecated delete/);
});

test("T1: accordion, navbar, and modal primitives expose their core markers", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(Accordion, null, React.createElement(AccordionItem, { title: "Section", open: true, leadingIcon: React.createElement(Icon, { name: "article", decorative: true }), trailingIcon: React.createElement(Icon, { name: "expand_less", decorative: true }) }, "Content")),
    React.createElement(Navbar, null, React.createElement(NavItem, { href: "#overview", active: true, leadingIcon: React.createElement(Icon, { name: "home", decorative: true }), trailingIcon: React.createElement(Icon, { name: "chevron_right", decorative: true }) }, "Overview")),
    React.createElement(Modal, { title: "Confirm" }, "Body"),
  ));

  for (const marker of ["accordion", "accordion-item", "navbar", "nav-item", "modal"]) {
    assert.match(markup, new RegExp(`data-mdwrk-primitive="${marker}"`));
  }
  assert.match(markup, /aria-modal="true"/);
  assert.match(markup, /mdwrk-primitive__nav-icon/);
});

test("T1: identity and contact primitives use specialized HTML types and fieldset markers", () => {
  const markup = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(FirstNameField, { defaultValue: "Ada" }),
    React.createElement(EmailField, { defaultValue: "ada@example.org" }),
    React.createElement(TelephoneField, { defaultValue: "+1 555 0100" }),
    React.createElement(UrlField, { label: "Profile URL", defaultValue: "https://example.org/ada" }),
    React.createElement(WebsiteField, { defaultValue: "https://mdwrk.dev" }),
    React.createElement(SecretField, { defaultValue: "abc123" }),
    React.createElement(NameFieldSet, { firstNameProps: { defaultValue: "Ada" }, middleNameProps: { defaultValue: "M." }, lastNameProps: { defaultValue: "Lovelace" } }),
    React.createElement(AddressFieldSet, { cityProps: { defaultValue: "Austin" }, countryProps: { defaultValue: "United States" } }),
  ));

  for (const marker of ["first-name-field", "email-field", "telephone-field", "url-field", "website-field", "secret-field", "name-field-set", "address-field-set"]) {
    assert.match(markup, new RegExp(`data-mdwrk-primitive=\"${marker}\"`));
  }
  assert.match(markup, /type="email"/);
  assert.match(markup, /type="tel"/);
  assert.match(markup, /type="url"/);
  assert.match(markup, /type="password"/);
  assert.match(markup, /mdwrk-primitive__fieldset-grid--name/);
  assert.match(markup, /mdwrk-primitive__fieldset-grid--address/);
});
