import React from "react";
import { WebSite as WebSiteBase, type WebSiteProps as WebSiteBaseProps } from "./chunk-03.js";

export interface WebSiteProps extends WebSiteBaseProps {
  className?: string;
}

export function WebSite(props: WebSiteProps) {
  return <WebSiteBase {...props} />;
}
