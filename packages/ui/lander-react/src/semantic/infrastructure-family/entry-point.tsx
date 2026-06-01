import React from "react";
import { EntryPoint as EntryPointBase, type EntryPointProps as EntryPointBaseProps } from "./chunk-04.js";

export interface EntryPointProps extends EntryPointBaseProps {
  className?: string;
}

export function EntryPoint(props: EntryPointProps) {
  return <EntryPointBase {...props} />;
}
