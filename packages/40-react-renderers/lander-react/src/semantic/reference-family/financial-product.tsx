import React from "react";
import { FinancialProduct as FinancialProductBase, type FinancialProductProps as FinancialProductBaseProps } from "./chunk-04.js";

export interface FinancialProductProps extends FinancialProductBaseProps {
  className?: string;
}

export function FinancialProduct(props: FinancialProductProps) {
  return <FinancialProductBase {...props} />;
}
