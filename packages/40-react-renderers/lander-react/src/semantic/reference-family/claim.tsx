import React from "react";
import { Claim as ClaimBase, type ClaimProps as ClaimBaseProps } from "./chunk-01.js";

export interface ClaimProps extends ClaimBaseProps {
  className?: string;
}

export function Claim(props: ClaimProps) {
  return <ClaimBase {...props} />;
}
