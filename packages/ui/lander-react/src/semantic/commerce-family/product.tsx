import React from "react";
import { Product as ProductBase, type ProductProps as ProductBaseProps } from "./chunk-01.js";

export interface ProductProps extends ProductBaseProps {
  className?: string;
}

export function Product(props: ProductProps) {
  return <ProductBase {...props} />;
}

(Product as typeof Product & { toStructuredData: (props: ProductProps) => unknown }).toStructuredData = (
  ProductBase as typeof ProductBase & { toStructuredData: (props: ProductBaseProps) => unknown }
).toStructuredData;
