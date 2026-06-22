import React from "react";
import { BlogPosting as BlogPostingBase, type BlogPostingProps as BlogPostingBaseProps } from "./article-family.js";

export interface BlogPostingProps extends BlogPostingBaseProps {
  className?: string;
}

export function BlogPosting(props: BlogPostingProps) {
  return <BlogPostingBase {...props} />;
}
