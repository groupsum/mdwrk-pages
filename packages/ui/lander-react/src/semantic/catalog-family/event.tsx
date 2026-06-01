import React from "react";
import { Event as EventBase, type EventProps as EventBaseProps } from "./chunk-05.js";

export interface EventProps extends EventBaseProps {
  className?: string;
}

export function Event(props: EventProps) {
  return <EventBase {...props} />;
}
