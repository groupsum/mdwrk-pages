import React from "react";
import { MedicalAudience as MedicalAudienceBase, type MedicalAudienceProps as MedicalAudienceBaseProps } from "./chunk-01.js";

export interface MedicalAudienceProps extends MedicalAudienceBaseProps {
  className?: string;
}

export function MedicalAudience(props: MedicalAudienceProps) {
  return <MedicalAudienceBase {...props} />;
}
