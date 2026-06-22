import React from "react";
import { Certification as CertificationBase, type CertificationProps as CertificationBaseProps } from "./chunk-01.js";

export interface CertificationProps extends CertificationBaseProps {
  className?: string;
}

export function Certification(props: CertificationProps) {
  return <CertificationBase {...props} />;
}
