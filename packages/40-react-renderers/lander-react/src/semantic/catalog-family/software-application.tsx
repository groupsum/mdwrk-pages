import React from "react";
import { SoftwareApplication as SoftwareApplicationBase, type SoftwareApplicationProps as SoftwareApplicationBaseProps } from "./chunk-02.js";

export interface SoftwareApplicationProps extends SoftwareApplicationBaseProps {
  className?: string;
}

export function SoftwareApplication(props: SoftwareApplicationProps) {
  return <SoftwareApplicationBase {...props} />;
}
