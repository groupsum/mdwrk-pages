import React from "react";
import { Property as PropertyBase, type PropertyProps as PropertyBaseProps } from "./chunk-07.js";

export interface PropertyProps extends PropertyBaseProps {
  className?: string;
}

export function Property(props: PropertyProps) {
  return <PropertyBase {...props} />;
}
