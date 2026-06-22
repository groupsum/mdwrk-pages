import React from "react";
import { Language as LanguageBase, type LanguageProps as LanguageBaseProps } from "./chunk-06.js";

export interface LanguageProps extends LanguageBaseProps {
  className?: string;
}

export function Language(props: LanguageProps) {
  return <LanguageBase {...props} />;
}
