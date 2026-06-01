import React from "react";
import { MemberProgram as MemberProgramBase, type MemberProgramProps as MemberProgramBaseProps } from "./chunk-02.js";

export interface MemberProgramProps extends MemberProgramBaseProps {
  className?: string;
}

export function MemberProgram(props: MemberProgramProps) {
  return <MemberProgramBase {...props} />;
}
