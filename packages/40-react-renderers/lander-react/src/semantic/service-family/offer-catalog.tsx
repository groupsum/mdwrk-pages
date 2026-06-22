import React from "react";
import { OfferCatalog as OfferCatalogBase, type OfferCatalogProps as OfferCatalogBaseProps } from "./chunk-01.js";

export interface OfferCatalogProps extends OfferCatalogBaseProps {
  className?: string;
}

export function OfferCatalog(props: OfferCatalogProps) {
  return <OfferCatalogBase {...props} />;
}
