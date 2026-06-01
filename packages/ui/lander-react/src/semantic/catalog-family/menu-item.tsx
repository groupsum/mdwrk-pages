import React from "react";
import { MenuItem as MenuItemBase, type MenuItemProps as MenuItemBaseProps } from "./chunk-05.js";

export interface MenuItemProps extends MenuItemBaseProps {
  className?: string;
}

export function MenuItem(props: MenuItemProps) {
  return <MenuItemBase {...props} />;
}
