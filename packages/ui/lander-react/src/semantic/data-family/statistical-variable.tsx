import React from "react";
import { StatisticalVariable as StatisticalVariableBase, type StatisticalVariableProps as StatisticalVariableBaseProps } from "./chunk-07.js";

export interface StatisticalVariableProps extends StatisticalVariableBaseProps {
  className?: string;
}

export function StatisticalVariable(props: StatisticalVariableProps) {
  return <StatisticalVariableBase {...props} />;
}
