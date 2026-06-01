import React from "react";
import { CreativeWork as CreativeWorkBase, type CreativeWorkProps as CreativeWorkBaseProps } from "./chunk-03.js";

export interface CreativeWorkProps extends CreativeWorkBaseProps {
  className?: string;
}

export function CreativeWork(props: CreativeWorkProps) {
  return <CreativeWorkBase {...props} />;
}
