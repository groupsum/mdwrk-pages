import React from "react";
import { WarrantyPromise as WarrantyPromiseBase, type WarrantyPromiseProps as WarrantyPromiseBaseProps } from "./chunk-04.js";

export interface WarrantyPromiseProps extends WarrantyPromiseBaseProps {
  className?: string;
}

export function WarrantyPromise(props: WarrantyPromiseProps) {
  return <WarrantyPromiseBase {...props} />;
}
