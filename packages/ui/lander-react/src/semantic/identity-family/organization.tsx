import React from "react";
import { Organization as OrganizationBase, type OrganizationProps as OrganizationBaseProps } from "./chunk-01.js";

export interface OrganizationProps extends OrganizationBaseProps {
  className?: string;
}

export function Organization(props: OrganizationProps) {
  return <OrganizationBase {...props} />;
}

(Organization as typeof Organization & { toStructuredData: (props: OrganizationProps) => unknown }).toStructuredData = (
  OrganizationBase as typeof OrganizationBase & { toStructuredData: (props: OrganizationBaseProps) => unknown }
).toStructuredData;
