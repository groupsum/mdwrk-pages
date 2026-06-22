import React from "react";
import { MedicalConditionStage as MedicalConditionStageBase, type MedicalConditionStageProps as MedicalConditionStageBaseProps } from "./chunk-02.js";

export interface MedicalConditionStageProps extends MedicalConditionStageBaseProps {
  className?: string;
}

export function MedicalConditionStage(props: MedicalConditionStageProps) {
  return <MedicalConditionStageBase {...props} />;
}
