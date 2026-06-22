import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type CourseInstanceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CourseInstanceStructuredData>["data"];

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
