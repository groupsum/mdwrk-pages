import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DatelinePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatelineProps extends DatelinePropertyInput, GeneratedPropertyUiProps<DatelinePropertyInput> {}

export function SchemaPropertyDateline({ value: legacyValue, description = "A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.\n\nStructured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created, e.g. where a news report was written).  For location depicted or described in the content, use [[contentLocation]].\n\nDateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: \"BEIRUT, Lebanon, June 2.\", \"Paris, France\", \"December 19, 2017 11:43AM Reporting from Washington\", \"Beijing/Moscow\", \"QUEZON CITY, Philippines\".\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDatelineProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatelinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dateline",
    shellClassName: "lander-semantic--schema-property-dateline",
    title: "dateline",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}

(SchemaPropertyDateline as typeof SchemaPropertyDateline & { toStructuredData: (props: SchemaPropertyDatelineProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
