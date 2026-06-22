import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { PageViewModel, WebContentStructuredDataInput } from "./shared.js";

export interface WebContentProps {
  name: string;
  description?: string;
  text?: string;
  author?: string;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebContentStructuredDataInput>;
}

export function WebContent(props: WebContentProps) {
  const structuredData = {
    name: props.name,
    description: props.description,
    text: props.text,
    author: props.author ? { "@type": "Person", name: props.author } : undefined,
    ...(props.structuredDataOverrides ?? {}),
  } satisfies WebContentStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebContentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-content"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web content"}
        description={props.description}
        meta={props.author ? [{ label: "Author", value: props.author }] : undefined}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
