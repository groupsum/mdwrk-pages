import React from "react";
import { Intangible as IntangibleBase, type IntangibleProps as IntangibleBaseProps } from "./chunk-02.js";

export interface IntangibleProps extends IntangibleBaseProps {
  className?: string;
}

export function Intangible(props: IntangibleProps) {
  return <IntangibleBase {...props} />;
}
