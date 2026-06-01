import React from "react";
import { MediaSubscription as MediaSubscriptionBase, type MediaSubscriptionProps as MediaSubscriptionBaseProps } from "./chunk-02.js";

export interface MediaSubscriptionProps extends MediaSubscriptionBaseProps {
  className?: string;
}

export function MediaSubscription(props: MediaSubscriptionProps) {
  return <MediaSubscriptionBase {...props} />;
}
