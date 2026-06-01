import React from "react";
import { Book as BookBase, type BookProps as BookBaseProps } from "./chunk-01.js";

export interface BookProps extends BookBaseProps {
  className?: string;
}

export function Book(props: BookProps) {
  return <BookBase {...props} />;
}
