import React from "react";
import { Grant as GrantBase, type GrantProps as GrantBaseProps } from "./chunk-05.js";

export interface GrantProps extends GrantBaseProps {
  className?: string;
}

export function Grant(props: GrantProps) {
  return <GrantBase {...props} />;
}
