import React from "react";
import { ProductModel as ProductModelBase, type ProductModelProps as ProductModelBaseProps } from "./chunk-06.js";

export interface ProductModelProps extends ProductModelBaseProps {
  className?: string;
}

export function ProductModel(props: ProductModelProps) {
  return <ProductModelBase {...props} />;
}
