import React from "react";
import { WebPage as WebPageBase, type WebPageProps as WebPageBaseProps } from "./chunk-03.js";

export interface WebPageProps extends WebPageBaseProps {
  className?: string;
}

export function WebPage(props: WebPageProps) {
  return <WebPageBase {...props} />;
}

(WebPage as typeof WebPage & { toStructuredData: (props: WebPageProps) => unknown }).toStructuredData = (
  WebPageBase as typeof WebPageBase & { toStructuredData: (props: WebPageBaseProps) => unknown }
).toStructuredData;
