import React from "react";
import { Duration as DurationBase, type DurationProps as DurationBaseProps } from "./chunk-04.js";

export interface DurationProps extends DurationBaseProps {
  className?: string;
}

export function Duration(props: DurationProps) {
  return <DurationBase {...props} />;
}
