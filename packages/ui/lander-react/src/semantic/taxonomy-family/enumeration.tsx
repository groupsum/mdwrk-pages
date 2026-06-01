import React from "react";
import { Enumeration as EnumerationBase, type EnumerationProps as EnumerationBaseProps } from "./chunk-04.js";

export interface EnumerationProps extends EnumerationBaseProps {
  className?: string;
}

export function Enumeration(props: EnumerationProps) {
  return <EnumerationBase {...props} />;
}
