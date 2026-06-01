import React from "react";
import { MedicalCode as MedicalCodeBase, type MedicalCodeProps as MedicalCodeBaseProps } from "./chunk-04.js";

export interface MedicalCodeProps extends MedicalCodeBaseProps {
  className?: string;
}

export function MedicalCode(props: MedicalCodeProps) {
  return <MedicalCodeBase {...props} />;
}
