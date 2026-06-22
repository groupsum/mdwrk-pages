import React from "react";
import { AggregateRating as AggregateRatingBase, type AggregateRatingProps as AggregateRatingBaseProps } from "./chunk-02.js";

export interface AggregateRatingProps extends AggregateRatingBaseProps {
  className?: string;
}

export function AggregateRating(props: AggregateRatingProps) {
  return <AggregateRatingBase {...props} />;
}
