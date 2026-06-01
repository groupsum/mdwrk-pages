import React from "react";
import { DeliveryChargeSpecification as DeliveryChargeSpecificationBase, type DeliveryChargeSpecificationProps as DeliveryChargeSpecificationBaseProps } from "./chunk-03.js";

export interface DeliveryChargeSpecificationProps extends DeliveryChargeSpecificationBaseProps {
  className?: string;
}

export function DeliveryChargeSpecification(props: DeliveryChargeSpecificationProps) {
  return <DeliveryChargeSpecificationBase {...props} />;
}
