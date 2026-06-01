import React from "react";
import { BroadcastService as BroadcastServiceBase, type BroadcastServiceProps as BroadcastServiceBaseProps } from "./chunk-01.js";

export interface BroadcastServiceProps extends BroadcastServiceBaseProps {
  className?: string;
}

export function BroadcastService(props: BroadcastServiceProps) {
  return <BroadcastServiceBase {...props} />;
}
