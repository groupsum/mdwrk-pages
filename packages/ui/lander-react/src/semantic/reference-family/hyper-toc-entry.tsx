import React from "react";
import { HyperTocEntry as HyperTocEntryBase, type HyperTocEntryProps as HyperTocEntryBaseProps } from "./chunk-06.js";

export interface HyperTocEntryProps extends HyperTocEntryBaseProps {
  className?: string;
}

export function HyperTocEntry(props: HyperTocEntryProps) {
  return <HyperTocEntryBase {...props} />;
}
