import React from "react";
import { Distance as DistanceBase, type DistanceProps as DistanceBaseProps } from "./chunk-03.js";

export interface DistanceProps extends DistanceBaseProps {
  className?: string;
}

export function Distance(props: DistanceProps) {
  return <DistanceBase {...props} />;
}
