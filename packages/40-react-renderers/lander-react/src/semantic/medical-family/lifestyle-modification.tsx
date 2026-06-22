import React from "react";
import { LifestyleModification as LifestyleModificationBase, type LifestyleModificationProps as LifestyleModificationBaseProps } from "./chunk-04.js";

export interface LifestyleModificationProps extends LifestyleModificationBaseProps {
  className?: string;
}

export function LifestyleModification(props: LifestyleModificationProps) {
  return <LifestyleModificationBase {...props} />;
}
