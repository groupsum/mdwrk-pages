import React from "react";
import { Trip as TripBase, type TripProps as TripBaseProps } from "./chunk-06.js";

export interface TripProps extends TripBaseProps {
  className?: string;
}

export function Trip(props: TripProps) {
  return <TripBase {...props} />;
}
