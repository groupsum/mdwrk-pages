import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, firstImage, renderJsonPreview } from "../shared.js";

type DatasetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DatasetStructuredData>["data"];
type ItemListStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ItemListStructuredData>["data"];
type BookStructuredDataInput = React.ComponentProps<typeof structuredDataReact.BookStructuredData>["data"];
type RecipeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RecipeStructuredData>["data"];
type SoftwareApplicationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareApplicationStructuredData>["data"];
type RuntimePlatformStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RuntimePlatformStructuredData>["data"];
type OperatingSystemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OperatingSystemStructuredData>["data"];
type SoftwareSourceCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SoftwareSourceCodeStructuredData>["data"];
type VacationRentalStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VacationRentalStructuredData>["data"];
type VehicleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VehicleStructuredData>["data"];
type JobPostingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.JobPostingStructuredData>["data"];
type ReadActionTarget = React.ComponentProps<typeof structuredDataReact.ReadActionStructuredData>["target"];
type EventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EventStructuredData>["data"];
type MenuItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MenuItemStructuredData>["data"];
type MenuSectionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MenuSectionStructuredData>["data"];
type ProductModelStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProductModelStructuredData>["data"];
type TaxonStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TaxonStructuredData>["data"];

export interface SoftwareApplicationProps {
  name: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  softwareVersion?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SoftwareApplicationStructuredDataInput>;
}

function softwareAppShell(kind: string, props: SoftwareApplicationProps) {
  return (
    <SemanticShell
      kind={kind}
      title={props.name}
      eyebrow={props.viewModel?.eyebrow ?? (kind === "web-application" ? "Web application" : "Software application")}
      description={props.description}
      meta={[
        props.applicationCategory ? { label: "Category", value: props.applicationCategory } : null,
        props.operatingSystem ? { label: "Operating system", value: props.operatingSystem } : null,
        props.softwareVersion ? { label: "Version", value: props.softwareVersion } : null,
      ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
      body={
        <>
          {(props.applicationCategory || props.operatingSystem || props.softwareVersion) ? (
            <div className="lander-semantic__app-spec-grid">
              {props.applicationCategory ? <div className="lander-semantic__app-spec"><span className="lander-semantic__app-spec-label">Category</span><strong className="lander-semantic__app-spec-value">{props.applicationCategory}</strong></div> : null}
              {props.operatingSystem ? <div className="lander-semantic__app-spec"><span className="lander-semantic__app-spec-label">Platform</span><strong className="lander-semantic__app-spec-value">{props.operatingSystem}</strong></div> : null}
              {props.softwareVersion ? <div className="lander-semantic__app-spec"><span className="lander-semantic__app-spec-label">Version</span><strong className="lander-semantic__app-spec-value">{props.softwareVersion}</strong></div> : null}
            </div>
          ) : null}
          {props.body}
        </>
      }
      footer={props.viewModel?.footer}
      className={props.className}
    />
  );
}

export type OperatingSystemProps = Omit<SoftwareApplicationProps, "structuredDataOverrides"> & {
  structuredDataOverrides?: Partial<OperatingSystemStructuredDataInput>;
};

export function OperatingSystem(props: OperatingSystemProps) {
  const base: OperatingSystemStructuredDataInput = {
    name: props.name,
    description: props.description,
    applicationCategory: props.applicationCategory,
    operatingSystem: props.operatingSystem,
    softwareVersion: props.softwareVersion,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OperatingSystemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("operating-system", {
        ...props,
        viewModel: { ...props.viewModel, eyebrow: props.viewModel?.eyebrow ?? "Operating system" },
      })}
    </>
  );
}

export interface WebApplicationProps extends SoftwareApplicationProps {}

export function WebApplication(props: WebApplicationProps) {
  const base: SoftwareApplicationStructuredDataInput = {
    name: props.name,
    description: props.description,
    applicationCategory: props.applicationCategory,
    operatingSystem: props.operatingSystem,
    softwareVersion: props.softwareVersion,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebApplicationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("web-application", props)}
    </>
  );
}

export interface SoftwareSourceCodeProps {
  name: string;
  description?: string;
  codeRepository?: string;
  programmingLanguage?: string | string[];
  runtimePlatform?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SoftwareSourceCodeStructuredDataInput>;
}

export function SoftwareSourceCode(props: SoftwareSourceCodeProps) {
  const base: SoftwareSourceCodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    codeRepository: props.codeRepository,
    programmingLanguage: props.programmingLanguage,
    runtimePlatform: props.runtimePlatform,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SoftwareSourceCodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="software-source-code"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Software source code"}
        description={props.description}
        meta={[
          props.codeRepository ? { label: "Repository", value: props.codeRepository } : null,
          props.runtimePlatform ? { label: "Runtime", value: props.runtimePlatform } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {Array.isArray(props.programmingLanguage) ? (
              <ul className="lander-semantic__language-list">
                {props.programmingLanguage.map((language) => (
                  <li key={language} className="lander-semantic__language-chip">{language}</li>
                ))}
              </ul>
            ) : null}
            {typeof props.programmingLanguage === "string" ? <p className="lander-semantic__language-inline">{props.programmingLanguage}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
