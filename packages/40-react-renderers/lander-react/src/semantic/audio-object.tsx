import React from "react";
import { AudioObject as AudioObjectBase, type AudioObjectProps as AudioObjectBaseProps } from "./supporting-family.js";

export interface AudioObjectProps extends AudioObjectBaseProps {
  className?: string;
}

export function AudioObject(props: AudioObjectProps) {
  return <AudioObjectBase {...props} />;
}
