import React from "react";
import { MedicalCause as MedicalCauseBase, type MedicalCauseProps as MedicalCauseBaseProps } from "./chunk-02.js";

export interface MedicalCauseProps extends MedicalCauseBaseProps {
  className?: string;
}

export function MedicalCause(props: MedicalCauseProps) {
  return <MedicalCauseBase {...props} />;
}
