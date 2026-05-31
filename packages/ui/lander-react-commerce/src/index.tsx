import React, { createContext, useContext, useState } from "react";
import type {
  AddToCartInput,
  CheckoutIntent,
  CheckoutResult,
  CommerceCart,
  CommerceCartLine,
  CommerceRuntimeAdapter,
} from "@mdwrk/lander-commerce-contract";
import { LANDER_REACT_COMMERCE_VERSION } from "./version.js";

export { LANDER_REACT_COMMERCE_VERSION };
export type {
  AddToCartInput,
  CheckoutIntent,
  CheckoutResult,
  CommerceCart,
  CommerceCartLine,
  CommerceRuntimeAdapter,
} from "@mdwrk/lander-commerce-contract";

interface CommerceContextValue {
  cart: CommerceCart;
  adapter: CommerceRuntimeAdapter;
}

const emptyCart: CommerceCart = {
  lines: [],
  itemCount: 0,
  totals: {
    subtotal: { amount: 0, currency: "USD" },
    total: { amount: 0, currency: "USD" },
  },
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

export interface CommerceProviderProps {
  cart?: CommerceCart;
  adapter: CommerceRuntimeAdapter;
  children: React.ReactNode;
}

export function CommerceProvider({ cart = emptyCart, adapter, children }: CommerceProviderProps) {
  return (
    <CommerceContext.Provider value={{ cart, adapter }}>
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerce() {
  const value = useContext(CommerceContext);
  if (!value) {
    throw new Error("useCommerce must be used within a CommerceProvider");
  }
  return value;
}

function formatMoney(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export interface AddToCartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: AddToCartInput;
  label?: string;
}

export function AddToCartButton({ item, label = "Add to Cart", onClick, ...props }: AddToCartButtonProps) {
  const { adapter } = useCommerce();
  const [pending, setPending] = useState(false);

  return (
    <button
      type="button"
      {...props}
      onClick={async (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        setPending(true);
        try {
          await adapter.addToCart(item);
        } finally {
          setPending(false);
        }
      }}
      disabled={props.disabled || pending}
    >
      {pending ? "Adding..." : label}
    </button>
  );
}

export interface CartBadgeProps {
  className?: string;
  label?: string;
}

export function CartBadge({ className, label = "Cart" }: CartBadgeProps) {
  const { cart } = useCommerce();
  return (
    <span className={className}>
      {label} ({cart.itemCount})
    </span>
  );
}

export interface CartLineListProps {
  className?: string;
  emptyMessage?: string;
}

export function CartLineList({ className, emptyMessage = "Your cart is empty." }: CartLineListProps) {
  const { cart, adapter } = useCommerce();

  if (!cart.lines.length) {
    return <p className={className}>{emptyMessage}</p>;
  }

  return (
    <ul className={className}>
      {cart.lines.map((line) => (
        <li key={line.id}>
          <div>
            <strong>{line.productName}</strong>
            {line.planName ? <span> - {line.planName}</span> : null}
          </div>
          <div>
            <span>Qty {line.quantity}</span>
            <span> {" · "} {formatMoney(line.lineTotal.amount, line.lineTotal.currency)}</span>
          </div>
          {adapter.updateQuantity ? (
            <div>
              <button type="button" onClick={() => void adapter.updateQuantity?.(line.id, line.quantity - 1)}>
                -
              </button>
              <button type="button" onClick={() => void adapter.updateQuantity?.(line.id, line.quantity + 1)}>
                +
              </button>
              <button type="button" onClick={() => void adapter.removeCartLine(line.id)}>
                Remove
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => void adapter.removeCartLine(line.id)}>
              Remove
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export interface CartSummaryProps {
  className?: string;
  title?: string;
}

export function CartSummary({ className, title = "Cart summary" }: CartSummaryProps) {
  const { cart } = useCommerce();
  return (
    <section className={className} aria-label={title}>
      <h2>{title}</h2>
      <p>Items: {cart.itemCount}</p>
      <p>Subtotal: {formatMoney(cart.totals.subtotal.amount, cart.totals.subtotal.currency)}</p>
      {cart.totals.taxes ? <p>Taxes: {formatMoney(cart.totals.taxes.amount, cart.totals.taxes.currency)}</p> : null}
      {cart.totals.discounts ? <p>Discounts: {formatMoney(cart.totals.discounts.amount, cart.totals.discounts.currency)}</p> : null}
      <p>Total: {formatMoney(cart.totals.total.amount, cart.totals.total.currency)}</p>
    </section>
  );
}

export interface CheckoutButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: CheckoutIntent;
  label?: string;
  onResult?: (result: CheckoutResult) => void;
}

export function CheckoutButton({ intent, label = "Checkout", onClick, onResult, ...props }: CheckoutButtonProps) {
  const { cart, adapter } = useCommerce();
  const [pending, setPending] = useState(false);

  return (
    <button
      type="button"
      {...props}
      onClick={async (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        setPending(true);
        try {
          const result = await adapter.checkout(cart, intent);
          onResult?.(result);
        } finally {
          setPending(false);
        }
      }}
      disabled={props.disabled || pending || cart.itemCount === 0}
    >
      {pending ? "Processing..." : label}
    </button>
  );
}
