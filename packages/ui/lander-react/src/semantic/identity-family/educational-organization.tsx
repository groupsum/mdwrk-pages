import React from "react";
import { EducationalOrganization as EducationalOrganizationBase, type EducationalOrganizationProps as EducationalOrganizationBaseProps } from "./chunk-01.js";

export interface EducationalOrganizationProps extends EducationalOrganizationBaseProps {
  className?: string;
}

export function EducationalOrganization(props: EducationalOrganizationProps) {
  return <EducationalOrganizationBase {...props} />;
}
