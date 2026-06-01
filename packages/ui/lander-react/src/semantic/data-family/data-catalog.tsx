import React from "react";
import { DataCatalog as DataCatalogBase, type DataCatalogProps as DataCatalogBaseProps } from "./chunk-01.js";

export interface DataCatalogProps extends DataCatalogBaseProps {
  className?: string;
}

export function DataCatalog(props: DataCatalogProps) {
  return <DataCatalogBase {...props} />;
}
