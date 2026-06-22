import React from "react";
import { CategoryCodeSet as CategoryCodeSetBase, type CategoryCodeSetProps as CategoryCodeSetBaseProps } from "./chunk-01.js";

export interface CategoryCodeSetProps extends CategoryCodeSetBaseProps {
  className?: string;
}

export function CategoryCodeSet(props: CategoryCodeSetProps) {
  return <CategoryCodeSetBase {...props} />;
}
