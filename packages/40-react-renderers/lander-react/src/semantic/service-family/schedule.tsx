import React from "react";
import { Schedule as ScheduleBase, type ScheduleProps as ScheduleBaseProps } from "./chunk-02.js";

export interface ScheduleProps extends ScheduleBaseProps {
  className?: string;
}

export function Schedule(props: ScheduleProps) {
  return <ScheduleBase {...props} />;
}
