# @mdwrk/lander-commerce-contract

Portable commerce contracts for MdWrk storefront integrations.

Use this package when a lander consumer needs reusable cart and checkout types without committing to a specific app state library, payment provider, or backend implementation.

## What it includes

- product, plan, and price contracts
- cart line and cart snapshot contracts
- checkout request and result contracts
- runtime adapter interfaces for add-to-cart, cart mutation, and checkout

## Installation

```bash
npm install @mdwrk/lander-commerce-contract
```

## Usage

```ts
import type {
  AddToCartInput,
  CommerceCart,
  CommerceRuntimeAdapter,
} from "@mdwrk/lander-commerce-contract";

const adapter: CommerceRuntimeAdapter = {
  addToCart(input: AddToCartInput) {
    console.log("add", input);
  },
  removeCartLine(lineId) {
    console.log("remove", lineId);
  },
  clearCart() {
    console.log("clear");
  },
  async checkout() {
    return { status: "redirect", checkoutUrl: "https://example.test/checkout" };
  },
};
```
