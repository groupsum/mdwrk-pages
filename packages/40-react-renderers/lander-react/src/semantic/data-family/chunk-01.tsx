import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, thingReference } from "../shared.js";

type DataCatalogStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataCatalogStructuredData>["data"];
type DataDownloadStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataDownloadStructuredData>["data"];
type DataFeedStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataFeedStructuredData>["data"];
type DataFeedItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataFeedItemStructuredData>["data"];
type DefinedRegionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedRegionStructuredData>["data"];
type DefinedTermStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedTermStructuredData>["data"];
type DefinedTermSetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedTermSetStructuredData>["data"];
type DeliveryChargeSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DeliveryChargeSpecificationStructuredData>["data"];
type DemandStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DemandStructuredData>["data"];
type DurationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DurationStructuredData>["data"];
type EnergyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnergyStructuredData>["data"];
type EnergyConsumptionDetailsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnergyConsumptionDetailsStructuredData>["data"];
type MassStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MassStructuredData>["data"];
type HealthInsurancePlanStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthInsurancePlanStructuredData>["data"];
type HealthPlanCostSharingSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanCostSharingSpecificationStructuredData>["data"];
type HealthPlanFormularyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanFormularyStructuredData>["data"];
type HealthPlanNetworkStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanNetworkStructuredData>["data"];
type LocationFeatureSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LocationFeatureSpecificationStructuredData>["data"];
type StatisticalVariableStructuredDataInput = React.ComponentProps<typeof structuredDataReact.StatisticalVariableStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface DataCatalogProps {
  name: string;
  description?: string;
  dataset?: Array<string | NamedRef>;
  measurementMethod?: string;
  measurementTechnique?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataCatalogStructuredDataInput>;
}

export function DataCatalog(props: DataCatalogProps) {
  const base: DataCatalogStructuredDataInput = {
    name: props.name,
    description: props.description,
    dataset: props.dataset?.map((entry) => ref("Dataset", entry)),
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataCatalogStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-catalog"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Data catalog"}
        description={props.description}
        meta={[
          props.measurementMethod ? { label: "Method", value: props.measurementMethod } : null,
          props.measurementTechnique ? { label: "Technique", value: props.measurementTechnique } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.dataset?.length ? <div className="lander-semantic__data-catalog-datasets">{bodyList(props.dataset.map((entry) => typeof entry === "string" ? entry : entry.name))}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DataDownloadProps {
  name: string;
  description?: string;
  contentUrl?: string;
  encodingFormat?: string;
  measurementMethod?: string;
  measurementTechnique?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataDownloadStructuredDataInput>;
}

export function DataDownload(props: DataDownloadProps) {
  const base: DataDownloadStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    encodingFormat: props.encodingFormat,
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataDownloadStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-download"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Data download"}
        description={props.description}
        meta={[
          props.contentUrl ? { label: "Content URL", value: props.contentUrl } : null,
          props.encodingFormat ? { label: "Format", value: props.encodingFormat } : null,
          props.measurementMethod ? { label: "Method", value: props.measurementMethod } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.measurementTechnique ? <p>{props.measurementTechnique}</p> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DataFeedItemProps {
  name?: string;
  item?: string;
  dateCreated?: string;
  dateModified?: string;
  dateDeleted?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataFeedItemStructuredDataInput>;
}

export function DataFeedItem(props: DataFeedItemProps) {
  const base: DataFeedItemStructuredDataInput = {
    name: props.name,
    item: thingReference(props.item),
    dateCreated: props.dateCreated,
    dateModified: props.dateModified,
    dateDeleted: props.dateDeleted,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataFeedItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-feed-item"
        title={props.name ?? "Data feed item"}
        eyebrow={props.viewModel?.eyebrow ?? "Feed item"}
        meta={[
          props.item ? { label: "Item", value: props.item } : null,
          props.dateCreated ? { label: "Created", value: props.dateCreated } : null,
          props.dateModified ? { label: "Updated", value: props.dateModified } : null,
          props.dateDeleted ? { label: "Deleted", value: props.dateDeleted } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
