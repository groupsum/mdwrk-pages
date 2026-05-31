import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "./shared.js";

type CategoryCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CategoryCodeStructuredData>["data"];
type CategoryCodeSetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CategoryCodeSetStructuredData>["data"];
type ClassStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClassStructuredData>["data"];
type CredentialStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CredentialStructuredData>["data"];
type EnumerationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnumerationStructuredData>["data"];
type InteractionCounterStructuredDataInput = React.ComponentProps<typeof structuredDataReact.InteractionCounterStructuredData>["data"];
type IntegerStructuredDataInput = React.ComponentProps<typeof structuredDataReact.IntegerStructuredData>["data"];
type IntangibleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.IntangibleStructuredData>["data"];
type LanguageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LanguageStructuredData>["data"];
type ListItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ListItemStructuredData>["data"];
type MonetaryAmountStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MonetaryAmountStructuredData>["data"];
type NutritionInformationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.NutritionInformationStructuredData>["data"];
type PropertyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.PropertyStructuredData>["data"];
type PropertyValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.PropertyValueStructuredData>["data"];
type QuantitativeValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuantitativeValueStructuredData>["data"];
type QuantitativeValueDistributionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.QuantitativeValueDistributionStructuredData>["data"];
type RatingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RatingStructuredData>["data"];
type StructuredValueStructuredDataInput = React.ComponentProps<typeof structuredDataReact.StructuredValueStructuredData>["data"];
type TypeAndQuantityNodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TypeAndQuantityNodeStructuredData>["data"];
type UnitPriceSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.UnitPriceSpecificationStructuredData>["data"];
type ThingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ThingStructuredData>["data"];
type UrlStructuredDataInput = React.ComponentProps<typeof structuredDataReact.UrlStructuredData>["data"];
type WarrantyPromiseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WarrantyPromiseStructuredData>["data"];
type XPathTypeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.XPathTypeStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface CategoryCodeProps {
  name: string;
  description?: string;
  termCode?: string;
  codeValue?: string;
  inCodeSet?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CategoryCodeStructuredDataInput>;
}

export interface CategoryCodeSetProps {
  name: string;
  description?: string;
  hasCategoryCode?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CategoryCodeSetStructuredDataInput>;
}

export interface ClassProps {
  name: string;
  description?: string;
  supersededBy?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ClassStructuredDataInput>;
}

export interface CredentialProps {
  name: string;
  description?: string;
  credentialCategory?: string;
  recognizedBy?: string;
  validFor?: string;
  validIn?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CredentialStructuredDataInput>;
}

export interface ThingProps {
  name: string;
  description?: string;
  alternateName?: string;
  url?: string;
  sameAs?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ThingStructuredDataInput>;
}

export interface IntangibleProps {
  name: string;
  description?: string;
  alternateName?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<IntangibleStructuredDataInput>;
}

export interface StructuredValueProps {
  name: string;
  description?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<StructuredValueStructuredDataInput>;
}

export interface TypeAndQuantityNodeProps {
  name: string;
  description?: string;
  amountOfThisGood?: number | string;
  businessFunction?: string;
  typeOfGood?: string;
  unitCode?: string;
  unitText?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<TypeAndQuantityNodeStructuredDataInput>;
}

export interface UnitPriceSpecificationProps {
  name: string;
  description?: string;
  price?: number | string;
  priceCurrency?: string;
  unitCode?: string;
  unitText?: string;
  billingDuration?: number | string;
  referenceQuantity?: number | string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<UnitPriceSpecificationStructuredDataInput>;
}

export interface WarrantyPromiseProps {
  name: string;
  description?: string;
  durationOfWarranty?: number | string;
  warrantyScope?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WarrantyPromiseStructuredDataInput>;
}

export interface EnumerationProps {
  name: string;
  description?: string;
  supersededBy?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EnumerationStructuredDataInput>;
}

export interface IntegerProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<IntegerStructuredDataInput>;
}

export interface InteractionCounterProps {
  name?: string;
  description?: string;
  userInteractionCount?: number | string;
  interactionService?: string;
  interactionStatistic?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<InteractionCounterStructuredDataInput>;
}

