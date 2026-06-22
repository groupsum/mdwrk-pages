import React from "react";
import { VirtualLocation as VirtualLocationBase, type VirtualLocationProps as VirtualLocationBaseProps } from "./chunk-06.js";

export interface VirtualLocationProps extends VirtualLocationBaseProps {
  className?: string;
}

export function VirtualLocation(props: VirtualLocationProps) {
  return <VirtualLocationBase {...props} />;
}
