import React from "react";
import { InteractionCounter as InteractionCounterBase, type InteractionCounterProps as InteractionCounterBaseProps } from "./chunk-06.js";

export interface InteractionCounterProps extends InteractionCounterBaseProps {
  className?: string;
}

export function InteractionCounter(props: InteractionCounterProps) {
  return <InteractionCounterBase {...props} />;
}
