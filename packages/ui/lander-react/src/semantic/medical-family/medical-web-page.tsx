import React from "react";
import { MedicalWebPage as MedicalWebPageBase, type MedicalWebPageProps as MedicalWebPageBaseProps } from "./chunk-07.js";

export interface MedicalWebPageProps extends MedicalWebPageBaseProps {
  className?: string;
}

export function MedicalWebPage(props: MedicalWebPageProps) {
  return <MedicalWebPageBase {...props} />;
}
