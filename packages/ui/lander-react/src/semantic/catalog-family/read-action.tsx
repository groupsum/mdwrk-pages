import React from "react";
import { ReadAction as ReadActionBase, type ReadActionProps as ReadActionBaseProps } from "./chunk-05.js";

export interface ReadActionProps extends ReadActionBaseProps {
  className?: string;
}

export function ReadAction(props: ReadActionProps) {
  return <ReadActionBase {...props} />;
}
