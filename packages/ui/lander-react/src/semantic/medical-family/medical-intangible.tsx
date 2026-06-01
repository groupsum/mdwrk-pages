import React from "react";
import { MedicalIntangible as MedicalIntangibleBase, type MedicalIntangibleProps as MedicalIntangibleBaseProps } from "./chunk-01.js";

export interface MedicalIntangibleProps extends MedicalIntangibleBaseProps {
  className?: string;
}

export function MedicalIntangible(props: MedicalIntangibleProps) {
  return <MedicalIntangibleBase {...props} />;
}
