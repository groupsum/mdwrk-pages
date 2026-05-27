# Subscription Store Demo

Dockerized MdWrk Pages demo site for the subscription storefront preset and the commerce React package.

This example renders:

- `product.home`
- `product.catalog`
- `product.pricing`
- `product.plan-detail`
- `support.billing`
- `trust.refunds`

It uses:

- `@mdwrk/subscription-store-content-pack`
- `@mdwrk/lander-react`
- `@mdwrk/lander-react-structured-data`
- `@mdwrk/lander-react-commerce`
- `@mdwrk/lander-commerce-contract`

Run locally:

```bash
npm run dev -w @mdwrk/example-subscription-store-demo
```

Build Docker image:

```bash
docker compose -f examples/subscription-store-demo/compose.yaml up --build
```
