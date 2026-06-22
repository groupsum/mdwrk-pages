import React from "react";
import { EnergyConsumptionDetails as EnergyConsumptionDetailsBase, type EnergyConsumptionDetailsProps as EnergyConsumptionDetailsBaseProps } from "./chunk-05.js";

export interface EnergyConsumptionDetailsProps extends EnergyConsumptionDetailsBaseProps {
  className?: string;
}

export function EnergyConsumptionDetails(props: EnergyConsumptionDetailsProps) {
  return <EnergyConsumptionDetailsBase {...props} />;
}
