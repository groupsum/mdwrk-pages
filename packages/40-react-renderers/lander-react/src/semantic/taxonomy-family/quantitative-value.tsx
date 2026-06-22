import React from "react";
import { QuantitativeValue as QuantitativeValueBase, type QuantitativeValueProps as QuantitativeValueBaseProps } from "./chunk-05.js";

export interface QuantitativeValueProps extends QuantitativeValueBaseProps {
  className?: string;
}

export function QuantitativeValue(props: QuantitativeValueProps) {
  return <QuantitativeValueBase {...props} />;
}
