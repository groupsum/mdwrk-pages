import React from "react";
import { NewsArticle as NewsArticleBase, type NewsArticleProps as NewsArticleBaseProps } from "./article-family.js";

export interface NewsArticleProps extends NewsArticleBaseProps {
  className?: string;
}

export function NewsArticle(props: NewsArticleProps) {
  return <NewsArticleBase {...props} />;
}
