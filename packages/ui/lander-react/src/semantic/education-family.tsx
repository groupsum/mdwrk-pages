import React, { useState } from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  bodyList,
  firstImage,
  isRecord,
  mergeArrayByIndexCapped,
  mergeRecordLike,
  nonEmptyString,
  renderJsonPreview,
} from "./shared.js";

type CourseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CourseStructuredData>["data"];
type CourseInstanceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CourseInstanceStructuredData>["data"];
type QuizStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuizStructuredData>["data"];
type QaPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QAPageStructuredData>["data"];
type QuestionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuestionStructuredData>["data"];
type AnswerStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AnswerStructuredData>["data"];
type HowToStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToStructuredData>["data"];
type LearningResourceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LearningResourceStructuredData>["data"];
type MathSolverStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MathSolverStructuredData>["data"];
type SolveMathActionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SolveMathActionStructuredData>["data"];
type FAQPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.FAQPageStructuredData>["data"];

export interface CourseProps {
  name: string;
  description?: string;
  provider?: { name: string; url?: string };
  url?: string;
  image?: string | string[];
  duration?: string;
  educationalLevel?: string;
  body?: React.ReactNode;
  modules?: Array<{ title: string; summary?: string }>;
  viewModel?: { eyebrow?: string; outcomes?: string[]; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CourseStructuredDataInput>;
}

export interface CourseInstanceProps {
  name: string;
  description?: string;
  courseMode?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  instructor?: { name: string };
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CourseInstanceStructuredDataInput>;
}

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

export interface QAPageProps {
  question: string;
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

export interface HowToProps {
  name: string;
  description?: string;
  steps: Array<{ name: string; text: string; url?: string; image?: string }>;
  totalTime?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToStructuredDataInput>;
}

export interface LearningResourceProps {
  name: string;
  description?: string;
  url?: string;
  image?: string | string[];
  learningResourceType?: string;
  educationalLevel?: string;
  teaches?: string | string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<LearningResourceStructuredDataInput>;
}

export interface MathSolverProps {
  name: string;
  description?: string;
  mathExpression?: string;
  potentialAction?: Array<{ target: string; mathExpressionInput?: string }>;
  learningResource?: Array<{ name: string; learningResourceType?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MathSolverStructuredDataInput>;
}

export interface SolveMathActionProps {
  target: string;
  mathExpressionInput?: string;
  eduQuestionType?: string | string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SolveMathActionStructuredDataInput>;
}

export interface FAQPageProps {
  items: Array<{ question: string; answer: string }>;
  heading?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode; collapsible?: boolean };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<FAQPageStructuredDataInput>;
}

function buildCourseStructuredData(props: CourseProps): CourseStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const baseInstances =
    props.duration || props.educationalLevel
      ? [{ "@type": "CourseInstance", name: `${props.name} instance`, courseMode: props.educationalLevel }]
      : undefined;
  const base: CourseStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    image: structuredImage,
    provider: props.provider ? { "@type": "Organization", name: props.provider.name, url: props.provider.url } : undefined,
    hasCourseInstance: baseInstances,
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  if (isRecord(base.provider)) {
    const mergedProvider = mergeRecordLike(base.provider, props.structuredDataOverrides?.provider);
    merged.provider = {
      ...mergedProvider,
      name: nonEmptyString(mergedProvider.name) ?? base.provider.name,
      url: nonEmptyString(mergedProvider.url) ?? base.provider.url,
    };
  }
  if (Array.isArray(base.hasCourseInstance)) {
    merged.hasCourseInstance = mergeArrayByIndexCapped(
      base.hasCourseInstance.filter(isRecord),
      props.structuredDataOverrides?.hasCourseInstance,
    ).map((entry, index) => ({
      ...entry,
      name: nonEmptyString(entry.name) ?? base.hasCourseInstance?.[index]?.name ?? `${props.name} instance`,
      courseMode: nonEmptyString(entry.courseMode) ?? base.hasCourseInstance?.[index]?.courseMode,
    }));
  }
  merged.name = props.name;
  return merged;
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
  merged.hasPart = mergeArrayByIndexCapped(base.hasPart, props.structuredDataOverrides?.hasPart).map((entry, index) => ({
    ...entry,
    name: nonEmptyString(entry.name) ?? base.hasPart[index]?.name ?? `Question ${index + 1}`,
    text: nonEmptyString(entry.text) ?? base.hasPart[index]?.text,
    answerCount: base.hasPart[index]?.answerCount ?? entry.answerCount,
    suggestedAnswer: base.hasPart[index]?.suggestedAnswer,
    acceptedAnswer: {
      ...(base.hasPart[index]?.acceptedAnswer ?? {}),
      ...(isRecord(entry.acceptedAnswer) ? entry.acceptedAnswer : {}),
      text:
        (isRecord(entry.acceptedAnswer) ? nonEmptyString(entry.acceptedAnswer.text) : undefined) ??
        base.hasPart[index]?.acceptedAnswer?.text ??
        "",
    },
  }));
  merged.name = props.name;
  merged.learningResourceType = nonEmptyString(base.learningResourceType) ?? merged.learningResourceType;
  return merged;
}

export function Course(props: CourseProps) {
  const structuredData = buildCourseStructuredData(props);
  const meta = [
    props.provider?.name ? { label: "Provider", value: props.provider.name } : null,
    props.duration ? { label: "Duration", value: props.duration } : null,
    props.educationalLevel ? { label: "Level", value: props.educationalLevel } : null,
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CourseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="course"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow}
        description={props.description}
        meta={meta}
        imageSrc={firstImage(props.image)}
        imageAlt={props.name}
        body={
          <>
            {props.body}
            {props.modules?.length ? (
              <section className="lander-semantic__section">
                <h2>Modules</h2>
                <ol className="lander-semantic__module-list">
                  {props.modules.map((module, index) => (
                    <li className="lander-semantic__module-card" key={`${module.title}-${index}`}>
                      <strong>{module.title}</strong>
                      {module.summary ? <p>{module.summary}</p> : null}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
            {props.viewModel?.outcomes?.length ? (
              <section className="lander-semantic__section">
                <h2>Outcomes</h2>
                <div className="lander-semantic__outcomes-list">{bodyList(props.viewModel.outcomes)}</div>
              </section>
            ) : null}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CourseInstance(props: CourseInstanceProps) {
  const base: CourseInstanceStructuredDataInput = {
    name: props.name,
    description: props.description,
    courseMode: props.courseMode,
    startDate: props.startDate,
    endDate: props.endDate,
    location: props.location,
    instructor: props.instructor ? { "@type": "Person", name: props.instructor.name } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CourseInstanceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="course-instance"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Course instance"}
        description={props.description}
        meta={[
          props.courseMode ? { label: "Mode", value: props.courseMode } : null,
          props.startDate ? { label: "Starts", value: props.startDate } : null,
          props.endDate ? { label: "Ends", value: props.endDate } : null,
          props.location ? { label: "Location", value: props.location } : null,
          props.instructor?.name ? { label: "Instructor", value: props.instructor.name } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Quiz(props: QuizProps) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const structuredData = buildQuizStructuredData(props);
  const accordionMode = props.viewModel?.revealMode === "accordion";
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuizStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="quiz"
        title={props.name}
        description={props.description}
        body={
          <>
            {props.viewModel?.intro}
            {props.body}
            <div className="lander-page__assessment-grid lander-semantic__quiz-grid">
              {props.questions.map((question, index) => {
                const isRevealed = Boolean(revealed[index]);
                return (
                  <article className="lander-page__card lander-page__flashcard lander-semantic__quiz-card" key={`${question.prompt}-${index}`}>
                    <span className="lander-page__card-link-label lander-semantic__quiz-kicker">Q{index + 1}</span>
                    <h2>{question.prompt}</h2>
                    {question.alternatives?.length ? <div className="lander-semantic__quiz-alternatives">{bodyList(question.alternatives)}</div> : null}
                    <div className="lander-page__flashcard-answer lander-semantic__quiz-response">
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
          </>
        }
        footer={props.viewModel?.outro}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function QAPage(props: QAPageProps) {
  const base: QaPageStructuredDataInput = {
    question: props.question,
    answer: props.answer,
    acceptedAnswer: props.acceptedAnswer,
    suggestedAnswer: props.suggestedAnswer,
    answerCount: props.answerCount,
    eduQuestionType: props.eduQuestionType,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QAPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="qa-page"
        title={props.question}
        eyebrow={props.viewModel?.eyebrow ?? "Q&A"}
        meta={[
          props.eduQuestionType ? { label: "Question type", value: props.eduQuestionType } : null,
          props.answerCount !== undefined ? { label: "Answer count", value: String(props.answerCount) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.answer ? <p>{props.answer}</p> : null}
            {props.acceptedAnswer?.text ? (
              <div className="lander-semantic__accepted-answer">
                <strong>Accepted answer:</strong> {props.acceptedAnswer.text}
              </div>
            ) : null}
            {props.suggestedAnswer?.length ? (
              <div className="lander-semantic__suggested-answer-list">{bodyList(props.suggestedAnswer.map((item) => item.text))}</div>
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
            {props.acceptedAnswer?.text ? (
              <div className="lander-semantic__accepted-answer">
                <strong>Accepted answer:</strong> {props.acceptedAnswer.text}
              </div>
            ) : null}
            {props.suggestedAnswer?.length ? (
              <div className="lander-semantic__suggested-answer-list">{bodyList(props.suggestedAnswer.map((item) => item.text))}</div>
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

export function HowTo(props: HowToProps) {
  const base: HowToStructuredDataInput = {
    name: props.name,
    description: props.description,
    steps: props.steps,
    totalTime: props.totalTime,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How to"}
        description={props.description}
        meta={props.totalTime ? [{ label: "Total time", value: props.totalTime }] : undefined}
        body={
          <>
            {props.body}
            <ol className="lander-semantic__how-to-steps">
              {props.steps.map((step, index) => (
                <li className="lander-semantic__how-to-step" key={`${step.name}-${index}`}>
                  <strong>{step.name}</strong>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function LearningResource(props: LearningResourceProps) {
  const base: LearningResourceStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
    image: typeof props.image === "string" ? props.image : firstImage(props.image),
    learningResourceType: props.learningResourceType,
    educationalLevel: props.educationalLevel,
    teaches: props.teaches,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LearningResourceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="learning-resource"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Learning resource"}
        description={props.description}
        imageSrc={firstImage(props.image)}
        imageAlt={props.name}
        meta={[
          props.learningResourceType ? { label: "Resource type", value: props.learningResourceType } : null,
          props.educationalLevel ? { label: "Level", value: props.educationalLevel } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {typeof props.teaches === "string" ? <p className="lander-semantic__teaches-inline">Teaches: {props.teaches}</p> : null}
            {Array.isArray(props.teaches) ? (
              <div className="lander-semantic__learning-resource-tags">{bodyList(props.teaches.map((value) => `Teaches: ${value}`))}</div>
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

export function MathSolver(props: MathSolverProps) {
  const base: MathSolverStructuredDataInput = {
    name: props.name,
    description: props.description,
    mathExpression: props.mathExpression,
    potentialAction: props.potentialAction?.map((action) => ({
      "@type": "SolveMathAction",
      target: action.target,
      "mathExpression-input": action.mathExpressionInput,
    })),
    learningResource: props.learningResource?.map((resource) => ({
      "@type": "LearningResource",
      name: resource.name,
      learningResourceType: resource.learningResourceType,
    })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MathSolverStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="math-solver"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Math solver"}
        description={props.description}
        body={
          <>
            {props.mathExpression ? <p className="lander-semantic__math-expression"><strong>Expression:</strong> {props.mathExpression}</p> : null}
            {props.potentialAction?.length ? (
              <div className="lander-semantic__math-targets">{bodyList(props.potentialAction.map((item) => `Target: ${item.target}`))}</div>
            ) : null}
            {props.learningResource?.length ? (
              <div className="lander-semantic__math-resources">{bodyList(props.learningResource.map((item) => item.name))}</div>
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

export function SolveMathAction(props: SolveMathActionProps) {
  const base: SolveMathActionStructuredDataInput = {
    target: props.target,
    mathExpressionInput: props.mathExpressionInput,
    eduQuestionType: props.eduQuestionType,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SolveMathActionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="solve-math-action"
        title={props.viewModel?.eyebrow ?? "Solve math action"}
        body={
          <div className="lander-semantic__solve-math-summary">
            <p><strong>Target:</strong> {props.target}</p>
            {props.mathExpressionInput ? <p><strong>Input:</strong> {props.mathExpressionInput}</p> : null}
            {props.eduQuestionType ? <p><strong>Question type:</strong> {renderJsonPreview(props.eduQuestionType)}</p> : null}
            {props.body}
          </div>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function FAQPage(props: FAQPageProps) {
  const base: FAQPageStructuredDataInput = {
    items: props.items,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.FAQPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="faq-page"
        title={props.heading ?? "Frequently Asked Questions"}
        eyebrow={props.viewModel?.eyebrow ?? "FAQ"}
        body={
          <>
            {props.body}
            <div className="lander-semantic__faq-list">
              {props.items.map((item) =>
                props.viewModel?.collapsible ? (
                  <details className="lander-semantic__faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ) : (
                  <article className="lander-semantic__faq-item" key={item.question}>
                    <h2>{item.question}</h2>
                    <p>{item.answer}</p>
                  </article>
                ),
              )}
            </div>
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
