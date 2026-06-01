import React from "react";
import { DefinedTerm as DefinedTermBase, type DefinedTermProps as DefinedTermBaseProps } from "./chunk-02.js";

export interface DefinedTermProps extends DefinedTermBaseProps {
  className?: string;
}

export function DefinedTerm(props: DefinedTermProps) {
  return <DefinedTermBase {...props} />;
}
