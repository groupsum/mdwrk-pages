import React from "react";
import { ContactPoint as ContactPointBase, type ContactPointProps as ContactPointBaseProps } from "./chunk-02.js";

export interface ContactPointProps extends ContactPointBaseProps {
  className?: string;
}

export function ContactPoint(props: ContactPointProps) {
  return <ContactPointBase {...props} />;
}
