import React from "react";
import { Clip as ClipBase, type ClipProps as ClipBaseProps } from "./chunk-01.js";

export interface ClipProps extends ClipBaseProps {
  className?: string;
}

export function Clip(props: ClipProps) {
  return <ClipBase {...props} />;
}
