import React from "react";
import { LoanOrCredit as LoanOrCreditBase, type LoanOrCreditProps as LoanOrCreditBaseProps } from "./chunk-05.js";

export interface LoanOrCreditProps extends LoanOrCreditBaseProps {
  className?: string;
}

export function LoanOrCredit(props: LoanOrCreditProps) {
  return <LoanOrCreditBase {...props} />;
}
