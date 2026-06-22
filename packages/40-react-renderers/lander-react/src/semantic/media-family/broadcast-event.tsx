import React from "react";
import { BroadcastEvent as BroadcastEventBase, type BroadcastEventProps as BroadcastEventBaseProps } from "./chunk-01.js";

export interface BroadcastEventProps extends BroadcastEventBaseProps {
  className?: string;
}

export function BroadcastEvent(props: BroadcastEventProps) {
  return <BroadcastEventBase {...props} />;
}
