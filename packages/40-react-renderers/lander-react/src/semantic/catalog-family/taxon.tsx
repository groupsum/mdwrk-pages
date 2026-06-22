import React from "react";
import { Taxon as TaxonBase, type TaxonProps as TaxonBaseProps } from "./chunk-06.js";

export interface TaxonProps extends TaxonBaseProps {
  className?: string;
}

export function Taxon(props: TaxonProps) {
  return <TaxonBase {...props} />;
}
