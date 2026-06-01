import React from "react";
import { ShippingRateSettings as ShippingRateSettingsBase, type ShippingRateSettingsProps as ShippingRateSettingsBaseProps } from "./chunk-05.js";

export interface ShippingRateSettingsProps extends ShippingRateSettingsBaseProps {
  className?: string;
}

export function ShippingRateSettings(props: ShippingRateSettingsProps) {
  return <ShippingRateSettingsBase {...props} />;
}
