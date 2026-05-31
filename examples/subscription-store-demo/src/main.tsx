import React, { startTransition, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import type { AddToCartInput, CheckoutResult, CommerceCart, CommerceCartLine } from "@mdwrk/lander-commerce-contract";
import type { PricingPlanSpec, PricingSection } from "@mdwrk/lander-content-contract";
import type { CompiledPage } from "@mdwrk/lander-core";
import { VisibleLanderPage } from "@mdwrk/lander-react";
import {
  AddToCartButton,
  CartBadge,
  CartLineList,
  CartSummary,
  CheckoutButton,
  CommerceProvider,
} from "@mdwrk/lander-react-commerce";
import { LanderStructuredData, buildLanderJsonLdGraph } from "@mdwrk/lander-react-structured-data";
import { createSubscriptionStoreDemoSite, normalizeRouteSlug, subscriptionStoreHomeNavigation } from "./demo-site";
import "./styles.css";

const canonicalOrigin = typeof window === "undefined" ? "http://localhost:4192" : window.location.origin;
const demo = createSubscriptionStoreDemoSite(canonicalOrigin);

function selectPage(pathname: string): CompiledPage {
  const normalized = normalizeRouteSlug(pathname || "/store/");
  return demo.site.pageByPath.get(normalized)
    ?? demo.site.pageByPath.get("/store/")
    ?? demo.site.pages[0];
}

function pricingSectionFor(page: CompiledPage): PricingSection | undefined {
  return page.sections.find((section): section is PricingSection => section.kind === "pricing");
}

function activePlansFor(page: CompiledPage): PricingPlanSpec[] {
  const pricing = pricingSectionFor(page);
  return pricing?.plans?.length ? pricing.plans : demo.commerceCatalog.plans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    summary: plan.description,
    price: `$${plan.price.amount}`,
    interval: plan.price.billingInterval,
    featureBullets: plan.featureBullets,
  }));
}

function lineTotal(amount: number, quantity: number) {
  return Number.parseFloat((amount * quantity).toFixed(2));
}

function cartTotals(lines: CommerceCartLine[]): CommerceCart["totals"] {
  const subtotalAmount = lines.reduce((sum, line) => sum + line.lineTotal.amount, 0);
  return {
    subtotal: { amount: subtotalAmount, currency: "USD" },
    total: { amount: subtotalAmount, currency: "USD" },
  };
}

function planToAddToCartInput(plan: PricingPlanSpec): AddToCartInput {
  const matchedPlan = demo.commerceCatalog.plans.find((item) => item.id === plan.id) ?? demo.commerceCatalog.plans[0];
  return {
    product: demo.commerceCatalog.product,
    plan: matchedPlan,
    quantity: 1,
    metadata: {
      source: "subscription-store-demo",
    },
  };
}

