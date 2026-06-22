# @mdwrk/lander-react-commerce

Reusable React commerce components and hooks for MdWrk lander consumers.

This package is intentionally runtime-agnostic. It does not ship a cart store, persistence layer, or payment provider integration. The consuming app provides those behaviors through a `CommerceProvider`.

## What it includes

- `CommerceProvider`
- `useCommerce`
- `AddToCartButton`
- `CartBadge`
- `CartLineList`
- `CartSummary`
- `CheckoutButton`

## Installation

```bash
npm install @mdwrk/lander-react-commerce @mdwrk/lander-commerce-contract
```
