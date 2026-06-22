import React from "react";
import { Movie as MovieBase, type MovieProps as MovieBaseProps } from "./chunk-03.js";

export interface MovieProps extends MovieBaseProps {
  className?: string;
}

export function Movie(props: MovieProps) {
  return <MovieBase {...props} />;
}