export interface QuantitativeValueProps {
  name?: string;
  description?: string;
  value?: string | number | boolean;
  unitCode?: string;
  unitText?: string;
  minValue?: number | string;
  maxValue?: number | string;
  valueReference?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuantitativeValueStructuredDataInput>;
}

export interface QuantitativeValueDistributionProps {
  name?: string;
  currency?: string;
  median?: number | string;
  percentile10?: number | string;
  percentile25?: number | string;
  percentile75?: number | string;
  percentile90?: number | string;
  duration?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<QuantitativeValueDistributionStructuredDataInput>;
}

export interface MonetaryAmountProps {
  name?: string;
  currency?: string;
  value?: string | number | boolean;
  minValue?: number | string;
  maxValue?: number | string;
  validFrom?: string;
  validThrough?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MonetaryAmountStructuredDataInput>;
}

export interface RatingProps {
  name?: string;
  ratingValue: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
  author?: string;
  reviewAspect?: string;
  ratingExplanation?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RatingStructuredDataInput>;
}

export interface LanguageProps {
  name: string;
  description?: string;
  alternateName?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<LanguageStructuredDataInput>;
}

export interface ListItemProps {
  name: string;
  description?: string;
  item?: string;
  position?: number | string;
  previousItem?: string;
  nextItem?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ListItemStructuredDataInput>;
}

export interface NutritionInformationProps {
  name: string;
  description?: string;
  servingSize?: string;
  calories?: string;
  carbohydrateContent?: string;
  proteinContent?: string;
  fatContent?: string;
  sugarContent?: string;
  sodiumContent?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<NutritionInformationStructuredDataInput>;
}

export interface PropertyProps {
  name: string;
  description?: string;
  domainIncludes?: string[];
  rangeIncludes?: string[];
  inverseOf?: string;
  supersededBy?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<PropertyStructuredDataInput>;
}

export interface PropertyValueProps {
  name: string;
  description?: string;
  propertyID?: string;
  value?: string | number | boolean;
  unitCode?: string;
  unitText?: string;
  minValue?: number | string;
  maxValue?: number | string;
  measurementMethod?: string;
  measurementTechnique?: string;
  valueReference?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<PropertyValueStructuredDataInput>;
}

export interface URLProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<UrlStructuredDataInput>;
}

export interface XPathTypeProps {
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<XPathTypeStructuredDataInput>;
}

export type UrlProps = URLProps;

