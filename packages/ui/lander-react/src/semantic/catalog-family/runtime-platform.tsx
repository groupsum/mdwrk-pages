import React from "react";
import { RuntimePlatform as RuntimePlatformBase, type RuntimePlatformProps as RuntimePlatformBaseProps } from "./chunk-02.js";

export interface RuntimePlatformProps extends RuntimePlatformBaseProps {
  className?: string;
}

export function RuntimePlatform(props: RuntimePlatformProps) {
  return <RuntimePlatformBase {...props} />;
}
