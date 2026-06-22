import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  bodyList,
  creativeWorkReference,
  thingReference,
} from "../shared.js";

type BrandStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BrandStructuredData>["data"];
type CertificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CertificationStructuredData>["data"];
type ClaimStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClaimStructuredData>["data"];
type CommentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CommentStructuredData>["data"];
type ContactPointStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ContactPointStructuredData>["data"];
type CorrectionCommentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CorrectionCommentStructuredData>["data"];
type CountryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CountryStructuredData>["data"];
type CreativeWorkStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkStructuredData>["data"];
type CreativeWorkSeasonStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkSeasonStructuredData>["data"];
type CreativeWorkSeriesStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CreativeWorkSeriesStructuredData>["data"];
type EpisodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EpisodeStructuredData>["data"];
type FinancialProductStructuredDataInput = React.ComponentProps<typeof structuredDataReact.FinancialProductStructuredData>["data"];
type LoanOrCreditStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LoanOrCreditStructuredData>["data"];
type GeneStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GeneStructuredData>["data"];
type GrantStructuredDataInput = React.ComponentProps<typeof structuredDataReact.GrantStructuredData>["data"];
type HyperTocEntryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HyperTocEntryStructuredData>["data"];
type MapStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MapStructuredData>["data"];
type OccupationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OccupationStructuredData>["data"];
type OccupationalExperienceRequirementsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OccupationalExperienceRequirementsStructuredData>["data"];
type TextObjectStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TextObjectStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface CommentProps {
  name: string;
  text?: string;
  author?: NamedRef | string;
  upvoteCount?: number;
  downvoteCount?: number;
  sharedContent?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CommentStructuredDataInput>;
}

export function Comment(props: CommentProps) {
  const base: CommentStructuredDataInput = {
    name: props.name,
    text: props.text,
    author: ref("Person", props.author),
    upvoteCount: props.upvoteCount,
    downvoteCount: props.downvoteCount,
    sharedContent: creativeWorkReference(props.sharedContent),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CommentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="comment"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Comment"}
        meta={[
          props.author ? { label: "Author", value: typeof props.author === "string" ? props.author : props.author.name } : null,
          props.upvoteCount !== undefined ? { label: "Upvotes", value: String(props.upvoteCount) } : null,
          props.downvoteCount !== undefined ? { label: "Downvotes", value: String(props.downvoteCount) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.sharedContent ? <p>Shared content: {props.sharedContent}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface ContactPointProps {
  name: string;
  description?: string;
  contactType?: string;
  email?: string;
  telephone?: string;
  areaServed?: string;
  availableLanguage?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ContactPointStructuredDataInput>;
}

export function ContactPoint(props: ContactPointProps) {
  const base: ContactPointStructuredDataInput = {
    name: props.name,
    description: props.description,
    contactType: props.contactType,
    email: props.email,
    telephone: props.telephone,
    areaServed: thingReference(props.areaServed),
    availableLanguage: props.availableLanguage,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ContactPointStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="contact-point"
        title={props.name ?? props.contactType ?? "Contact point"}
        eyebrow={props.viewModel?.eyebrow ?? "Contact point"}
        description={props.description}
        meta={[
          props.contactType ? { label: "Type", value: props.contactType } : null,
          props.email ? { label: "Email", value: props.email } : null,
          props.telephone ? { label: "Telephone", value: props.telephone } : null,
          props.areaServed ? { label: "Area served", value: props.areaServed } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.availableLanguage?.length ? <div className="lander-semantic__contact-languages">{bodyList(props.availableLanguage)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface CorrectionCommentProps {
  name: string;
  text?: string;
  author?: NamedRef | string;
  sharedContent?: string;
  upvoteCount?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CorrectionCommentStructuredDataInput>;
}

export function CorrectionComment(props: CorrectionCommentProps) {
  const base: CorrectionCommentStructuredDataInput = {
    name: props.name,
    text: props.text,
    author: ref("Person", props.author),
    upvoteCount: props.upvoteCount,
    sharedContent: creativeWorkReference(props.sharedContent),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CorrectionCommentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="correction-comment"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Correction"}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.sharedContent ? <p>Corrects: {props.sharedContent}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
