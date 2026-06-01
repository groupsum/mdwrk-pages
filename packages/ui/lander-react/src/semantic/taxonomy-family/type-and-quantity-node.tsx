import React from "react";
import { TypeAndQuantityNode as TypeAndQuantityNodeBase, type TypeAndQuantityNodeProps as TypeAndQuantityNodeBaseProps } from "./chunk-03.js";

export interface TypeAndQuantityNodeProps extends TypeAndQuantityNodeBaseProps {
  className?: string;
}

export function TypeAndQuantityNode(props: TypeAndQuantityNodeProps) {
  return <TypeAndQuantityNodeBase {...props} />;
}
