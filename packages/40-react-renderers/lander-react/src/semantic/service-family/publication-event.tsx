import React from "react";
import { PublicationEvent as PublicationEventBase, type PublicationEventProps as PublicationEventBaseProps } from "./chunk-02.js";

export interface PublicationEventProps extends PublicationEventBaseProps {
  className?: string;
}

export function PublicationEvent(props: PublicationEventProps) {
  return <PublicationEventBase {...props} />;
}
