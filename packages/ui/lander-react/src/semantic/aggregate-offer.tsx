import React from "react";
import { AggregateOffer as AggregateOfferBase, type AggregateOfferProps as AggregateOfferBaseProps } from "./supporting-family.js";

export interface AggregateOfferProps extends AggregateOfferBaseProps {
  className?: string;
}

export function AggregateOffer(props: AggregateOfferProps) {
  return <AggregateOfferBase {...props} />;
}
