import React from "react";
import { TechArticle as TechArticleBase, type TechArticleProps as TechArticleBaseProps } from "./article-family.js";

export interface TechArticleProps extends TechArticleBaseProps {
  className?: string;
}

export function TechArticle(props: TechArticleProps) {
  return <TechArticleBase {...props} />;
}
