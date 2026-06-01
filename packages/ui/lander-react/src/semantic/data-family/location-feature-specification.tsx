import React from "react";
import { LocationFeatureSpecification as LocationFeatureSpecificationBase, type LocationFeatureSpecificationProps as LocationFeatureSpecificationBaseProps } from "./chunk-03.js";

export interface LocationFeatureSpecificationProps extends LocationFeatureSpecificationBaseProps {
  className?: string;
}

export function LocationFeatureSpecification(props: LocationFeatureSpecificationProps) {
  return <LocationFeatureSpecificationBase {...props} />;
}
