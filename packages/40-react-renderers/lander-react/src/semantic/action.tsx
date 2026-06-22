import React from "react";
import { Action as ActionBase, type ActionProps as ActionBaseProps } from "./supporting-family.js";

export interface ActionProps extends ActionBaseProps {
  className?: string;
}

export function Action(props: ActionProps) {
  return <ActionBase {...props} />;
}
