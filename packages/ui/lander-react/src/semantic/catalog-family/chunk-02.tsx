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

export interface RecipeProps {
  name: string;
  description?: string;
  recipeIngredient: string[];
  recipeInstructions: string | Array<{ name: string; text: string }>;
  author?: { name: string };
  datePublished?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RecipeStructuredDataInput>;
}

export function Recipe(props: RecipeProps) {
  const base: RecipeStructuredDataInput = {
    name: props.name,
    description: props.description,
    recipeIngredient: props.recipeIngredient,
    recipeInstructions: props.recipeInstructions,
    author: props.author ? { "@type": "Person", name: props.author.name } : undefined,
    datePublished: props.datePublished,
    prepTime: props.prepTime,
    cookTime: props.cookTime,
    totalTime: props.totalTime,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const instructionList = typeof props.recipeInstructions === "string"
    ? <p>{props.recipeInstructions}</p>
    : (
      <ol className="lander-semantic__recipe-steps">
        {props.recipeInstructions.map((step, index) => (
          <li key={`${step.name}-${index}`} className="lander-semantic__recipe-step">
            <strong className="lander-semantic__recipe-step-name">{step.name}</strong>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    );
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RecipeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="recipe"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Recipe"}
        description={props.description}
        meta={[
          props.author?.name ? { label: "Author", value: props.author.name } : null,
          props.datePublished ? { label: "Published", value: props.datePublished } : null,
          props.prepTime ? { label: "Prep", value: props.prepTime } : null,
          props.cookTime ? { label: "Cook", value: props.cookTime } : null,
          props.totalTime ? { label: "Total", value: props.totalTime } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <h2>Ingredients</h2>
            <ul className="lander-semantic__ingredient-list">
              {props.recipeIngredient.map((ingredient) => (
                <li key={ingredient} className="lander-semantic__ingredient-chip">{ingredient}</li>
              ))}
            </ul>
            <h2>Instructions</h2>
            {instructionList}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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
              {props.applicationCategory ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Category</span>
                  <strong className="lander-semantic__app-spec-value">{props.applicationCategory}</strong>
                </div>
              ) : null}
              {props.operatingSystem ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Platform</span>
                  <strong className="lander-semantic__app-spec-value">{props.operatingSystem}</strong>
                </div>
              ) : null}
              {props.softwareVersion ? (
                <div className="lander-semantic__app-spec">
                  <span className="lander-semantic__app-spec-label">Version</span>
                  <strong className="lander-semantic__app-spec-value">{props.softwareVersion}</strong>
                </div>
              ) : null}
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

export function SoftwareApplication(props: SoftwareApplicationProps) {
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
        <structuredDataReact.SoftwareApplicationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("software-application", props)}
    </>
  );
}

export type RuntimePlatformProps = Omit<SoftwareApplicationProps, "structuredDataOverrides"> & {
  structuredDataOverrides?: Partial<RuntimePlatformStructuredDataInput>;
};

export function RuntimePlatform(props: RuntimePlatformProps) {
  const base: RuntimePlatformStructuredDataInput = {
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
        <structuredDataReact.RuntimePlatformStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {softwareAppShell("runtime-platform", {
        ...props,
        viewModel: { ...props.viewModel, eyebrow: props.viewModel?.eyebrow ?? "Runtime platform" },
      })}
    </>
  );
}
