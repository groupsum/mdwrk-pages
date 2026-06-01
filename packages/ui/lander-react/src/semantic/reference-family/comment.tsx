import React from "react";
import { Comment as CommentBase, type CommentProps as CommentBaseProps } from "./chunk-02.js";

export interface CommentProps extends CommentBaseProps {
  className?: string;
}

export function Comment(props: CommentProps) {
  return <CommentBase {...props} />;
}
