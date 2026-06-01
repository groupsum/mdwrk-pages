import React from "react";
import { CreativeWorkSeries as CreativeWorkSeriesBase, type CreativeWorkSeriesProps as CreativeWorkSeriesBaseProps } from "./chunk-04.js";

export interface CreativeWorkSeriesProps extends CreativeWorkSeriesBaseProps {
  className?: string;
}

export function CreativeWorkSeries(props: CreativeWorkSeriesProps) {
  return <CreativeWorkSeriesBase {...props} />;
}
