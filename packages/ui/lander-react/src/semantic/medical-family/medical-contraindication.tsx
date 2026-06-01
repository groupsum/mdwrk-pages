import React from "react";
import { MedicalContraindication as MedicalContraindicationBase, type MedicalContraindicationProps as MedicalContraindicationBaseProps } from "./chunk-03.js";

export interface MedicalContraindicationProps extends MedicalContraindicationBaseProps {
  className?: string;
}

export function MedicalContraindication(props: MedicalContraindicationProps) {
  return <MedicalContraindicationBase {...props} />;
}
