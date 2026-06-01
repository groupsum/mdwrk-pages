import React from "react";
import { CivicStructure as CivicStructureBase, type CivicStructureProps as CivicStructureBaseProps } from "./chunk-02.js";

export interface CivicStructureProps extends CivicStructureBaseProps {
  className?: string;
}

export function CivicStructure(props: CivicStructureProps) {
  return <CivicStructureBase {...props} />;
}
