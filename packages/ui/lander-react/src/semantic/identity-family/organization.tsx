import React from "react";
import { Organization as OrganizationBase, type OrganizationProps as OrganizationBaseProps } from "./chunk-01.js";

export interface OrganizationProps extends OrganizationBaseProps {
  className?: string;
}

export function Organization(props: OrganizationProps) {
  return <OrganizationBase {...props} />;
}
