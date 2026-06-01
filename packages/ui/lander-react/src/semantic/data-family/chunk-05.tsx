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

export interface MassProps {
  id?: string;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MassStructuredDataInput>;
}

export function Mass(props: MassProps) {
  const base: MassStructuredDataInput = { id: props.id };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MassStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="mass"
        title={props.label ?? props.id ?? "Mass"}
        eyebrow={props.viewModel?.eyebrow ?? "Mass"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface EnergyConsumptionDetailsProps {
  name: string;
  description?: string;
  energyEfficiencyScaleMax?: string;
  energyEfficiencyScaleMin?: string;
  hasEnergyEfficiencyCategory?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EnergyConsumptionDetailsStructuredDataInput>;
}

export function EnergyConsumptionDetails(props: EnergyConsumptionDetailsProps) {
  const base: EnergyConsumptionDetailsStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EnergyConsumptionDetailsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="energy-consumption-details"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Energy consumption"}
        description={props.description}
        meta={[
          props.hasEnergyEfficiencyCategory ? { label: "Category", value: props.hasEnergyEfficiencyCategory } : null,
          props.energyEfficiencyScaleMin ? { label: "Scale min", value: props.energyEfficiencyScaleMin } : null,
          props.energyEfficiencyScaleMax ? { label: "Scale max", value: props.energyEfficiencyScaleMax } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface HealthPlanCostSharingSpecificationProps {
  name?: string;
  description?: string;
  healthPlanCoinsuranceOption?: string;
  healthPlanCoinsuranceRate?: number | string;
  healthPlanCopay?: string;
  healthPlanCopayOption?: string;
  healthPlanPharmacyCategory?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HealthPlanCostSharingSpecificationStructuredDataInput>;
}

export function HealthPlanCostSharingSpecification(props: HealthPlanCostSharingSpecificationProps) {
  const base: HealthPlanCostSharingSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    healthPlanCoinsuranceOption: props.healthPlanCoinsuranceOption,
    healthPlanCoinsuranceRate: props.healthPlanCoinsuranceRate,
    healthPlanCopay: props.healthPlanCopay ? { "@type": "PriceSpecification", name: props.healthPlanCopay } : undefined,
    healthPlanCopayOption: props.healthPlanCopayOption,
    healthPlanPharmacyCategory: props.healthPlanPharmacyCategory,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HealthPlanCostSharingSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="health-plan-cost-sharing-specification"
        title={props.name ?? "Health plan cost sharing"}
        eyebrow={props.viewModel?.eyebrow ?? "Cost sharing"}
        description={props.description}
        meta={[
          props.healthPlanCoinsuranceOption ? { label: "Coinsurance option", value: props.healthPlanCoinsuranceOption } : null,
          props.healthPlanCoinsuranceRate !== undefined ? { label: "Coinsurance rate", value: String(props.healthPlanCoinsuranceRate) } : null,
          props.healthPlanCopay ? { label: "Copay", value: props.healthPlanCopay } : null,
          props.healthPlanCopayOption ? { label: "Copay option", value: props.healthPlanCopayOption } : null,
          props.healthPlanPharmacyCategory ? { label: "Pharmacy category", value: props.healthPlanPharmacyCategory } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
