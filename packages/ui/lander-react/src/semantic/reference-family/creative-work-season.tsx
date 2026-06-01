import React from "react";
import { CreativeWorkSeason as CreativeWorkSeasonBase, type CreativeWorkSeasonProps as CreativeWorkSeasonBaseProps } from "./chunk-03.js";

export interface CreativeWorkSeasonProps extends CreativeWorkSeasonBaseProps {
  className?: string;
}

export function CreativeWorkSeason(props: CreativeWorkSeasonProps) {
  return <CreativeWorkSeasonBase {...props} />;
}
