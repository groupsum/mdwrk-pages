import React from "react";
import { MusicRelease as MusicReleaseBase, type MusicReleaseProps as MusicReleaseBaseProps } from "./chunk-05.js";

export interface MusicReleaseProps extends MusicReleaseBaseProps {
  className?: string;
}

export function MusicRelease(props: MusicReleaseProps) {
  return <MusicReleaseBase {...props} />;
}
