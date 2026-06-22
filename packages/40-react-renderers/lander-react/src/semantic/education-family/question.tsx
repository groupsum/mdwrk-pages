import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type QuestionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuestionStructuredData>["data"];

export interface QuestionProps {
  name: string;
  text?: string;
  acceptedAnswer?: { text: string };
  suggestedAnswer?: Array<{ text: string }>;
  answerCount?: number;
  eduQuestionType?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuestionStructuredDataInput>;
}

export function Question(props: QuestionProps) {
  const base: QuestionStructuredDataInput = {
    name: props.name,
    text: props.text,
    acceptedAnswer: props.acceptedAnswer,
    suggestedAnswer: props.suggestedAnswer,
    answerCount: props.answerCount,
    eduQuestionType: props.eduQuestionType,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuestionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="question"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Question"}
        description={props.text}
        meta={[
          props.eduQuestionType ? { label: "Type", value: props.eduQuestionType } : null,
          props.answerCount !== undefined ? { label: "Answers", value: String(props.answerCount) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <section className="lander-semantic__prompt-panel">
              <span className="lander-semantic__section-kicker">Prompt</span>
              <strong>{props.name}</strong>
              {props.text ? <p>{props.text}</p> : null}
            </section>
            {props.acceptedAnswer?.text ? (
              <div className="lander-semantic__accepted-answer">
                <span className="lander-semantic__answer-kicker">Accepted answer</span>
                <strong>{props.acceptedAnswer.text}</strong>
              </div>
            ) : null}
            {props.suggestedAnswer?.length ? (
              <div className="lander-semantic__suggested-answer-list">
                {props.suggestedAnswer.map((item) => (
                  <article className="lander-semantic__suggested-answer-card" key={item.text}>
                    <span className="lander-semantic__answer-kicker">Suggested</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
