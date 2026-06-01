import React from "react";
import { CableOrSatelliteService as CableOrSatelliteServiceBase, type CableOrSatelliteServiceProps as CableOrSatelliteServiceBaseProps } from "./chunk-02.js";

export interface CableOrSatelliteServiceProps extends CableOrSatelliteServiceBaseProps {
  className?: string;
}

export function CableOrSatelliteService(props: CableOrSatelliteServiceProps) {
  return <CableOrSatelliteServiceBase {...props} />;
}
