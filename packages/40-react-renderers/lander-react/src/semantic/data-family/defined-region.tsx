import React from "react";
import { DefinedRegion as DefinedRegionBase, type DefinedRegionProps as DefinedRegionBaseProps } from "./chunk-02.js";

export interface DefinedRegionProps extends DefinedRegionBaseProps {
  className?: string;
}

export function DefinedRegion(props: DefinedRegionProps) {
  return <DefinedRegionBase {...props} />;
}
