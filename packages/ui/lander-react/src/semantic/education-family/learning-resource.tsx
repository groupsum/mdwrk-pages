import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, firstImage } from "../shared.js";

type LearningResourceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LearningResourceStructuredData>["data"];

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
