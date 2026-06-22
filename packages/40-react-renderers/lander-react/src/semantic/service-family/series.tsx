import React from "react";
import { Series as SeriesBase, type SeriesProps as SeriesBaseProps } from "./chunk-03.js";

export interface SeriesProps extends SeriesBaseProps {
  className?: string;
}

export function Series(props: SeriesProps) {
  return <SeriesBase {...props} />;
}
