import React from "react";
import { MusicGroup as MusicGroupBase, type MusicGroupProps as MusicGroupBaseProps } from "./chunk-04.js";

export interface MusicGroupProps extends MusicGroupBaseProps {
  className?: string;
}

export function MusicGroup(props: MusicGroupProps) {
  return <MusicGroupBase {...props} />;
}
