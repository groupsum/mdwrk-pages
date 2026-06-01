import React from "react";
import { XPathType as XPathTypeBase, type XPathTypeProps as XPathTypeBaseProps } from "./chunk-08.js";

export interface XPathTypeProps extends XPathTypeBaseProps {
  className?: string;
}

export function XPathType(props: XPathTypeProps) {
  return <XPathTypeBase {...props} />;
}