export function Thing(props: ThingProps) {
  const base: ThingStructuredDataInput = {
    name: props.name,
    description: props.description,
    alternateName: props.alternateName,
    url: props.url,
    sameAs: props.sameAs,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ThingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="thing"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Thing"}
        description={props.description}
        meta={[
          props.alternateName ? { label: "Alternate name", value: props.alternateName } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.sameAs?.length ? <div className="lander-semantic__thing-same-as">{bodyList(props.sameAs)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CategoryCode(props: CategoryCodeProps) {
  const base: CategoryCodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    termCode: props.termCode,
    codeValue: props.codeValue,
    inCodeSet: ref("CategoryCodeSet", props.inCodeSet),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CategoryCodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="category-code"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Category code"}
        description={props.description}
        meta={[
          props.termCode ? { label: "Term code", value: props.termCode } : null,
          props.codeValue ? { label: "Code value", value: props.codeValue } : null,
          props.inCodeSet ? { label: "Code set", value: props.inCodeSet } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CategoryCodeSet(props: CategoryCodeSetProps) {
  const base: CategoryCodeSetStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasCategoryCode: props.hasCategoryCode?.map((entry) => ref("CategoryCode", entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CategoryCodeSetStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="category-code-set"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Category code set"}
        description={props.description}
        body={<>{props.hasCategoryCode?.length ? <div className="lander-semantic__category-code-set-list">{bodyList(props.hasCategoryCode)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Class(props: ClassProps) {
  const base: ClassStructuredDataInput = {
    name: props.name,
    description: props.description,
    supersededBy: ref("Class", props.supersededBy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ClassStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="class"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Class"}
        description={props.description}
        meta={props.supersededBy ? [{ label: "Superseded by", value: props.supersededBy }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Credential(props: CredentialProps) {
  const base: CredentialStructuredDataInput = {
    name: props.name,
    description: props.description,
    credentialCategory: props.credentialCategory,
    recognizedBy: ref("Organization", props.recognizedBy),
    validFor: props.validFor,
    validIn: ref("AdministrativeArea", props.validIn),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CredentialStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="credential"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Credential"}
        description={props.description}
        meta={[
          props.credentialCategory ? { label: "Category", value: props.credentialCategory } : null,
          props.recognizedBy ? { label: "Recognized by", value: props.recognizedBy } : null,
          props.validFor ? { label: "Valid for", value: props.validFor } : null,
          props.validIn ? { label: "Valid in", value: props.validIn } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Intangible(props: IntangibleProps) {
  const base: IntangibleStructuredDataInput = {
    name: props.name,
    description: props.description,
    alternateName: props.alternateName,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.IntangibleStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="intangible"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Intangible"}
        description={props.description}
        meta={props.alternateName ? [{ label: "Alternate name", value: props.alternateName }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function StructuredValue(props: StructuredValueProps) {
  const base: StructuredValueStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.StructuredValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="structured-value"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Structured value"}
        description={props.description}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function TypeAndQuantityNode(props: TypeAndQuantityNodeProps) {
  const base: TypeAndQuantityNodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    amountOfThisGood: props.amountOfThisGood,
    typeOfGood: ref("Product", props.typeOfGood),
    unitCode: props.unitCode,
    unitText: props.unitText,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.TypeAndQuantityNodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="type-and-quantity-node"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Type and quantity node"}
        description={props.description}
        meta={[
          props.amountOfThisGood !== undefined ? { label: "Amount", value: String(props.amountOfThisGood) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.typeOfGood ? <p>{props.typeOfGood}</p> : null}
            {props.businessFunction ? <p>{props.businessFunction}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function UnitPriceSpecification(props: UnitPriceSpecificationProps) {
  const base: UnitPriceSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    price: props.price,
    priceCurrency: props.priceCurrency,
    unitCode: props.unitCode,
    unitText: props.unitText,
    billingDuration: props.billingDuration,
    referenceQuantity: props.referenceQuantity,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.UnitPriceSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="unit-price-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Unit price specification"}
        description={props.description}
        meta={[
          props.price !== undefined ? { label: "Price", value: String(props.price) } : null,
          props.priceCurrency ? { label: "Currency", value: props.priceCurrency } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.billingDuration !== undefined ? <p>Billing duration: {String(props.billingDuration)}</p> : null}
            {props.referenceQuantity !== undefined ? <p>Reference quantity: {String(props.referenceQuantity)}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function WarrantyPromise(props: WarrantyPromiseProps) {
  const base: WarrantyPromiseStructuredDataInput = {
    name: props.name,
    description: props.description,
    durationOfWarranty: props.durationOfWarranty,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WarrantyPromiseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="warranty-promise"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Warranty promise"}
        description={props.description}
        meta={[
          props.durationOfWarranty !== undefined ? { label: "Duration", value: String(props.durationOfWarranty) } : null,
          props.warrantyScope ? { label: "Scope", value: props.warrantyScope } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Enumeration(props: EnumerationProps) {
  const base: EnumerationStructuredDataInput = {
    name: props.name,
    description: props.description,
    supersededBy: ref("Enumeration", props.supersededBy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EnumerationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="enumeration"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Enumeration"}
        description={props.description}
        meta={props.supersededBy ? [{ label: "Superseded by", value: props.supersededBy }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Integer(props: IntegerProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.IntegerStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="integer"
        title={props.label ?? "Integer"}
        eyebrow={props.viewModel?.eyebrow ?? "Integer"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function QuantitativeValue(props: QuantitativeValueProps) {
  const title = props.name ?? "Quantitative value";
  const base: QuantitativeValueStructuredDataInput = {
    name: props.name,
    description: props.description,
    value: props.value,
    unitCode: props.unitCode,
    unitText: props.unitText,
    minValue: props.minValue,
    maxValue: props.maxValue,
    valueReference: ref("Thing", props.valueReference),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuantitativeValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="quantitative-value"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Quantitative value"}
        description={props.description}
        meta={[
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
            ) : null}
            {props.valueReference ? <p>Reference: {props.valueReference}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function QuantitativeValueDistribution(props: QuantitativeValueDistributionProps) {
  const title = props.name ?? "Quantitative value distribution";
  const base: QuantitativeValueDistributionStructuredDataInput = {
    name: props.name,
    currency: props.currency,
    median: props.median,
    percentile10: props.percentile10,
    percentile25: props.percentile25,
    percentile75: props.percentile75,
    percentile90: props.percentile90,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.QuantitativeValueDistributionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="quantitative-value-distribution"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Quantitative value distribution"}
        meta={[
          props.currency ? { label: "Currency", value: props.currency } : null,
          props.duration ? { label: "Duration", value: props.duration } : null,
          props.median !== undefined ? { label: "Median", value: String(props.median) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            <p>
              {props.percentile10 !== undefined ? `P10 ${props.percentile10}` : null}
              {props.percentile25 !== undefined ? ` | P25 ${props.percentile25}` : null}
              {props.percentile75 !== undefined ? ` | P75 ${props.percentile75}` : null}
              {props.percentile90 !== undefined ? ` | P90 ${props.percentile90}` : null}
            </p>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MonetaryAmount(props: MonetaryAmountProps) {
  const title = props.name ?? "Monetary amount";
  const base: MonetaryAmountStructuredDataInput = {
    name: props.name,
    currency: props.currency,
    value: props.value,
    minValue: props.minValue,
    maxValue: props.maxValue,
    validFrom: props.validFrom,
    validThrough: props.validThrough,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MonetaryAmountStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="monetary-amount"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Monetary amount"}
        meta={[
          props.currency ? { label: "Currency", value: props.currency } : null,
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
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

export function Rating(props: RatingProps) {
  const title = props.name ?? "Rating";
  const base: RatingStructuredDataInput = {
    name: props.name,
    ratingValue: props.ratingValue,
    bestRating: props.bestRating,
    worstRating: props.worstRating,
    author: ref("Organization", props.author),
    reviewAspect: props.reviewAspect,
    ratingExplanation: props.ratingExplanation,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RatingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="rating"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Rating"}
        meta={[
          { label: "Rating value", value: String(props.ratingValue) },
          props.bestRating !== undefined ? { label: "Best", value: String(props.bestRating) } : null,
          props.worstRating !== undefined ? { label: "Worst", value: String(props.worstRating) } : null,
          props.author ? { label: "Author", value: props.author } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.reviewAspect ? <p>Aspect: {props.reviewAspect}</p> : null}
            {props.ratingExplanation ? <p>{props.ratingExplanation}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function InteractionCounter(props: InteractionCounterProps) {
  const title = props.name ?? "Interaction counter";
  const base: InteractionCounterStructuredDataInput = {
    name: props.name,
    description: props.description,
    userInteractionCount: props.userInteractionCount,
    interactionService: ref("WebSite", props.interactionService),
    interactionStatistic: ref("InteractionCounter", props.interactionStatistic),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.InteractionCounterStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="interaction-counter"
        title={title}
        eyebrow={props.viewModel?.eyebrow ?? "Interaction counter"}
        description={props.description}
        meta={[
          props.userInteractionCount !== undefined ? { label: "Count", value: String(props.userInteractionCount) } : null,
          props.interactionService ? { label: "Service", value: props.interactionService } : null,
          props.interactionStatistic ? { label: "Statistic", value: props.interactionStatistic } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Language(props: LanguageProps) {
  const base: LanguageStructuredDataInput = {
    name: props.name,
    description: props.description,
    alternateName: props.alternateName,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LanguageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="language"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Language"}
        description={props.description}
        meta={props.alternateName ? [{ label: "Alternate name", value: props.alternateName }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ListItem(props: ListItemProps) {
  const base: ListItemStructuredDataInput = {
    name: props.name,
    description: props.description,
    item: ref("Thing", props.item),
    position: props.position,
    previousItem: ref("ListItem", props.previousItem),
    nextItem: ref("ListItem", props.nextItem),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ListItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="list-item"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "List item"}
        description={props.description}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.item ? { label: "Item", value: props.item } : null,
          props.previousItem ? { label: "Previous", value: props.previousItem } : null,
          props.nextItem ? { label: "Next", value: props.nextItem } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function NutritionInformation(props: NutritionInformationProps) {
  const base: NutritionInformationStructuredDataInput = {
    name: props.name,
    description: props.description,
    servingSize: props.servingSize,
    calories: props.calories,
    carbohydrateContent: props.carbohydrateContent,
    proteinContent: props.proteinContent,
    fatContent: props.fatContent,
    sugarContent: props.sugarContent,
    sodiumContent: props.sodiumContent,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.NutritionInformationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="nutrition-information"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Nutrition information"}
        description={props.description}
        meta={[
          props.servingSize ? { label: "Serving size", value: props.servingSize } : null,
          props.calories ? { label: "Calories", value: props.calories } : null,
          props.carbohydrateContent ? { label: "Carbs", value: props.carbohydrateContent } : null,
          props.proteinContent ? { label: "Protein", value: props.proteinContent } : null,
          props.fatContent ? { label: "Fat", value: props.fatContent } : null,
          props.sugarContent ? { label: "Sugar", value: props.sugarContent } : null,
          props.sodiumContent ? { label: "Sodium", value: props.sodiumContent } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Property(props: PropertyProps) {
  const base: PropertyStructuredDataInput = {
    name: props.name,
    description: props.description,
    domainIncludes: props.domainIncludes?.map((entry) => ref("Class", entry)),
    inverseOf: ref("Property", props.inverseOf),
    rangeIncludes: props.rangeIncludes?.map((entry) => ref("Class", entry)),
    supersededBy: ref("Property", props.supersededBy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.PropertyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="property"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Property"}
        description={props.description}
        meta={[
          props.inverseOf ? { label: "Inverse of", value: props.inverseOf } : null,
          props.supersededBy ? { label: "Superseded by", value: props.supersededBy } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.domainIncludes?.length ? <div className="lander-semantic__property-domain">{bodyList(props.domainIncludes)}</div> : null}
            {props.rangeIncludes?.length ? <div className="lander-semantic__property-range">{bodyList(props.rangeIncludes)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function PropertyValue(props: PropertyValueProps) {
  const base: PropertyValueStructuredDataInput = {
    name: props.name,
    description: props.description,
    propertyID: props.propertyID,
    value: props.value,
    unitCode: props.unitCode,
    unitText: props.unitText,
    minValue: props.minValue,
    maxValue: props.maxValue,
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
    valueReference: ref("Thing", props.valueReference),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.PropertyValueStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="property-value"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Property value"}
        description={props.description}
        meta={[
          props.propertyID ? { label: "Property ID", value: props.propertyID } : null,
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.unitCode ? { label: "Unit code", value: props.unitCode } : null,
          props.unitText ? { label: "Unit text", value: props.unitText } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {(props.minValue !== undefined || props.maxValue !== undefined) ? (
              <p>{props.minValue !== undefined ? `Min ${props.minValue}` : null}{props.minValue !== undefined && props.maxValue !== undefined ? " / " : null}{props.maxValue !== undefined ? `Max ${props.maxValue}` : null}</p>
            ) : null}
            {props.measurementMethod ? <p>Method: {props.measurementMethod}</p> : null}
            {props.measurementTechnique ? <p>Technique: {props.measurementTechnique}</p> : null}
            {props.valueReference ? <p>Reference: {props.valueReference}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function URL(props: URLProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.UrlStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="url"
        title={props.label ?? "URL"}
        eyebrow={props.viewModel?.eyebrow ?? "URL"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function XPathType(props: XPathTypeProps) {
  const structuredData = { ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.XPathTypeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="xpath-type"
        title={props.label ?? "XPathType"}
        eyebrow={props.viewModel?.eyebrow ?? "XPath type"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
