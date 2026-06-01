import React from "react";
import { SuperficialAnatomy as SuperficialAnatomyBase, type SuperficialAnatomyProps as SuperficialAnatomyBaseProps } from "./chunk-08.js";

export interface SuperficialAnatomyProps extends SuperficialAnatomyBaseProps {
  className?: string;
}

export function SuperficialAnatomy(props: SuperficialAnatomyProps) {
  return <SuperficialAnatomyBase {...props} />;
}
