import React from "react";
import { ShippingService as ShippingServiceBase, type ShippingServiceProps as ShippingServiceBaseProps } from "./chunk-05.js";

export interface ShippingServiceProps extends ShippingServiceBaseProps {
  className?: string;
}

export function ShippingService(props: ShippingServiceProps) {
  return <ShippingServiceBase {...props} />;
}
