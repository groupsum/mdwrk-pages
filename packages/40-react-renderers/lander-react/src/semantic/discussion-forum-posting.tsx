import React from "react";
import { DiscussionForumPosting as DiscussionForumPostingBase, type DiscussionForumPostingProps as DiscussionForumPostingBaseProps } from "./article-family.js";

export interface DiscussionForumPostingProps extends DiscussionForumPostingBaseProps {
  className?: string;
}

export function DiscussionForumPosting(props: DiscussionForumPostingProps) {
  return <DiscussionForumPostingBase {...props} />;
}
