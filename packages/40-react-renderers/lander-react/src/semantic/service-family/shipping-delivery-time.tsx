import React from "react";
import { ShippingDeliveryTime as ShippingDeliveryTimeBase, type ShippingDeliveryTimeProps as ShippingDeliveryTimeBaseProps } from "./chunk-05.js";

export interface ShippingDeliveryTimeProps extends ShippingDeliveryTimeBaseProps {
  className?: string;
}

export function ShippingDeliveryTime(props: ShippingDeliveryTimeProps) {
  return <ShippingDeliveryTimeBase {...props} />;
}
