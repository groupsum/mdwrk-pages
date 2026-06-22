import React from "react";
import { ServiceChannel as ServiceChannelBase, type ServiceChannelProps as ServiceChannelBaseProps } from "./chunk-04.js";

export interface ServiceChannelProps extends ServiceChannelBaseProps {
  className?: string;
}

export function ServiceChannel(props: ServiceChannelProps) {
  return <ServiceChannelBase {...props} />;
}
