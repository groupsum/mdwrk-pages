import React from "react";
import { Substance as SubstanceBase, type SubstanceProps as SubstanceBaseProps } from "./chunk-07.js";

export interface SubstanceProps extends SubstanceBaseProps {
  className?: string;
}

export function Substance(props: SubstanceProps) {
  return <SubstanceBase {...props} />;
}
