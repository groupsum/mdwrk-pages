import React from "react";
import { CreditCard as CreditCardBase, type CreditCardProps as CreditCardBaseProps } from "./chunk-03.js";

export interface CreditCardProps extends CreditCardBaseProps {
  className?: string;
}

export function CreditCard(props: CreditCardProps) {
  return <CreditCardBase {...props} />;
}
