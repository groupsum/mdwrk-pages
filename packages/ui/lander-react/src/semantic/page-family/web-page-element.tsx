import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { PageViewModel, WebPageElementStructuredDataInput, bodyList } from "./shared.js";

export interface WebPageElementProps {
  name: string;
  description?: string;
  text?: string;
  cssSelector?: string[];
  xpath?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebPageElementStructuredDataInput>;
}

export function WebPageElement(props: WebPageElementProps) {
  const structuredData = {
    name: props.name,
    description: props.description,
    text: props.text,
    cssSelector: props.cssSelector,
    xpath: props.xpath,
    ...(props.structuredDataOverrides ?? {}),
  } satisfies WebPageElementStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebPageElementStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-page-element"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web page element"}
        description={props.description}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.cssSelector?.length ? bodyList(props.cssSelector) : null}
            {props.xpath?.length ? bodyList(props.xpath) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
