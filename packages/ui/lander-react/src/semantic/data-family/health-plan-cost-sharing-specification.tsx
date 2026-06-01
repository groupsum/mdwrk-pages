import React from "react";
import { HealthPlanCostSharingSpecification as HealthPlanCostSharingSpecificationBase, type HealthPlanCostSharingSpecificationProps as HealthPlanCostSharingSpecificationBaseProps } from "./chunk-05.js";

export interface HealthPlanCostSharingSpecificationProps extends HealthPlanCostSharingSpecificationBaseProps {
  className?: string;
}

export function HealthPlanCostSharingSpecification(props: HealthPlanCostSharingSpecificationProps) {
  return <HealthPlanCostSharingSpecificationBase {...props} />;
}
