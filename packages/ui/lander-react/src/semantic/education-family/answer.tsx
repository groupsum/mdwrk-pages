import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type AnswerStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AnswerStructuredData>["data"];

export interface AnswerProps {
  text: string;
  url?: string;
  upvoteCount?: number;
  dateCreated?: string;
  author?: { name: string; url?: string };
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AnswerStructuredDataInput>;
}

export function Answer(props: AnswerProps) {
  const base: AnswerStructuredDataInput = {
    text: props.text,
    url: props.url,
    upvoteCount: props.upvoteCount,
    dateCreated: props.dateCreated,
    author: props.author ? { "@type": "Person", name: props.author.name, url: props.author.url } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AnswerStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="answer"
        title={props.viewModel?.eyebrow ?? "Answer"}
        body={
          <div className="lander-semantic__answer-prose">
            <span className="lander-semantic__answer-kicker">Response</span>
            <p>{props.text}</p>
            {props.body}
          </div>
        }
        meta={[
          props.author?.name ? { label: "Author", value: props.author.name } : null,
          props.upvoteCount !== undefined ? { label: "Upvotes", value: String(props.upvoteCount) } : null,
          props.dateCreated ? { label: "Created", value: props.dateCreated } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
