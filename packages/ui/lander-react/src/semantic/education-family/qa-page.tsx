import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, renderStructuredSection, omitRecordKeys } from "../shared.js";

type QaPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QAPageStructuredData>["data"];
type AnswerStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AnswerStructuredData>["data"];

export interface QAPageProps extends QaPageStructuredDataInput {
  answer?: string;
  acceptedAnswer?: AnswerStructuredDataInput;
  suggestedAnswer?: AnswerStructuredDataInput[];
  answerCount?: number;
  eduQuestionType?: string;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QaPageStructuredDataInput>;
}

export function QAPage(props: QAPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as QaPageStructuredDataInput;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.QAPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="qa-page"
        title={structuredData.question}
        eyebrow={viewModel?.eyebrow ?? "Q&A"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        meta={[
          structuredData.eduQuestionType ? { label: "Question type", value: structuredData.eduQuestionType } : null,
          structuredData.answerCount !== undefined ? { label: "Answer count", value: String(structuredData.answerCount) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <section className="lander-semantic__prompt-panel">
              <span className="lander-semantic__section-kicker">Prompt</span>
              <strong>{structuredData.question}</strong>
              {structuredData.answer ? <p>{structuredData.answer}</p> : null}
            </section>
            {structuredData.acceptedAnswer?.text ? (
              <div className="lander-semantic__accepted-answer">
                <span className="lander-semantic__answer-kicker">Accepted answer</span>
                <strong>{structuredData.acceptedAnswer.text}</strong>
              </div>
            ) : null}
            {structuredData.suggestedAnswer?.length ? (
              <div className="lander-semantic__suggested-answer-list">
                {structuredData.suggestedAnswer.map((item) => (
                  <article className="lander-semantic__suggested-answer-card" key={item.text}>
                    <span className="lander-semantic__answer-kicker">Suggested</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, [
              "question",
              "answer",
              "acceptedAnswer",
              "suggestedAnswer",
              "answerCount",
              "eduQuestionType",
              "name",
              "description",
            ]), "Structured fields")}
            {body}
          </>
        }
        footer={viewModel?.footer}
        className={className}
      />
    </>
  );
}
