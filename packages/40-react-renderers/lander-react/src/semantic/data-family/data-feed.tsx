import React from "react";
import { DataFeed as DataFeedBase, type DataFeedProps as DataFeedBaseProps } from "./chunk-02.js";

export interface DataFeedProps extends DataFeedBaseProps {
  className?: string;
}

export function DataFeed(props: DataFeedProps) {
  return <DataFeedBase {...props} />;
}
