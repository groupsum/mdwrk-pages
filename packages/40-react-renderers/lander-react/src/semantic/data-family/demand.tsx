import React from "react";
import { Demand as DemandBase, type DemandProps as DemandBaseProps } from "./chunk-04.js";

export interface DemandProps extends DemandBaseProps {
  className?: string;
}

export function Demand(props: DemandProps) {
  return <DemandBase {...props} />;
}
