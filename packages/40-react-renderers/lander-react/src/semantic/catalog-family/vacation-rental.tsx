import React from "react";
import { VacationRental as VacationRentalBase, type VacationRentalProps as VacationRentalBaseProps } from "./chunk-04.js";

export interface VacationRentalProps extends VacationRentalBaseProps {
  className?: string;
}

export function VacationRental(props: VacationRentalProps) {
  return <VacationRentalBase {...props} />;
}
