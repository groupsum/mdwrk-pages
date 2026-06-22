import React from "react";
import { MedicalStudy as MedicalStudyBase, type MedicalStudyProps as MedicalStudyBaseProps } from "./chunk-06.js";

export interface MedicalStudyProps extends MedicalStudyBaseProps {
  className?: string;
}

export function MedicalStudy(props: MedicalStudyProps) {
  return <MedicalStudyBase {...props} />;
}
