import React from "react";
import { OpeningHoursSpecification as OpeningHoursSpecificationBase, type OpeningHoursSpecificationProps as OpeningHoursSpecificationBaseProps } from "./chunk-01.js";

export interface OpeningHoursSpecificationProps extends OpeningHoursSpecificationBaseProps {
  className?: string;
}

export function OpeningHoursSpecification(props: OpeningHoursSpecificationProps) {
  return <OpeningHoursSpecificationBase {...props} />;
}
