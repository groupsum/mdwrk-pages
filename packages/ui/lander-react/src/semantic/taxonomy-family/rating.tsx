import React from "react";
import { Rating as RatingBase, type RatingProps as RatingBaseProps } from "./chunk-06.js";

export interface RatingProps extends RatingBaseProps {
  className?: string;
}

export function Rating(props: RatingProps) {
  return <RatingBase {...props} />;
}
