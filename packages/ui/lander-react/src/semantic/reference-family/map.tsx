import React from "react";
import { Map as MapBase, type MapProps as MapBaseProps } from "./chunk-06.js";

export interface MapProps extends MapBaseProps {
  className?: string;
}

export function Map(props: MapProps) {
  return <MapBase {...props} />;
}
