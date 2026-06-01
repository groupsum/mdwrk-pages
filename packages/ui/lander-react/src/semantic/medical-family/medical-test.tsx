import React from "react";
import { MedicalTest as MedicalTestBase, type MedicalTestProps as MedicalTestBaseProps } from "./chunk-06.js";

export interface MedicalTestProps extends MedicalTestBaseProps {
  className?: string;
}

export function MedicalTest(props: MedicalTestProps) {
  return <MedicalTestBase {...props} />;
}
