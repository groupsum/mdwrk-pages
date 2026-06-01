import React from "react";
import { LocalBusiness as LocalBusinessBase, type LocalBusinessProps as LocalBusinessBaseProps } from "./chunk-02.js";

export interface LocalBusinessProps extends LocalBusinessBaseProps {
  className?: string;
}

export function LocalBusiness(props: LocalBusinessProps) {
  return <LocalBusinessBase {...props} />;
}
