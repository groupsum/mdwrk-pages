import React from "react";
import { Credential as CredentialBase, type CredentialProps as CredentialBaseProps } from "./chunk-02.js";

export interface CredentialProps extends CredentialBaseProps {
  className?: string;
}

export function Credential(props: CredentialProps) {
  return <CredentialBase {...props} />;
}
