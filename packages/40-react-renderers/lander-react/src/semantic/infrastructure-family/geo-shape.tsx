import React from "react";
import { GeoShape as GeoShapeBase, type GeoShapeProps as GeoShapeBaseProps } from "./chunk-04.js";

export interface GeoShapeProps extends GeoShapeBaseProps {
  className?: string;
}

export function GeoShape(props: GeoShapeProps) {
  return <GeoShapeBase {...props} />;
}
