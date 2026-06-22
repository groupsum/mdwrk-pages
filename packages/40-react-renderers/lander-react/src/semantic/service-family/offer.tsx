import React from "react";
import { Offer as OfferBase, type OfferProps as OfferBaseProps } from "./chunk-01.js";

export interface OfferProps extends OfferBaseProps {
  className?: string;
}

export function Offer(props: OfferProps) {
  return <OfferBase {...props} />;
}
