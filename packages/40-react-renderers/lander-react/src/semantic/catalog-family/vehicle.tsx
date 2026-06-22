import React from "react";
import { Vehicle as VehicleBase, type VehicleProps as VehicleBaseProps } from "./chunk-04.js";

export interface VehicleProps extends VehicleBaseProps {
  className?: string;
}

export function Vehicle(props: VehicleProps) {
  return <VehicleBase {...props} />;
}
