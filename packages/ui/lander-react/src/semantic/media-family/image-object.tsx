import React from "react";
import { ImageObject as ImageObjectBase, type ImageObjectProps as ImageObjectBaseProps } from "./chunk-02.js";

export interface ImageObjectProps extends ImageObjectBaseProps {
  className?: string;
}

export function ImageObject(props: ImageObjectProps) {
  return <ImageObjectBase {...props} />;
}
