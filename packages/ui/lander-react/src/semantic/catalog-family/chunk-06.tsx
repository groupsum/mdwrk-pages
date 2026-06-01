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

export interface MenuSectionProps {
  name: string;
  description?: string;
  items?: Array<{ name: string; summary?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MenuSectionStructuredDataInput>;
}

export function MenuSection(props: MenuSectionProps) {
  const base: MenuSectionStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasMenuItem: props.items?.map((item) => ({ "@type": "MenuItem", name: item.name })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MenuSectionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="menu-section"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Menu section"}
        description={props.description}
        body={<>{props.items?.length ? <ul className="lander-semantic__item-list-grid">{props.items.map((item) => <li key={item.name} className="lander-semantic__item-card"><strong>{item.name}</strong>{item.summary ? <p>{item.summary}</p> : null}</li>)}</ul> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface ProductModelProps {
  name: string;
  description?: string;
  brand?: { name: string };
  model?: string;
  isVariantOf?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ProductModelStructuredDataInput>;
}

export function ProductModel(props: ProductModelProps) {
  const base: ProductModelStructuredDataInput = {
    name: props.name,
    description: props.description,
    brand: props.brand ? { "@type": "Brand", name: props.brand.name } : undefined,
    model: props.model,
    isVariantOf: props.isVariantOf ? { "@type": "ProductGroup", name: props.isVariantOf } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ProductModelStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="product-model"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Product model"}
        description={props.description}
        meta={[
          props.brand?.name ? { label: "Brand", value: props.brand.name } : null,
          props.model ? { label: "Model", value: props.model } : null,
          props.isVariantOf ? { label: "Variant of", value: props.isVariantOf } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface TaxonProps {
  name: string;
  description?: string;
  parentTaxon?: string;
  taxonRank?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<TaxonStructuredDataInput>;
}

export function Taxon(props: TaxonProps) {
  const base: TaxonStructuredDataInput = {
    name: props.name,
    description: props.description,
    parentTaxon: props.parentTaxon ? { "@type": "Taxon", name: props.parentTaxon } : undefined,
    taxonRank: props.taxonRank,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.TaxonStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="taxon"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Taxon"}
        description={props.description}
        meta={[
          props.parentTaxon ? { label: "Parent", value: props.parentTaxon } : null,
          props.taxonRank ? { label: "Rank", value: props.taxonRank } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
