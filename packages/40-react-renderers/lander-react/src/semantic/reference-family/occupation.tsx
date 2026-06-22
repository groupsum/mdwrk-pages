import React from "react";
import { Occupation as OccupationBase, type OccupationProps as OccupationBaseProps } from "./chunk-06.js";

export interface OccupationProps extends OccupationBaseProps {
  className?: string;
}

export function Occupation(props: OccupationProps) {
  return <OccupationBase {...props} />;
}
