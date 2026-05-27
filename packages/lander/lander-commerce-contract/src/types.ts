export type BillingInterval =
  | "one_time"
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "yearly";

export interface CommerceMoney {
  amount: number;
  currency: string;
  billingInterval?: BillingInterval;
}

export interface CommercePlan {
  id: string;
  name: string;
  description?: string;
  price: CommerceMoney;
  featureBullets?: string[];
  metadata?: Record<string, unknown>;
}

export interface CommerceProduct {
  id: string;
  name: string;
  description?: string;
  href?: string;
  sku?: string;
  imageSrc?: string;
  imageAlt?: string;
  plans?: CommercePlan[];
  metadata?: Record<string, unknown>;
}

export interface AddToCartInput {
  product: CommerceProduct;
  plan?: CommercePlan;
  quantity?: number;
  metadata?: Record<string, unknown>;
}

export interface CommerceCartLine {
  id: string;
  productId: string;
  productName: string;
  planId?: string;
  planName?: string;
  quantity: number;
  unitPrice: CommerceMoney;
  lineTotal: CommerceMoney;
  href?: string;
  metadata?: Record<string, unknown>;
}

export interface CommerceCartTotals {
  subtotal: CommerceMoney;
  taxes?: CommerceMoney;
  discounts?: CommerceMoney;
  total: CommerceMoney;
}

export interface CommerceCart {
  lines: CommerceCartLine[];
  itemCount: number;
  totals: CommerceCartTotals;
}

export interface CheckoutIntent {
  successUrl?: string;
  cancelUrl?: string;
  customerId?: string;
  customerEmail?: string;
  metadata?: Record<string, unknown>;
}

export type CheckoutStatus = "complete" | "pending" | "redirect" | "error";

export interface CheckoutResult {
  status: CheckoutStatus;
  checkoutUrl?: string;
  orderId?: string;
  message?: string;
}

export interface CommerceRuntimeAdapter {
  addToCart: (input: AddToCartInput) => void | Promise<void>;
  removeCartLine: (lineId: string) => void | Promise<void>;
  clearCart: () => void | Promise<void>;
  checkout: (cart: CommerceCart, intent?: CheckoutIntent) => CheckoutResult | Promise<CheckoutResult>;
  updateQuantity?: (lineId: string, quantity: number) => void | Promise<void>;
}
