import React from "react";
import { MediaObject as MediaObjectBase, type MediaObjectProps as MediaObjectBaseProps } from "./chunk-02.js";

export interface MediaObjectProps extends MediaObjectBaseProps {
  className?: string;
}

export function MediaObject(props: MediaObjectProps) {
  return <MediaObjectBase {...props} />;
}
