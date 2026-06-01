import React from "react";
import { ConstraintNode as ConstraintNodeBase, type ConstraintNodeProps as ConstraintNodeBaseProps } from "./chunk-02.js";

export interface ConstraintNodeProps extends ConstraintNodeBaseProps {
  className?: string;
}

export function ConstraintNode(props: ConstraintNodeProps) {
  return <ConstraintNodeBase {...props} />;
}
