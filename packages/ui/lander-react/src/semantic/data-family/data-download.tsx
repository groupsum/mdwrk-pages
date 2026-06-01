import React from "react";
import { DataDownload as DataDownloadBase, type DataDownloadProps as DataDownloadBaseProps } from "./chunk-01.js";

export interface DataDownloadProps extends DataDownloadBaseProps {
  className?: string;
}

export function DataDownload(props: DataDownloadProps) {
  return <DataDownloadBase {...props} />;
}
