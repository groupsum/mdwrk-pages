import React from "react";
import { SoftwareSourceCode as SoftwareSourceCodeBase, type SoftwareSourceCodeProps as SoftwareSourceCodeBaseProps } from "./chunk-03.js";

export interface SoftwareSourceCodeProps extends SoftwareSourceCodeBaseProps {
  className?: string;
}

export function SoftwareSourceCode(props: SoftwareSourceCodeProps) {
  return <SoftwareSourceCodeBase {...props} />;
}
