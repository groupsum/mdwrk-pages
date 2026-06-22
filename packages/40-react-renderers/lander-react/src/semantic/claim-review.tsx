import React from "react";
import { ClaimReview as ClaimReviewBase, type ClaimReviewProps as ClaimReviewBaseProps } from "./article-family.js";

export interface ClaimReviewProps extends ClaimReviewBaseProps {
  className?: string;
}

export function ClaimReview(props: ClaimReviewProps) {
  return <ClaimReviewBase {...props} />;
}
