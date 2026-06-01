import React from "react";
import { MedicalRiskFactor as MedicalRiskFactorBase, type MedicalRiskFactorProps as MedicalRiskFactorBaseProps } from "./chunk-03.js";

export interface MedicalRiskFactorProps extends MedicalRiskFactorBaseProps {
  className?: string;
}

export function MedicalRiskFactor(props: MedicalRiskFactorProps) {
  return <MedicalRiskFactorBase {...props} />;
}
