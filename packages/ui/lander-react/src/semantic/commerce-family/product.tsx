import React from "react";
import { Product as ProductBase, type ProductProps as ProductBaseProps } from "./chunk-01.js";

export interface ProductProps extends ProductBaseProps {
  className?: string;
}

export function Product(props: ProductProps) {
  return <ProductBase {...props} />;
}
