import React from "react";
import { MonetaryAmountDistribution as MonetaryAmountDistributionBase, type MonetaryAmountDistributionProps as MonetaryAmountDistributionBaseProps } from "./chunk-03.js";

export interface MonetaryAmountDistributionProps extends MonetaryAmountDistributionBaseProps {
  className?: string;
}

export function MonetaryAmountDistribution(props: MonetaryAmountDistributionProps) {
  return <MonetaryAmountDistributionBase {...props} />;
}
