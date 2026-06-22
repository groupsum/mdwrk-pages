import React from "react";
import { GeospatialGeometry as GeospatialGeometryBase, type GeospatialGeometryProps as GeospatialGeometryBaseProps } from "./chunk-05.js";

export interface GeospatialGeometryProps extends GeospatialGeometryBaseProps {
  className?: string;
}

export function GeospatialGeometry(props: GeospatialGeometryProps) {
  return <GeospatialGeometryBase {...props} />;
}
