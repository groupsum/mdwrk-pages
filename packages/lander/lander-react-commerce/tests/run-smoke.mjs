import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  AddToCartButton,
  CartBadge,
  CartLineList,
  CartSummary,
  CheckoutButton,
  CommerceProvider,
  LANDER_REACT_COMMERCE_VERSION,
} from "../dist/index.js";

const calls = [];
const adapter = {
  addToCart(input) {
    calls.push(["add", input.product.id]);
  },
  removeCartLine(lineId) {
    calls.push(["remove", lineId]);
  },
  clearCart() {
    calls.push(["clear"]);
  },
  checkout(cart) {
    calls.push(["checkout", cart.itemCount]);
    return { status: "redirect", checkoutUrl: "https://checkout.example.test" };
  },
};

const cart = {
  lines: [
    {
      id: "line-basic",
      productId: "product-notes",
      productName: "Notes",
      planId: "basic",
      planName: "Basic",
      quantity: 1,
      unitPrice: { amount: 9, currency: "USD", billingInterval: "monthly" },
      lineTotal: { amount: 9, currency: "USD", billingInterval: "monthly" },
    },
  ],
  itemCount: 1,
  totals: {
    subtotal: { amount: 9, currency: "USD" },
    total: { amount: 9, currency: "USD" },
  },
};

const markup = renderToStaticMarkup(
  React.createElement(
    CommerceProvider,
    { cart, adapter },
    React.createElement(
      "div",
      null,
      React.createElement(CartBadge, null),
      React.createElement(CartLineList, null),
      React.createElement(CartSummary, null),
      React.createElement(AddToCartButton, {
        item: {
          product: { id: "notes", name: "Notes" },
        },
      }),
      React.createElement(CheckoutButton, null),
    ),
  ),
);

assert.equal(typeof LANDER_REACT_COMMERCE_VERSION, "string");
assert.ok(markup.includes("Cart (1)"));
assert.ok(markup.includes("Notes"));
assert.ok(markup.includes("Cart summary"));
assert.ok(markup.includes("Add to Cart"));
assert.ok(markup.includes("Checkout"));
