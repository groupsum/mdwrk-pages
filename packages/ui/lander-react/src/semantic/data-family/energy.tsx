import React from "react";
import { Energy as EnergyBase, type EnergyProps as EnergyBaseProps } from "./chunk-04.js";

export interface EnergyProps extends EnergyBaseProps {
  className?: string;
}

export function Energy(props: EnergyProps) {
  return <EnergyBase {...props} />;
}
