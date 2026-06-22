import React from "react";
import { AdministrativeArea as AdministrativeAreaBase, type AdministrativeAreaProps as AdministrativeAreaBaseProps } from "./supporting-family.js";

export interface AdministrativeAreaProps extends AdministrativeAreaBaseProps {
  className?: string;
}

export function AdministrativeArea(props: AdministrativeAreaProps) {
  return <AdministrativeAreaBase {...props} />;
}
