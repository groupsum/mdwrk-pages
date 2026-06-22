import React from "react";
import { ListItem as ListItemBase, type ListItemProps as ListItemBaseProps } from "./chunk-07.js";

export interface ListItemProps extends ListItemBaseProps {
  className?: string;
}

export function ListItem(props: ListItemProps) {
  return <ListItemBase {...props} />;
}
