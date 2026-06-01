import React from "react";
import { CorrectionComment as CorrectionCommentBase, type CorrectionCommentProps as CorrectionCommentBaseProps } from "./chunk-02.js";

export interface CorrectionCommentProps extends CorrectionCommentBaseProps {
  className?: string;
}

export function CorrectionComment(props: CorrectionCommentProps) {
  return <CorrectionCommentBase {...props} />;
}
