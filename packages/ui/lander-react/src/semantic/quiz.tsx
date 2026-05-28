import React, { useState } from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticStructuredDataGate, joinClassNames, mergeArrayByIndexCapped, nonEmptyString } from "./shared.js";

type QuizStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuizStructuredData>["data"];

export interface QuizProps {
  name: string;
  description?: string;
  questions: Array<{ prompt: string; answer: string; alternatives?: string[] }>;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { intro?: React.ReactNode; outro?: React.ReactNode; revealMode?: "inline" | "accordion" };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuizStructuredDataInput>;
}

function buildQuizStructuredData(props: QuizProps): QuizStructuredDataInput {
  const base: QuizStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    learningResourceType: "Flashcards",
    hasPart: props.questions.map((question) => ({
      name: question.prompt,
      text: question.prompt,
      eduQuestionType: "Flashcard",
      answerCount: 1 + (question.alternatives?.length ?? 0),
      acceptedAnswer: { text: question.answer },
      suggestedAnswer: question.alternatives?.map((alternative) => ({ text: alternative })),
    })),
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const acceptedAnswerText = (value: unknown): string | undefined =>
    value &&
    typeof value === "object" &&
    typeof (value as { text?: unknown }).text === "string" &&
    (value as { text: string }).text.trim()
      ? ((value as { text: string }).text as string)
      : undefined;
  merged.hasPart = mergeArrayByIndexCapped(base.hasPart, props.structuredDataOverrides?.hasPart).map((entry, index) => ({
    ...entry,
    name: base.hasPart[index]?.name ?? (typeof entry.name === "string" ? entry.name : `Question ${index + 1}`),
    text: base.hasPart[index]?.text ?? (typeof entry.text === "string" ? entry.text : undefined),
    answerCount: base.hasPart[index]?.answerCount ?? entry.answerCount,
    suggestedAnswer: base.hasPart[index]?.suggestedAnswer,
    acceptedAnswer: {
      ...(base.hasPart[index]?.acceptedAnswer ?? {}),
      ...(entry.acceptedAnswer && typeof entry.acceptedAnswer === "object" ? entry.acceptedAnswer : {}),
      text: acceptedAnswerText(entry.acceptedAnswer) ?? base.hasPart[index]?.acceptedAnswer?.text ?? "",
    },
  }));
  merged.name = props.name;
  merged.learningResourceType = nonEmptyString(props.structuredDataOverrides?.learningResourceType) ?? base.learningResourceType;
  return merged;
}

export function Quiz({
  name,
  description,
  questions,
  url,
  body,
  viewModel,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
}: QuizProps) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const structuredData = buildQuizStructuredData({
    name,
    description,
    questions,
    url,
    body,
    viewModel,
    className,
    emitStructuredData,
    structuredDataOverrides,
  });
  const accordionMode = viewModel?.revealMode === "accordion";

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.QuizStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <section className={joinClassNames("lander-semantic", "lander-semantic--quiz", className)}>
        <header className="lander-semantic__header">
          <h1 className="lander-semantic__title">{name}</h1>
          {description ? <p className="lander-semantic__description">{description}</p> : null}
          {viewModel?.intro ? <div className="lander-semantic__body">{viewModel.intro}</div> : null}
          {body ? <div className="lander-semantic__body">{body}</div> : null}
        </header>
        <div className="lander-page__assessment-grid">
          {questions.map((question, index) => {
            const isRevealed = Boolean(revealed[index]);
            return (
              <article className="lander-page__card lander-page__flashcard" key={`${question.prompt}-${index}`}>
                <span className="lander-page__card-link-label">Q{index + 1}</span>
                <h2>{question.prompt}</h2>
                {question.alternatives?.length ? (
                  <ul>
                    {question.alternatives.map((alternative, alternativeIndex) => (
                      <li key={`${alternative}-${alternativeIndex}`}>{alternative}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="lander-page__flashcard-answer">
                  {isRevealed || !accordionMode ? (
                    <p className="lander-page__flashcard-answer-text">{question.answer}</p>
                  ) : (
                    <p className="lander-page__flashcard-placeholder">Answer hidden. Reveal when ready.</p>
                  )}
                </div>
                <button
                  type="button"
                  className="lander-page__button lander-page__button--secondary"
                  onClick={() => setRevealed((current) => ({ ...current, [index]: !isRevealed }))}
                >
                  {isRevealed ? "Hide answer" : "Reveal answer"}
                </button>
              </article>
            );
          })}
        </div>
        {viewModel?.outro ? <div className="lander-semantic__footer">{viewModel.outro}</div> : null}
      </section>
    </>
  );
}
