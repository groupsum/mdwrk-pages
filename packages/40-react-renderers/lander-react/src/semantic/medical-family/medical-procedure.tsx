import React from "react";
import { MedicalProcedure as MedicalProcedureBase, type MedicalProcedureProps as MedicalProcedureBaseProps } from "./chunk-06.js";

export interface MedicalProcedureProps extends MedicalProcedureBaseProps {
  className?: string;
}

export function MedicalProcedure(props: MedicalProcedureProps) {
  return <MedicalProcedureBase {...props} />;
}
