import React from "react";
import { ServicePeriod as ServicePeriodBase, type ServicePeriodProps as ServicePeriodBaseProps } from "./chunk-04.js";

export interface ServicePeriodProps extends ServicePeriodBaseProps {
  className?: string;
}

export function ServicePeriod(props: ServicePeriodProps) {
  return <ServicePeriodBase {...props} />;
}
