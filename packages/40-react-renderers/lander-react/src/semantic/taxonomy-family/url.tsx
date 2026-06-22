import React from "react";
import { URL as URLBase, type URLProps as URLBaseProps } from "./chunk-08.js";

export interface URLProps extends URLBaseProps {
  className?: string;
}

export function URL(props: URLProps) {
  return <URLBase {...props} />;
}
