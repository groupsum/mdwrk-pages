import React from "react";
import { MemberProgramTier as MemberProgramTierBase, type MemberProgramTierProps as MemberProgramTierBaseProps } from "./chunk-02.js";

export interface MemberProgramTierProps extends MemberProgramTierBaseProps {
  className?: string;
}

export function MemberProgramTier(props: MemberProgramTierProps) {
  return <MemberProgramTierBase {...props} />;
}
