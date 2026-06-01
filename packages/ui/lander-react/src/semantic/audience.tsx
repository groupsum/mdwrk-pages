import React from "react";
import { Audience as AudienceBase, type AudienceProps as AudienceBaseProps } from "./supporting-family.js";

export interface AudienceProps extends AudienceBaseProps {
  className?: string;
}

export function Audience(props: AudienceProps) {
  return <AudienceBase {...props} />;
}
