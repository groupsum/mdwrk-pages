import React from "react";
import { Mass as MassBase, type MassProps as MassBaseProps } from "./chunk-05.js";

export interface MassProps extends MassBaseProps {
  className?: string;
}

export function Mass(props: MassProps) {
  return <MassBase {...props} />;
}
