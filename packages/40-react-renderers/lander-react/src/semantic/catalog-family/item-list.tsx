import React from "react";
import { ItemList as ItemListBase, type ItemListProps as ItemListBaseProps } from "./chunk-01.js";

export interface ItemListProps extends ItemListBaseProps {
  className?: string;
}

export function ItemList(props: ItemListProps) {
  return <ItemListBase {...props} />;
}
