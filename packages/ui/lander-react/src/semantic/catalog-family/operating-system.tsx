import React from "react";
import { OperatingSystem as OperatingSystemBase, type OperatingSystemProps as OperatingSystemBaseProps } from "./chunk-03.js";

export interface OperatingSystemProps extends OperatingSystemBaseProps {
  className?: string;
}

export function OperatingSystem(props: OperatingSystemProps) {
  return <OperatingSystemBase {...props} />;
}
