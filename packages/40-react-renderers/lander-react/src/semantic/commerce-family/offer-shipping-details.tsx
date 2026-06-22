import React from "react";
import { OfferShippingDetails as OfferShippingDetailsBase, type OfferShippingDetailsProps as OfferShippingDetailsBaseProps } from "./chunk-02.js";

export interface OfferShippingDetailsProps extends OfferShippingDetailsBaseProps {
  className?: string;
}

export function OfferShippingDetails(props: OfferShippingDetailsProps) {
  return <OfferShippingDetailsBase {...props} />;
}
