import React from "react";
import { WebApplication as WebApplicationBase, type WebApplicationProps as WebApplicationBaseProps } from "./chunk-03.js";

export interface WebApplicationProps extends WebApplicationBaseProps {
  className?: string;
}

export function WebApplication(props: WebApplicationProps) {
  return <WebApplicationBase {...props} />;
}
