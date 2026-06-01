import React from "react";
import { WebPage as WebPageBase, type WebPageProps as WebPageBaseProps } from "./chunk-03.js";

export interface WebPageProps extends WebPageBaseProps {
  className?: string;
}

export function WebPage(props: WebPageProps) {
  return <WebPageBase {...props} />;
}
