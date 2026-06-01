import React from "react";
import { TextObject as TextObjectBase, type TextObjectProps as TextObjectBaseProps } from "./chunk-07.js";

export interface TextObjectProps extends TextObjectBaseProps {
  className?: string;
}

export function TextObject(props: TextObjectProps) {
  return <TextObjectBase {...props} />;
}
