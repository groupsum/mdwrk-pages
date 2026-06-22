import React from "react";
import { Country as CountryBase, type CountryProps as CountryBaseProps } from "./chunk-03.js";

export interface CountryProps extends CountryBaseProps {
  className?: string;
}

export function Country(props: CountryProps) {
  return <CountryBase {...props} />;
}
