import React from "react";
import { Service as ServiceBase, type ServiceProps as ServiceBaseProps } from "./chunk-03.js";

export interface ServiceProps extends ServiceBaseProps {
  className?: string;
}

export function Service(props: ServiceProps) {
  return <ServiceBase {...props} />;
}
