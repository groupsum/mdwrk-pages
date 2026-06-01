import React from "react";
import { HealthInsurancePlan as HealthInsurancePlanBase, type HealthInsurancePlanProps as HealthInsurancePlanBaseProps } from "./chunk-06.js";

export interface HealthInsurancePlanProps extends HealthInsurancePlanBaseProps {
  className?: string;
}

export function HealthInsurancePlan(props: HealthInsurancePlanProps) {
  return <HealthInsurancePlanBase {...props} />;
}
