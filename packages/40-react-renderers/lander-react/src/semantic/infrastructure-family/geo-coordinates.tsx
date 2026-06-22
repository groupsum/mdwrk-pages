import React from "react";
import { GeoCoordinates as GeoCoordinatesBase, type GeoCoordinatesProps as GeoCoordinatesBaseProps } from "./chunk-04.js";

export interface GeoCoordinatesProps extends GeoCoordinatesBaseProps {
  className?: string;
}

export function GeoCoordinates(props: GeoCoordinatesProps) {
  return <GeoCoordinatesBase {...props} />;
}
