import React from "react";
import { RepaymentSpecification as RepaymentSpecificationBase, type RepaymentSpecificationProps as RepaymentSpecificationBaseProps } from "./chunk-03.js";

export interface RepaymentSpecificationProps extends RepaymentSpecificationBaseProps {
  className?: string;
}

export function RepaymentSpecification(props: RepaymentSpecificationProps) {
  return <RepaymentSpecificationBase {...props} />;
}
