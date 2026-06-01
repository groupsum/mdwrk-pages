import React from "react";
import { MedicalSignOrSymptom as MedicalSignOrSymptomBase, type MedicalSignOrSymptomProps as MedicalSignOrSymptomBaseProps } from "./chunk-04.js";

export interface MedicalSignOrSymptomProps extends MedicalSignOrSymptomBaseProps {
  className?: string;
}

export function MedicalSignOrSymptom(props: MedicalSignOrSymptomProps) {
  return <MedicalSignOrSymptomBase {...props} />;
}
