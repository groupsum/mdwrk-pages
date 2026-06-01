import React from "react";
import { HealthPlanFormulary as HealthPlanFormularyBase, type HealthPlanFormularyProps as HealthPlanFormularyBaseProps } from "./chunk-06.js";

export interface HealthPlanFormularyProps extends HealthPlanFormularyBaseProps {
  className?: string;
}

export function HealthPlanFormulary(props: HealthPlanFormularyProps) {
  return <HealthPlanFormularyBase {...props} />;
}
