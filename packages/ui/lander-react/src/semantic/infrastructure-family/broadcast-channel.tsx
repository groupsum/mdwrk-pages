import React from "react";
import { BroadcastChannel as BroadcastChannelBase, type BroadcastChannelProps as BroadcastChannelBaseProps } from "./chunk-01.js";

export interface BroadcastChannelProps extends BroadcastChannelBaseProps {
  className?: string;
}

export function BroadcastChannel(props: BroadcastChannelProps) {
  return <BroadcastChannelBase {...props} />;
}
