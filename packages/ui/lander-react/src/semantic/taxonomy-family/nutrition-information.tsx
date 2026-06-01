import React from "react";
import { NutritionInformation as NutritionInformationBase, type NutritionInformationProps as NutritionInformationBaseProps } from "./chunk-07.js";

export interface NutritionInformationProps extends NutritionInformationBaseProps {
  className?: string;
}

export function NutritionInformation(props: NutritionInformationProps) {
  return <NutritionInformationBase {...props} />;
}
