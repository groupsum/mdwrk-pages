import React from "react";
import { ProductGroup as ProductGroupBase, type ProductGroupProps as ProductGroupBaseProps } from "./chunk-01.js";

export interface ProductGroupProps extends ProductGroupBaseProps {
  className?: string;
}

export function ProductGroup(props: ProductGroupProps) {
  return <ProductGroupBase {...props} />;
}
