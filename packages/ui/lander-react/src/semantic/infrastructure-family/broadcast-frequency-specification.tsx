import React from "react";
import { BroadcastFrequencySpecification as BroadcastFrequencySpecificationBase, type BroadcastFrequencySpecificationProps as BroadcastFrequencySpecificationBaseProps } from "./chunk-01.js";

export interface BroadcastFrequencySpecificationProps extends BroadcastFrequencySpecificationBaseProps {
  className?: string;
}

export function BroadcastFrequencySpecification(props: BroadcastFrequencySpecificationProps) {
  return <BroadcastFrequencySpecificationBase {...props} />;
}
