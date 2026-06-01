import React from "react";
import { PropertyValue as PropertyValueBase, type PropertyValueProps as PropertyValueBaseProps } from "./chunk-08.js";

export interface PropertyValueProps extends PropertyValueBaseProps {
  className?: string;
}

export function PropertyValue(props: PropertyValueProps) {
  return <PropertyValueBase {...props} />;
}
