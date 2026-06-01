import React from "react";
import { Dataset as DatasetBase, type DatasetProps as DatasetBaseProps } from "./chunk-01.js";

export interface DatasetProps extends DatasetBaseProps {
  className?: string;
}

export function Dataset(props: DatasetProps) {
  return <DatasetBase {...props} />;
}
