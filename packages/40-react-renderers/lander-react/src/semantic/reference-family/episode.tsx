import React from "react";
import { Episode as EpisodeBase, type EpisodeProps as EpisodeBaseProps } from "./chunk-04.js";

export interface EpisodeProps extends EpisodeBaseProps {
  className?: string;
}

export function Episode(props: EpisodeProps) {
  return <EpisodeBase {...props} />;
}
