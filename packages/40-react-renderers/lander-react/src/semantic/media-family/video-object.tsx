import React from "react";
import { VideoObject as VideoObjectBase, type VideoObjectProps as VideoObjectBaseProps } from "./chunk-01.js";

export interface VideoObjectProps extends VideoObjectBaseProps {
  className?: string;
}

export function VideoObject(props: VideoObjectProps) {
  return <VideoObjectBase {...props} />;
}
