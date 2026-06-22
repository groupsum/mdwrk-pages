import React from "react";
import { Integer as IntegerBase, type IntegerProps as IntegerBaseProps } from "./chunk-04.js";

export interface IntegerProps extends IntegerBaseProps {
  className?: string;
}

export function Integer(props: IntegerProps) {
  return <IntegerBase {...props} />;
}
