import React from "react";
import { JobPosting as JobPostingBase, type JobPostingProps as JobPostingBaseProps } from "./chunk-04.js";

export interface JobPostingProps extends JobPostingBaseProps {
  className?: string;
}

export function JobPosting(props: JobPostingProps) {
  return <JobPostingBase {...props} />;
}
