import React from "react";
import { Review as ReviewBase, type ReviewProps as ReviewBaseProps } from "./chunk-01.js";

export interface ReviewProps extends ReviewBaseProps {
  className?: string;
}

export function Review(props: ReviewProps) {
  return <ReviewBase {...props} />;
}
