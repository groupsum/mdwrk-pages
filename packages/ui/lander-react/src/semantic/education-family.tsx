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
type HowToItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToItemStructuredData>["data"];
type HowToSectionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToSectionStructuredData>["data"];
type HowToStepStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToStepStructuredData>["data"];
type HowToSupplyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToSupplyStructuredData>["data"];
type HowToToolStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToToolStructuredData>["data"];
type EducationalOccupationalCredentialStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EducationalOccupationalCredentialStructuredData>["data"];
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

export interface HowToItemProps {
  name?: string;
  requiredQuantity?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToItemStructuredDataInput>;
}

export interface HowToSectionProps {
  name: string;
  text?: string;
  steps?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToSectionStructuredDataInput>;
}

export interface HowToStepProps {
  name: string;
  text: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToStepStructuredDataInput>;
}

export interface HowToSupplyProps {
  name?: string;
  requiredQuantity?: string;
  estimatedCost?: string;
  position?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToSupplyStructuredDataInput>;
}

export interface HowToToolProps {
  name?: string;
  requiredQuantity?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToToolStructuredDataInput>;
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

export interface EducationalOccupationalCredentialProps {
  name: string;
  description?: string;
  credentialCategory?: string;
  recognizedBy?: { name: string; url?: string } | string;
  competencyRequired?: string[];
  educationalLevel?: string;
  occupationalCategory?: string | string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EducationalOccupationalCredentialStructuredDataInput>;
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

function pluralize(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
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
  const moduleCount = props.modules?.length ?? 0;
  const outcomeCount = props.viewModel?.outcomes?.length ?? 0;
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
            <section className="lander-semantic__course-overview">
              <div className="lander-semantic__course-stat-grid">
                <div className="lander-semantic__course-stat">
                  <span className="lander-semantic__section-kicker">Scope</span>
                  <strong>{moduleCount ? pluralize(moduleCount, "module") : "Self-paced track"}</strong>
                </div>
                <div className="lander-semantic__course-stat">
                  <span className="lander-semantic__section-kicker">Outcome</span>
                  <strong>{outcomeCount ? pluralize(outcomeCount, "goal") : "Applied practice"}</strong>
                </div>
                <div className="lander-semantic__course-stat">
                  <span className="lander-semantic__section-kicker">Format</span>
                  <strong>{props.educationalLevel ?? props.duration ?? "Guided learning"}</strong>
                </div>
              </div>
              {props.body ? <div className="lander-semantic__course-body-copy">{props.body}</div> : null}
            </section>
            {props.modules?.length ? (
              <section className="lander-semantic__section">
                <div className="lander-semantic__section-header">
                  <span className="lander-semantic__section-kicker">Curriculum</span>
                  <h2>Modules</h2>
                </div>
                <ol className="lander-semantic__module-list">
                  {props.modules.map((module, index) => (
                    <li className="lander-semantic__module-card" key={`${module.title}-${index}`}>
                      <span className="lander-semantic__module-index">Module {index + 1}</span>
                      <strong>{module.title}</strong>
                      {module.summary ? <p>{module.summary}</p> : null}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
            {props.viewModel?.outcomes?.length ? (
              <section className="lander-semantic__section">
                <div className="lander-semantic__section-header">
                  <span className="lander-semantic__section-kicker">Completion</span>
                  <h2>Outcomes</h2>
                </div>
                <ul className="lander-semantic__outcomes-list">
                  {props.viewModel.outcomes.map((outcome) => (
                    <li key={outcome} className="lander-semantic__outcome-chip">{outcome}</li>
                  ))}
                </ul>
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
        body={
          <>
            <div className="lander-semantic__session-facts">
              {props.startDate ? (
                <div className="lander-semantic__session-fact-card">
                  <span className="lander-semantic__section-kicker">Starts</span>
                  <strong>{props.startDate}</strong>
                </div>
              ) : null}
              {props.endDate ? (
                <div className="lander-semantic__session-fact-card">
                  <span className="lander-semantic__section-kicker">Ends</span>
                  <strong>{props.endDate}</strong>
                </div>
              ) : null}
              {props.location ? (
                <div className="lander-semantic__session-fact-card">
                  <span className="lander-semantic__section-kicker">Location</span>
                  <strong>{props.location}</strong>
                </div>
              ) : null}
              {props.instructor?.name ? (
                <div className="lander-semantic__session-fact-card">
                  <span className="lander-semantic__section-kicker">Instructor</span>
                  <strong>{props.instructor.name}</strong>
                </div>
              ) : null}
            </div>
            {props.body ? <div className="lander-semantic__session-body">{props.body}</div> : null}
          </>
        }
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
  const questionCount = props.questions.length;
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
            <section className="lander-semantic__assessment-brief">
              <div className="lander-semantic__assessment-stat">
                <span className="lander-semantic__section-kicker">Questions</span>
                <strong>{pluralize(questionCount, "question")}</strong>
              </div>
              <div className="lander-semantic__assessment-stat">
                <span className="lander-semantic__section-kicker">Mode</span>
                <strong>{accordionMode ? "Self-check reveal" : "Inline review"}</strong>
              </div>
            </section>
            {props.viewModel?.intro}
            {props.body}
            <div className="lander-page__assessment-grid lander-semantic__quiz-grid">
              {props.questions.map((question, index) => {
                const isRevealed = Boolean(revealed[index]);
                return (
                  <article className="lander-page__card lander-page__flashcard lander-semantic__quiz-card" key={`${question.prompt}-${index}`}>
                    <span className="lander-page__card-link-label lander-semantic__quiz-kicker">Q{index + 1}</span>
                    <h2>{question.prompt}</h2>
                    {question.alternatives?.length ? (
                      <div className="lander-semantic__quiz-alternatives">
                        <span className="lander-semantic__section-kicker">Consider</span>
                        {question.alternatives.map((alternative) => (
                          <div className="lander-semantic__quiz-option" key={alternative}>{alternative}</div>
                        ))}
                      </div>
                    ) : null}
                    <div className="lander-page__flashcard-answer lander-semantic__quiz-response">
                      <span className="lander-semantic__quiz-response-label">{isRevealed || !accordionMode ? "Answer" : "Hidden"}</span>
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
            <section className="lander-semantic__prompt-panel">
              <span className="lander-semantic__section-kicker">Prompt</span>
              <strong>{props.question}</strong>
              {props.answer ? <p>{props.answer}</p> : null}
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
            <section className="lander-semantic__how-to-overview">
              <div className="lander-semantic__how-to-stat">
                <span className="lander-semantic__section-kicker">Steps</span>
                <strong>{pluralize(props.steps.length, "step")}</strong>
              </div>
              {props.totalTime ? (
                <div className="lander-semantic__how-to-stat">
                  <span className="lander-semantic__section-kicker">Total time</span>
                  <strong>{props.totalTime}</strong>
                </div>
              ) : null}
            </section>
            {props.body}
            <div className="lander-semantic__section-header">
              <span className="lander-semantic__section-kicker">Execution</span>
              <h2>Steps</h2>
            </div>
            <ol className="lander-semantic__how-to-steps">
              {props.steps.map((step, index) => (
                <li className="lander-semantic__how-to-step" key={`${step.name}-${index}`}>
                  <span className="lander-semantic__how-to-step-kicker">Step {index + 1}</span>
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

export function HowToItem(props: HowToItemProps) {
  const base: HowToItemStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-item"
        title={props.name ?? "How-to item"}
        eyebrow={props.viewModel?.eyebrow ?? "How-to item"}
        meta={[
          props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function HowToSection(props: HowToSectionProps) {
  const base: HowToSectionStructuredDataInput = {
    name: props.name,
    text: props.text,
    position: props.position,
    url: props.url,
    steps: props.steps,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToSectionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
    <SemanticShell
        kind="how-to-section"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How-to section"}
        description={props.text}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.steps ? <p>{props.steps}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function HowToStep(props: HowToStepProps) {
  const base: HowToStepStructuredDataInput = {
    name: props.name,
    text: props.text,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToStepStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-step"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How-to step"}
        description={props.text}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function HowToSupply(props: HowToSupplyProps) {
  const base: HowToSupplyStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    estimatedCost: props.estimatedCost ? { "@type": "MonetaryAmount", name: props.estimatedCost } : undefined,
    position: props.position,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToSupplyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-supply"
        title={props.name ?? "How-to supply"}
        eyebrow={props.viewModel?.eyebrow ?? "Supply"}
        meta={[
          props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
          props.estimatedCost ? { label: "Estimated cost", value: props.estimatedCost } : null,
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}

export function HowToTool(props: HowToToolProps) {
  const base: HowToToolStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToToolStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-tool"
        title={props.name ?? "How-to tool"}
        eyebrow={props.viewModel?.eyebrow ?? "Tool"}
        meta={[
          props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
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
            <section className="lander-semantic__resource-rail">
              {props.learningResourceType ? (
                <div className="lander-semantic__resource-fact">
                  <span className="lander-semantic__section-kicker">Format</span>
                  <strong>{props.learningResourceType}</strong>
                </div>
              ) : null}
              {props.educationalLevel ? (
                <div className="lander-semantic__resource-fact">
                  <span className="lander-semantic__section-kicker">Level</span>
                  <strong>{props.educationalLevel}</strong>
                </div>
              ) : null}
            </section>
            {typeof props.teaches === "string" ? (
              <div className="lander-semantic__teaches-inline">
                <span className="lander-semantic__section-kicker">Teaches</span>
                <strong>{props.teaches}</strong>
              </div>
            ) : null}
            {Array.isArray(props.teaches) ? (
              <div className="lander-semantic__learning-resource-tags">
                {props.teaches.map((value) => (
                  <span className="lander-semantic__learning-tag" key={value}>{value}</span>
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

export function EducationalOccupationalCredential(props: EducationalOccupationalCredentialProps) {
  const competencyRequired = props.competencyRequired?.filter((entry) => entry.trim());
  const base: EducationalOccupationalCredentialStructuredDataInput = {
    name: props.name,
    description: props.description,
    credentialCategory: props.credentialCategory,
    recognizedBy: props.recognizedBy
      ? typeof props.recognizedBy === "string"
        ? { "@type": "Organization", name: props.recognizedBy }
        : { "@type": "Organization", name: props.recognizedBy.name, url: props.recognizedBy.url }
      : undefined,
    competencyRequired,
    educationalLevel: props.educationalLevel,
    occupationalCategory: props.occupationalCategory,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EducationalOccupationalCredentialStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="educational-occupational-credential"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Educational credential"}
        description={props.description}
        meta={[
          props.credentialCategory ? { label: "Category", value: props.credentialCategory } : null,
          props.educationalLevel ? { label: "Level", value: props.educationalLevel } : null,
          props.occupationalCategory ? { label: "Occupation", value: Array.isArray(props.occupationalCategory) ? props.occupationalCategory.join(", ") : props.occupationalCategory } : null,
          props.recognizedBy ? { label: "Recognized by", value: typeof props.recognizedBy === "string" ? props.recognizedBy : props.recognizedBy.name } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {competencyRequired?.length ? <div className="lander-semantic__learning-resource-teaches">{bodyList(competencyRequired)}</div> : null}
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
            <section className="lander-semantic__solver-brief">
              <div className="lander-semantic__solver-stat">
                <span className="lander-semantic__section-kicker">Targets</span>
                <strong>{pluralize(props.potentialAction?.length ?? 0, "target")}</strong>
              </div>
              <div className="lander-semantic__solver-stat">
                <span className="lander-semantic__section-kicker">Resources</span>
                <strong>{pluralize(props.learningResource?.length ?? 0, "resource")}</strong>
              </div>
            </section>
            {props.mathExpression ? (
              <div className="lander-semantic__math-expression">
                <span className="lander-semantic__section-kicker">Expression</span>
                <strong>{props.mathExpression}</strong>
              </div>
            ) : null}
            {props.potentialAction?.length ? (
              <div className="lander-semantic__math-targets">
                {props.potentialAction.map((item) => (
                  <div className="lander-semantic__math-panel" key={item.target}>
                    <span className="lander-semantic__section-kicker">Target</span>
                    <strong>{item.target}</strong>
                  </div>
                ))}
              </div>
            ) : null}
            {props.learningResource?.length ? (
              <div className="lander-semantic__math-resources">
                {props.learningResource.map((item) => (
                  <div className="lander-semantic__math-panel" key={item.name}>
                    <span className="lander-semantic__section-kicker">Resource</span>
                    <strong>{item.name}</strong>
                  </div>
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
            <div className="lander-semantic__solve-math-row">
              <span className="lander-semantic__section-kicker">Action</span>
              <strong>Evaluate expression</strong>
            </div>
            <div className="lander-semantic__solve-math-row">
              <span className="lander-semantic__section-kicker">Target</span>
              <strong>{props.target}</strong>
            </div>
            {props.mathExpressionInput ? (
              <div className="lander-semantic__solve-math-row">
                <span className="lander-semantic__section-kicker">Input</span>
                <strong>{props.mathExpressionInput}</strong>
              </div>
            ) : null}
            {props.eduQuestionType ? (
              <div className="lander-semantic__solve-math-row">
                <span className="lander-semantic__section-kicker">Question type</span>
                <strong>{renderJsonPreview(props.eduQuestionType)}</strong>
              </div>
            ) : null}
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
            <section className="lander-semantic__faq-overview">
              <div className="lander-semantic__faq-stat">
                <span className="lander-semantic__section-kicker">Questions</span>
                <strong>{pluralize(props.items.length, "question")}</strong>
              </div>
              <div className="lander-semantic__faq-stat">
                <span className="lander-semantic__section-kicker">Format</span>
                <strong>{props.viewModel?.collapsible ? "Collapsible review" : "Editorial list"}</strong>
              </div>
            </section>
            <div className="lander-semantic__faq-list">
              {props.items.map((item) =>
                props.viewModel?.collapsible ? (
                  <details className="lander-semantic__faq-item" key={item.question}>
                    <summary>
                      <span className="lander-semantic__faq-kicker">Question</span>
                      <strong>{item.question}</strong>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ) : (
                  <article className="lander-semantic__faq-item" key={item.question}>
                    <span className="lander-semantic__faq-kicker">Question</span>
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
