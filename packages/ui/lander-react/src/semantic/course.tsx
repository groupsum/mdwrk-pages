import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticStructuredDataGate, firstImage, isRecord, joinClassNames, mergeArrayByIndex, mergeRecordLike } from "./shared.js";

type CourseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CourseStructuredData>["data"];

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

function buildCourseStructuredData(props: CourseProps): CourseStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const baseInstances =
    props.duration || props.educationalLevel
      ? [
          {
            "@type": "CourseInstance",
            name: `${props.name} instance`,
            courseMode: props.educationalLevel,
          },
        ]
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
  merged.provider = isRecord(base.provider) ? mergeRecordLike(base.provider, props.structuredDataOverrides?.provider) : merged.provider;
  if (Array.isArray(base.hasCourseInstance)) {
    merged.hasCourseInstance = mergeArrayByIndex(
      base.hasCourseInstance.filter(isRecord),
      props.structuredDataOverrides?.hasCourseInstance,
    );
  }
  merged.name = props.name;
  return merged;
}

export function Course({
  name,
  description,
  provider,
  url,
  image,
  duration,
  educationalLevel,
  body,
  modules,
  viewModel,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
}: CourseProps) {
  const structuredData = buildCourseStructuredData({
    name,
    description,
    provider,
    url,
    image,
    duration,
    educationalLevel,
    body,
    modules,
    viewModel,
    className,
    emitStructuredData,
    structuredDataOverrides,
  });
  const heroImage = firstImage(image);

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CourseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <article className={joinClassNames("lander-semantic", "lander-semantic--course", className)}>
        <header className="lander-semantic__header">
          {viewModel?.eyebrow ? <p className="lander-semantic__eyebrow">{viewModel.eyebrow}</p> : null}
          <h1 className="lander-semantic__title">{name}</h1>
          {description ? <p className="lander-semantic__description">{description}</p> : null}
          {provider?.name || duration || educationalLevel ? (
            <p className="lander-semantic__meta">
              {provider?.name ? <span>Provider: {provider.name}</span> : null}
              {duration ? <span>Duration: {duration}</span> : null}
              {educationalLevel ? <span>Level: {educationalLevel}</span> : null}
            </p>
          ) : null}
        </header>
        {heroImage ? <img className="lander-semantic__image" src={heroImage} alt={name} /> : null}
        {body ? <div className="lander-semantic__body">{body}</div> : null}
        {modules?.length ? (
          <section className="lander-semantic__body lander-semantic__body--modules">
            <h2>Modules</h2>
            <ol>
              {modules.map((module, index) => (
                <li key={`${module.title}-${index}`}>
                  <strong>{module.title}</strong>
                  {module.summary ? <p>{module.summary}</p> : null}
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        {viewModel?.outcomes?.length ? (
          <section className="lander-semantic__body lander-semantic__body--outcomes">
            <h2>Outcomes</h2>
            <ul>
              {viewModel.outcomes.map((outcome, index) => (
                <li key={`${outcome}-${index}`}>{outcome}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {viewModel?.footer ? <footer className="lander-semantic__footer">{viewModel.footer}</footer> : null}
      </article>
    </>
  );
}
