import React from "react";
import { AlignmentObject as AlignmentObjectBase, type AlignmentObjectProps as AlignmentObjectBaseProps } from "./supporting-family.js";

export interface AlignmentObjectProps extends AlignmentObjectBaseProps {
  className?: string;
}

export function AlignmentObject(props: AlignmentObjectProps) {
  return <AlignmentObjectBase {...props} />;
}
