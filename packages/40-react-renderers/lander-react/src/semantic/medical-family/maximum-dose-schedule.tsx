import React from "react";
import { MaximumDoseSchedule as MaximumDoseScheduleBase, type MaximumDoseScheduleProps as MaximumDoseScheduleBaseProps } from "./chunk-05.js";

export interface MaximumDoseScheduleProps extends MaximumDoseScheduleBaseProps {
  className?: string;
}

export function MaximumDoseSchedule(props: MaximumDoseScheduleProps) {
  return <MaximumDoseScheduleBase {...props} />;
}
