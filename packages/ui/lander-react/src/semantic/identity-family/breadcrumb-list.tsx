import React from "react";
import { BreadcrumbList as BreadcrumbListBase, type BreadcrumbListProps as BreadcrumbListBaseProps } from "./chunk-03.js";

export interface BreadcrumbListProps extends BreadcrumbListBaseProps {
  className?: string;
}

export function BreadcrumbList(props: BreadcrumbListProps) {
  return <BreadcrumbListBase {...props} />;
}
