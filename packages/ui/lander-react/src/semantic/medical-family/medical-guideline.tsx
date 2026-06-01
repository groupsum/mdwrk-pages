import React from "react";
import { MedicalGuideline as MedicalGuidelineBase, type MedicalGuidelineProps as MedicalGuidelineBaseProps } from "./chunk-05.js";

export interface MedicalGuidelineProps extends MedicalGuidelineBaseProps {
  className?: string;
}

export function MedicalGuideline(props: MedicalGuidelineProps) {
  return <MedicalGuidelineBase {...props} />;
}
