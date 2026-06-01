import React from "react";
import { Gene as GeneBase, type GeneProps as GeneBaseProps } from "./chunk-05.js";

export interface GeneProps extends GeneBaseProps {
  className?: string;
}

export function Gene(props: GeneProps) {
  return <GeneBase {...props} />;
}
