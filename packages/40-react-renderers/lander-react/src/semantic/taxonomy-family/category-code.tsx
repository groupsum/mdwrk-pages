import React from "react";
import { CategoryCode as CategoryCodeBase, type CategoryCodeProps as CategoryCodeBaseProps } from "./chunk-01.js";

export interface CategoryCodeProps extends CategoryCodeBaseProps {
  className?: string;
}

export function CategoryCode(props: CategoryCodeProps) {
  return <CategoryCodeBase {...props} />;
}
