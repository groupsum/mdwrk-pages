import React from "react";
import { MedicalSign as MedicalSignBase, type MedicalSignProps as MedicalSignBaseProps } from "./chunk-03.js";

export interface MedicalSignProps extends MedicalSignBaseProps {
  className?: string;
}

export function MedicalSign(props: MedicalSignProps) {
  return <MedicalSignBase {...props} />;
}
