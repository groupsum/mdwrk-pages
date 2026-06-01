import React from "react";
import { TherapeuticProcedure as TherapeuticProcedureBase, type TherapeuticProcedureProps as TherapeuticProcedureBaseProps } from "./chunk-08.js";

export interface TherapeuticProcedureProps extends TherapeuticProcedureBaseProps {
  className?: string;
}

export function TherapeuticProcedure(props: TherapeuticProcedureProps) {
  return <TherapeuticProcedureBase {...props} />;
}
