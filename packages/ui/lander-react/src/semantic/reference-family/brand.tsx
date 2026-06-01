import React from "react";
import { Brand as BrandBase, type BrandProps as BrandBaseProps } from "./chunk-01.js";

export interface BrandProps extends BrandBaseProps {
  className?: string;
}

export function Brand(props: BrandProps) {
  return <BrandBase {...props} />;
}
