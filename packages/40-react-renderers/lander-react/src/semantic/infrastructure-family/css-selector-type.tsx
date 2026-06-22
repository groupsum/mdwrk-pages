import React from "react";
import { CssSelectorType as CssSelectorTypeBase, type CssSelectorTypeProps as CssSelectorTypeBaseProps } from "./chunk-03.js";

export interface CssSelectorTypeProps extends CssSelectorTypeBaseProps {
  className?: string;
}

export function CssSelectorType(props: CssSelectorTypeProps) {
  return <CssSelectorTypeBase {...props} />;
}
