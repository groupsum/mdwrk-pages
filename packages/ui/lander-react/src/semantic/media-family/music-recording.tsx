import React from "react";
import { MusicRecording as MusicRecordingBase, type MusicRecordingProps as MusicRecordingBaseProps } from "./chunk-04.js";

export interface MusicRecordingProps extends MusicRecordingBaseProps {
  className?: string;
}

export function MusicRecording(props: MusicRecordingProps) {
  return <MusicRecordingBase {...props} />;
}
