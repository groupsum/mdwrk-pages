import React from "react";
import { SpeakableSpecification as SpeakableSpecificationBase, type SpeakableSpecificationProps as SpeakableSpecificationBaseProps } from "./chunk-04.js";

export interface SpeakableSpecificationProps extends SpeakableSpecificationBaseProps {
  className?: string;
}

export function SpeakableSpecification(props: SpeakableSpecificationProps) {
  return <SpeakableSpecificationBase {...props} />;
}
