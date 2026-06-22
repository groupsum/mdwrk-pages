import React from "react";
import { DataFeedItem as DataFeedItemBase, type DataFeedItemProps as DataFeedItemBaseProps } from "./chunk-01.js";

export interface DataFeedItemProps extends DataFeedItemBaseProps {
  className?: string;
}

export function DataFeedItem(props: DataFeedItemProps) {
  return <DataFeedItemBase {...props} />;
}
