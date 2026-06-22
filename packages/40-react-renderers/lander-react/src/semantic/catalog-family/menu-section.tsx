import React from "react";
import { MenuSection as MenuSectionBase, type MenuSectionProps as MenuSectionBaseProps } from "./chunk-06.js";

export interface MenuSectionProps extends MenuSectionBaseProps {
  className?: string;
}

export function MenuSection(props: MenuSectionProps) {
  return <MenuSectionBase {...props} />;
}
