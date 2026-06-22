import React from "react";
import { Recipe as RecipeBase, type RecipeProps as RecipeBaseProps } from "./chunk-02.js";

export interface RecipeProps extends RecipeBaseProps {
  className?: string;
}

export function Recipe(props: RecipeProps) {
  return <RecipeBase {...props} />;
}
