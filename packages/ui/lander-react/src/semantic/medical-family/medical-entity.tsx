import React from "react";
import { MedicalEntity as MedicalEntityBase, type MedicalEntityProps as MedicalEntityBaseProps } from "./chunk-01.js";

export interface MedicalEntityProps extends MedicalEntityBaseProps {
  className?: string;
}

export function MedicalEntity(props: MedicalEntityProps) {
  return <MedicalEntityBase {...props} />;
}
