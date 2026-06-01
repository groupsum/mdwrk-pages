import React from "react";
import { StructuredValue as StructuredValueBase, type StructuredValueProps as StructuredValueBaseProps } from "./chunk-03.js";

export interface StructuredValueProps extends StructuredValueBaseProps {
  className?: string;
}

export function StructuredValue(props: StructuredValueProps) {
  return <StructuredValueBase {...props} />;
}
