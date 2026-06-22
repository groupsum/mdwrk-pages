import React from "react";
import { Class as ClassBase, type ClassProps as ClassBaseProps } from "./chunk-02.js";

export interface ClassProps extends ClassBaseProps {
  className?: string;
}

export function Class(props: ClassProps) {
  return <ClassBase {...props} />;
}
