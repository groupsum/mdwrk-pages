import React from "react";
import { HealthPlanNetwork as HealthPlanNetworkBase, type HealthPlanNetworkProps as HealthPlanNetworkBaseProps } from "./chunk-06.js";

export interface HealthPlanNetworkProps extends HealthPlanNetworkBaseProps {
  className?: string;
}

export function HealthPlanNetwork(props: HealthPlanNetworkProps) {
  return <HealthPlanNetworkBase {...props} />;
}
