import React from "react";
import { MonetaryAmount as MonetaryAmountBase, type MonetaryAmountProps as MonetaryAmountBaseProps } from "./chunk-05.js";

export interface MonetaryAmountProps extends MonetaryAmountBaseProps {
  className?: string;
}

export function MonetaryAmount(props: MonetaryAmountProps) {
  return <MonetaryAmountBase {...props} />;
}
