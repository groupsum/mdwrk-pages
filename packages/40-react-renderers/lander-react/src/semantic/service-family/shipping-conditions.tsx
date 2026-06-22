import React from "react";
import { ShippingConditions as ShippingConditionsBase, type ShippingConditionsProps as ShippingConditionsBaseProps } from "./chunk-04.js";

export interface ShippingConditionsProps extends ShippingConditionsBaseProps {
  className?: string;
}

export function ShippingConditions(props: ShippingConditionsProps) {
  return <ShippingConditionsBase {...props} />;
}
