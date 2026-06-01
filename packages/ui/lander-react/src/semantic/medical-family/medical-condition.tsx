import React from "react";
import { MedicalCondition as MedicalConditionBase, type MedicalConditionProps as MedicalConditionBaseProps } from "./chunk-02.js";

export interface MedicalConditionProps extends MedicalConditionBaseProps {
  className?: string;
}

export function MedicalCondition(props: MedicalConditionProps) {
  return <MedicalConditionBase {...props} />;
}
