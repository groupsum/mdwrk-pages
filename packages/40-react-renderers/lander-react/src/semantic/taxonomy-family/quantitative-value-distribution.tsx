import React from "react";
import { QuantitativeValueDistribution as QuantitativeValueDistributionBase, type QuantitativeValueDistributionProps as QuantitativeValueDistributionBaseProps } from "./chunk-05.js";

export interface QuantitativeValueDistributionProps extends QuantitativeValueDistributionBaseProps {
  className?: string;
}

export function QuantitativeValueDistribution(props: QuantitativeValueDistributionProps) {
  return <QuantitativeValueDistributionBase {...props} />;
}
