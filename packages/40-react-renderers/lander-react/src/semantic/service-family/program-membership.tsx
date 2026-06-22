import React from "react";
import { ProgramMembership as ProgramMembershipBase, type ProgramMembershipProps as ProgramMembershipBaseProps } from "./chunk-02.js";

export interface ProgramMembershipProps extends ProgramMembershipBaseProps {
  className?: string;
}

export function ProgramMembership(props: ProgramMembershipProps) {
  return <ProgramMembershipBase {...props} />;
}