function DemoApp() {
  const [currentPath, setCurrentPath] = useState(() => normalizeRouteSlug(window.location.pathname || "/store/"));
  const [cart, setCart] = useState<CommerceCart>({
    lines: [],
    itemCount: 0,
    totals: {
      subtotal: { amount: 0, currency: "USD" },
      total: { amount: 0, currency: "USD" },
    },
  });
  const [checkoutResult, setCheckoutResult] = useState<CheckoutResult | null>(null);

  const page = selectPage(currentPath);
  const graph = buildLanderJsonLdGraph(demo.site, page);
  const plans = activePlansFor(page);
  const isPricingPage = page.kind === "pricing";

  useEffect(() => {
    const syncPath = () => {
      startTransition(() => {
        setCurrentPath(normalizeRouteSlug(window.location.pathname));
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      const nextPath = normalizeRouteSlug(url.pathname);
      if (nextPath === currentPath) return;

      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
      startTransition(() => {
        setCurrentPath(nextPath);
      });
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", syncPath);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", syncPath);
      document.removeEventListener("click", handleClick);
    };
  }, [currentPath]);

  const adapter = {
    addToCart(input: AddToCartInput) {
      setCheckoutResult(null);
      setCart((current) => {
        const quantity = input.quantity ?? 1;
        const plan = input.plan ?? demo.commerceCatalog.plans[0];
        const lineId = `${input.product.id}:${plan?.id ?? "default"}`;
        const existing = current.lines.find((line) => line.id === lineId);
        const amount = plan?.price.amount ?? 0;
        const nextLines = existing
          ? current.lines.map((line) => line.id === lineId ? {
              ...line,
              quantity: line.quantity + quantity,
              lineTotal: {
                ...line.lineTotal,
                amount: lineTotal(amount, line.quantity + quantity),
              },
            } : line)
          : [...current.lines, {
              id: lineId,
              productId: input.product.id,
              productName: input.product.name,
              planId: plan?.id,
              planName: plan?.name,
              quantity,
              unitPrice: plan?.price ?? { amount: 0, currency: "USD", billingInterval: "monthly" },
              lineTotal: {
                amount: lineTotal(amount, quantity),
                currency: plan?.price.currency ?? "USD",
                billingInterval: plan?.price.billingInterval,
              },
              href: input.product.href,
              metadata: input.metadata,
            }];
        return {
          lines: nextLines,
          itemCount: nextLines.reduce((sum, line) => sum + line.quantity, 0),
          totals: cartTotals(nextLines),
        };
      });
    },
    removeCartLine(lineId: string) {
      setCheckoutResult(null);
      setCart((current) => {
        const nextLines = current.lines.filter((line) => line.id !== lineId);
        return {
          lines: nextLines,
          itemCount: nextLines.reduce((sum, line) => sum + line.quantity, 0),
          totals: cartTotals(nextLines),
        };
      });
    },
    updateQuantity(lineId: string, quantity: number) {
      setCheckoutResult(null);
      setCart((current) => {
        if (quantity <= 0) {
          const nextLines = current.lines.filter((line) => line.id !== lineId);
          return {
            lines: nextLines,
            itemCount: nextLines.reduce((sum, line) => sum + line.quantity, 0),
            totals: cartTotals(nextLines),
          };
        }

        const nextLines = current.lines.map((line) => {
          if (line.id !== lineId) return line;
          return {
            ...line,
            quantity,
            lineTotal: {
              ...line.lineTotal,
              amount: lineTotal(line.unitPrice.amount, quantity),
            },
          };
        });

        return {
          lines: nextLines,
          itemCount: nextLines.reduce((sum, line) => sum + line.quantity, 0),
          totals: cartTotals(nextLines),
        };
      });
    },
    clearCart() {
      setCheckoutResult(null);
      setCart({
        lines: [],
        itemCount: 0,
        totals: {
          subtotal: { amount: 0, currency: "USD" },
          total: { amount: 0, currency: "USD" },
        },
      });
    },
    checkout(currentCart: CommerceCart): CheckoutResult {
      if (!currentCart.itemCount) {
        return { status: "error", message: "Add a plan before checkout." };
      }
      const names = currentCart.lines.map((line) => `${line.productName}${line.planName ? ` (${line.planName})` : ""}`).join(", ");
      return {
        status: "redirect",
        checkoutUrl: "https://checkout.example.test/markdown-store",
        message: `Pretend checkout for ${names}.`,
      };
    },
  };

  return (
    <CommerceProvider cart={cart} adapter={adapter}>
      <div className="demo-app">
        <header className="demo-header">
          <div className="demo-header__brand">
            <span className="demo-header__eyebrow">MdWrk Commerce Demo</span>
            <h1>Markdown Store storefront + cart demo</h1>
            <p>
              This example combines the subscription-store content pack, visible page rendering,
              JSON-LD output, and the opt-in commerce React package in one Docker-ready demo.
            </p>
          </div>
          <nav className="demo-header__nav" aria-label="Primary store routes">
            {subscriptionStoreHomeNavigation.related.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={normalizeRouteSlug(item.href) === currentPath ? "is-active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="demo-hero">
          <div className="demo-hero__copy">
            <p className="demo-kicker">Storefront pipeline</p>
            <h2>One compiled storefront graph now feeds visible pages, cart controls, and machine-readable metadata.</h2>
            <p>
              The store pages come from <code>@mdwrk/subscription-store-content-pack</code>, the cart controls come from
              <code> @mdwrk/lander-react-commerce</code>, and the machine-readable graph comes from
              <code> @mdwrk/lander-react-structured-data</code>.
            </p>
          </div>
          <div className="demo-hero__rail">
            <dl className="demo-stat-grid">
              <div>
                <dt>Store Pages</dt>
                <dd>{demo.pages.length}</dd>
              </div>
              <div>
                <dt>Commerce Plans</dt>
                <dd>{demo.commerceCatalog.plans.length}</dd>
              </div>
              <div>
                <dt>Cart</dt>
                <dd><CartBadge /></dd>
              </div>
            </dl>

            <section className="demo-panel">
              <header className="demo-panel__header">
                <span>Cart Runtime</span>
                <strong>In-memory cart</strong>
              </header>
              <CartLineList className="demo-cart-lines" emptyMessage="Your cart is empty. Add a plan from the pricing panel." />
              <CartSummary className="demo-cart-summary" />
              <div className="demo-cart-actions">
                <button className="demo-button demo-button--secondary" type="button" onClick={() => void adapter.clearCart()}>
                  Clear cart
                </button>
                <CheckoutButton
                  className="demo-button demo-button--primary"
                  onResult={(result) => setCheckoutResult(result)}
                />
              </div>
              {checkoutResult ? (
                <p className={checkoutResult.status === "error" ? "demo-result is-error" : "demo-result"}>
                  {checkoutResult.message ?? checkoutResult.checkoutUrl ?? checkoutResult.status}
                </p>
              ) : null}
            </section>
          </div>
        </section>

        <main className="demo-layout">
          <aside className="demo-rail">
            <section className="demo-panel">
              <header className="demo-panel__header">
                <span>Route Graph</span>
                <strong>Store pages</strong>
              </header>
              <div className="demo-route-list">
                {demo.routeNodes.map((node) => (
                  <a key={node.pageId} href={node.path} className={node.path === currentPath ? "is-active" : undefined}>
                    <strong>{node.title}</strong>
                    <small>{node.path}</small>
                    <span>{node.kind}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="demo-panel">
              <header className="demo-panel__header">
                <span>Commerce Runtime</span>
                <strong>Current offers</strong>
              </header>
              <div className="demo-plan-list">
                {plans.map((plan) => (
                  <article className={plan.featured ? "demo-plan is-featured" : "demo-plan"} key={plan.id}>
                    <div className="demo-plan__header">
                      <strong>{plan.name}</strong>
                      <span>{plan.price}{plan.interval ? `/${plan.interval}` : ""}</span>
                    </div>
                    {plan.summary ? <p>{plan.summary}</p> : null}
                    {plan.featureBullets?.length ? (
                      <ul>
                        {plan.featureBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    ) : null}
                    <AddToCartButton
                      className="demo-button demo-button--primary"
                      item={planToAddToCartInput(plan)}
                      label={isPricingPage ? `Add ${plan.name}` : `Add ${plan.name} from anywhere`}
                    />
                  </article>
                ))}
              </div>
            </section>
          </aside>

          <section className="demo-stage">
            <section className="demo-panel demo-panel--preview">
              <header className="demo-panel__header">
                <span>Visible storefront</span>
                <strong>{page.h1}</strong>
              </header>
              <div className="demo-preview">
                <LanderStructuredData site={demo.site} page={page} />
                <VisibleLanderPage page={page} />
              </div>
            </section>

            <section className="demo-panel">
              <header className="demo-panel__header">
                <span>Machine-readable output</span>
                <strong>JSON-LD graph preview</strong>
              </header>
              <pre className="demo-code-block">
                <code>{JSON.stringify(graph, null, 2)}</code>
              </pre>
            </section>
          </section>
        </main>
      </div>
    </CommerceProvider>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
);
