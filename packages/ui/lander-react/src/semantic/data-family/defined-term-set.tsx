import React from "react";
import { DefinedTermSet as DefinedTermSetBase, type DefinedTermSetProps as DefinedTermSetBaseProps } from "./chunk-03.js";

export interface DefinedTermSetProps extends DefinedTermSetBaseProps {
  className?: string;
}

export function DefinedTermSet(props: DefinedTermSetProps) {
  return <DefinedTermSetBase {...props} />;
}
