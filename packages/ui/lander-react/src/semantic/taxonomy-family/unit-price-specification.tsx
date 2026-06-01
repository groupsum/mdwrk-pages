import React from "react";
import { UnitPriceSpecification as UnitPriceSpecificationBase, type UnitPriceSpecificationProps as UnitPriceSpecificationBaseProps } from "./chunk-03.js";

export interface UnitPriceSpecificationProps extends UnitPriceSpecificationBaseProps {
  className?: string;
}

export function UnitPriceSpecification(props: UnitPriceSpecificationProps) {
  return <UnitPriceSpecificationBase {...props} />;
}
