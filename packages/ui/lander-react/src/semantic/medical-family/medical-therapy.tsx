import React from "react";
import { MedicalTherapy as MedicalTherapyBase, type MedicalTherapyProps as MedicalTherapyBaseProps } from "./chunk-07.js";

export interface MedicalTherapyProps extends MedicalTherapyBaseProps {
  className?: string;
}

export function MedicalTherapy(props: MedicalTherapyProps) {
  return <MedicalTherapyBase {...props} />;
}
