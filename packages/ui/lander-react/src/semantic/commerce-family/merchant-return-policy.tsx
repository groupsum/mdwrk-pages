import React from "react";
import { MerchantReturnPolicy as MerchantReturnPolicyBase, type MerchantReturnPolicyProps as MerchantReturnPolicyBaseProps } from "./chunk-02.js";

export interface MerchantReturnPolicyProps extends MerchantReturnPolicyBaseProps {
  className?: string;
}

export function MerchantReturnPolicy(props: MerchantReturnPolicyProps) {
  return <MerchantReturnPolicyBase {...props} />;
}
