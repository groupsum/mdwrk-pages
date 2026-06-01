import React from "react";
import { MusicComposition as MusicCompositionBase, type MusicCompositionProps as MusicCompositionBaseProps } from "./chunk-03.js";

export interface MusicCompositionProps extends MusicCompositionBaseProps {
  className?: string;
}

export function MusicComposition(props: MusicCompositionProps) {
  return <MusicCompositionBase {...props} />;
}
