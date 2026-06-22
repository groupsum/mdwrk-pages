import React from "react";
import { Thing as ThingBase, type ThingProps as ThingBaseProps } from "./chunk-01.js";

export interface ThingProps extends ThingBaseProps {
  className?: string;
}

export function Thing(props: ThingProps) {
  return <ThingBase {...props} />;
}
