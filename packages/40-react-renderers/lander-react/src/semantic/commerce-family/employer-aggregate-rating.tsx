import React from "react";
import { EmployerAggregateRating as EmployerAggregateRatingBase, type EmployerAggregateRatingProps as EmployerAggregateRatingBaseProps } from "./chunk-03.js";

export interface EmployerAggregateRatingProps extends EmployerAggregateRatingBaseProps {
  className?: string;
}

export function EmployerAggregateRating(props: EmployerAggregateRatingProps) {
  return <EmployerAggregateRatingBase {...props} />;
}
