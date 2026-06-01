import React from "react";
import { MedicalDevice as MedicalDeviceBase, type MedicalDeviceProps as MedicalDeviceBaseProps } from "./chunk-05.js";

export interface MedicalDeviceProps extends MedicalDeviceBaseProps {
  className?: string;
}

export function MedicalDevice(props: MedicalDeviceProps) {
  return <MedicalDeviceBase {...props} />;
}
