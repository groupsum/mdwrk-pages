import {
  getStructuredDataSchemaAssetMap,
  getStructuredDataSchemaByType,
  listStructuredDataSchemas,
  validateStructuredDataByType,
} from "../../../contracts/lander-content-contract/dist/index.js";

const structuredDataAssetMap = getStructuredDataSchemaAssetMap();
const supportedObjectKinds = listStructuredDataSchemas()
  .map((entry) => entry.type)
  .filter((entry) => /^[A-Z]/u.test(entry));

function assetKeyFromEntryAssetPath(assetPath) {
  return assetPath.replace(/^\.\/schemas\//u, "");
}

function resolveAssetPath(currentAssetPath, ref) {
  const currentDir = currentAssetPath.split("/").slice(0, -1).join("/");
  const combined = currentDir ? `${currentDir}/${ref}` : ref;
  return combined.split("/").reduce((parts, segment) => {
    if (!segment || segment === ".") return parts;
    if (segment === "..") {
      parts.pop();
      return parts;
    }
    parts.push(segment);
    return parts;
  }, []).join("/");
}

function sampleForResolvedSchema(assetPath, schema, kind, seen = new Set()) {
  const visitKey = `${assetPath}::${schema?.$id ?? schema?.title ?? kind}`;
  if (seen.has(visitKey)) return undefined;
  seen.add(visitKey);

  if (!schema || typeof schema !== "object") return undefined;
  if (typeof schema.$ref === "string") {
    const nextAssetPath = resolveAssetPath(assetPath, schema.$ref);
    return sampleForResolvedSchema(nextAssetPath, structuredDataAssetMap[nextAssetPath], kind, seen);
  }
  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length > 0) return schema.enum[0];
  if (Array.isArray(schema.oneOf) && schema.oneOf.length) {
    return sampleForResolvedSchema(assetPath, schema.oneOf[0], kind, seen);
  }
  if (Array.isArray(schema.anyOf) && schema.anyOf.length) {
    return sampleForResolvedSchema(assetPath, schema.anyOf[0], kind, seen);
  }
  if (Array.isArray(schema.allOf) && schema.allOf.length) {
    const branchValues = schema.allOf
      .map((branch) => sampleForResolvedSchema(assetPath, branch, kind, seen))
      .filter((value) => value !== undefined);
    const objectValues = branchValues.filter((value) => value && typeof value === "object" && !Array.isArray(value));
    if (objectValues.length) return Object.assign({}, ...objectValues);
    return branchValues[0];
  }
  if (schema.type === "boolean") return true;
  if (schema.type === "number" || schema.type === "integer") return 1;
  if (schema.type === "string") return `${kind} sample`;
  if (schema.type === "array") {
    return [sampleForResolvedSchema(assetPath, schema.items ?? {}, kind, seen)].filter((value) => value !== undefined);
  }
  if (schema.type === "object" || schema.properties) {
    const result = {};
    for (const key of schema.required ?? []) {
      if (key === "@context") {
        result[key] = "https://schema.org";
        continue;
      }
      const propertySchema = schema.properties?.[key];
      const value = sampleForResolvedSchema(assetPath, propertySchema ?? {}, kind, seen);
      if (value !== undefined) result[key] = value;
    }
    if (schema.properties?.["@type"]?.const && result["@type"] === undefined) result["@type"] = schema.properties["@type"].const;
    if (schema.properties?.name && result.name === undefined) result.name = kind;
    if (schema.properties?.text && result.text === undefined) result.text = `${kind} sample`;
    return result;
  }
  return undefined;
}

function inferredSchemaType(assetPath, schema, seen = new Set()) {
  const visitKey = `${assetPath}::${schema?.$id ?? schema?.title ?? "schema-type"}`;
  if (!schema || typeof schema !== "object" || seen.has(visitKey)) return undefined;
  seen.add(visitKey);
  if (schema.properties?.["@type"]?.const) return schema.properties["@type"].const;
  if (typeof schema.$ref === "string") {
    return inferredSchemaType(resolveAssetPath(assetPath, schema.$ref), structuredDataAssetMap[resolveAssetPath(assetPath, schema.$ref)], seen);
  }
  for (const branch of schema.allOf ?? []) {
    const inferred = inferredSchemaType(assetPath, branch, seen);
    if (inferred) return inferred;
  }
  return undefined;
}

function directRefTargetType(schema) {
  if (!schema || typeof schema !== "object" || typeof schema.$ref !== "string") return undefined;
  const match = schema.$ref.match(/\/types\/([^/]+)\.schema\.json$/u) ?? schema.$ref.match(/([^/]+)\.schema\.json$/u);
  return match?.[1];
}

function generatedDefaultDataForKind(kind) {
  const entry = getStructuredDataSchemaByType(kind);
  if (!entry) throw new Error(`Unhandled intent kind fixture: ${kind}`);
  const entryAssetPath = assetKeyFromEntryAssetPath(entry.assetPath);
  const sample = sampleForResolvedSchema(entryAssetPath, entry.schema, kind);
  const inferredType = inferredSchemaType(entryAssetPath, entry.schema);
  const directRefType = directRefTargetType(entry.schema);
  const candidates = [
    sample,
    kind === "Boolean" ? true : undefined,
    kind === "Number" || kind === "Quantity" ? 1 : undefined,
    kind === "Date" ? "2026-05-31" : undefined,
    kind === "DateTime" ? "2026-05-31T12:00:00Z" : undefined,
    kind === "Time" ? "12:00:00Z" : undefined,
    `${kind} sample`,
    [`${kind} sample`],
    [[`${kind} sample`]],
    { "@type": "Thing", name: `${kind} sample` },
    [{ "@type": "Thing", name: `${kind} sample` }],
    { "@type": "CreativeWork", name: `${kind} sample` },
    { "@type": "DefinedRegion", name: `${kind} sample` },
    { "@type": "QuantitativeValue", value: 1 },
    directRefType ? { "@type": directRefType, name: `${kind} sample` } : undefined,
    directRefType ? { "@type": directRefType } : undefined,
    inferredType ? { "@type": inferredType, name: `${kind} sample` } : undefined,
    inferredType ? { "@type": inferredType } : undefined,
    { "@type": kind, name: kind },
  ].filter((value) => value !== undefined);

  for (const candidate of candidates) {
    if (validateStructuredDataByType(kind, candidate).length === 0) return candidate;
  }

  for (const candidateKind of supportedObjectKinds) {
    const candidate = { "@type": candidateKind, name: `${candidateKind} sample` };
    if (validateStructuredDataByType(kind, candidate).length === 0) return candidate;
  }

  throw new Error(`Unhandled intent kind fixture: ${kind}`);
}

export function defaultDataForKind(kind) {
  switch (kind) {
    case "Action":
      return { name: kind, target: "https://mdwrk.test/docs" };
    case "AdministrativeArea":
      return { name: kind, containedInPlace: { "@type": "Place", name: "United States" } };
    case "AboutPage":
      return { name: kind, url: "https://mdwrk.test/about", about: { "@type": "Organization", name: "MdWrk" } };
    case "AggregateOffer":
      return { name: kind, lowPrice: "10.00", highPrice: "30.00", offerCount: 3, offers: [{ "@type": "Offer", price: "10.00", priceCurrency: "USD" }] };
    case "Thing":
      return { name: kind, sameAs: ["https://mdwrk.test/thing"] };
    case "Intangible":
      return { name: kind, description: "Non-physical asset." };
    case "StructuredValue":
      return { name: kind, description: "Structured record." };
    case "AggregateRating":
    case "EmployerAggregateRating":
      return { ratingValue: 5, reviewCount: 1 };
    case "AlignmentObject":
      return { name: kind, alignmentType: "educationalSubject", targetName: "Prompt operations" };
    case "Answer":
      return { text: "A." };
    case "Article":
    case "NewsArticle":
    case "TechArticle":
    case "BlogPosting":
      return { name: kind, url: `https://mdwrk.test/${kind.toLowerCase()}`, headline: kind };
    case "Audience":
      return { name: kind, audienceType: "Prompt operators", geographicArea: { "@type": "AdministrativeArea", name: "Illinois" } };
    case "AudioObject":
      return { name: kind, contentUrl: "https://mdwrk.test/audio.mp3", transcript: "Release transcript." };
    case "Brand":
      return { name: kind, slogan: "Prompt systems that ship.", review: [{ "@type": "Review", name: "Trusted by release teams." }] };
    case "BroadcastChannel":
      return { name: kind, broadcastChannelId: "CH-7", providesBroadcastService: { "@type": "BroadcastService", name: "Prompt Radio" } };
    case "BroadcastFrequencySpecification":
      return { name: kind, broadcastFrequencyValue: 101.7, broadcastSignalModulation: "QAM" };
    case "BroadcastService":
      return { name: kind, broadcastDisplayName: "Prompt Radio 101", areaServed: { "@type": "AdministrativeArea", name: "Illinois" }, hasBroadcastChannel: [{ "@type": "BroadcastChannel", name: "Primary channel" }] };
    case "CategoryCode":
      return { name: kind, termCode: "PO-1", codeValue: "prompt-ops" };
    case "CategoryCodeSet":
      return { name: kind, hasCategoryCode: [{ "@type": "CategoryCode", name: "PromptOps" }] };
    case "CableOrSatelliteService":
      return { name: kind, areaServed: { "@type": "AdministrativeArea", name: "Midwest" }, provider: { "@type": "Organization", name: "MdWrk" } };
    case "Class":
      return { name: kind, description: "A top-level modeled class." };
    case "Book":
      return { name: kind, url: "https://mdwrk.test/book" };
    case "BroadcastEvent":
      return { name: kind, startDate: "2026-05-23T10:00:00Z", isLiveBroadcast: true };
    case "BreadcrumbList":
      return { items: [{ label: "Home", href: "https://mdwrk.test/" }] };
    case "Certification":
      return { name: kind, certificationIdentification: "CERT-42", issuedBy: { "@type": "Organization", name: "MdWrk" } };
    case "Claim":
      return { name: kind, text: "Latency is below target.", appearance: [{ "@type": "CreativeWork", name: "Benchmark report" }] };
    case "CivicStructure":
      return { name: kind, publicAccess: true, openingHours: ["Mo-Fr 09:00-17:00"] };
    case "Comment":
      return { name: kind, text: "Looks good.", author: { "@type": "Person", name: "MdWrk" }, upvoteCount: 3 };
    case "ConstraintNode":
      return { name: kind, constraintProperty: "deliveryStage", numConstraints: 3 };
    case "ContactPoint":
      return { name: kind, contactType: "Support", email: "support@mdwrk.test", availableLanguage: ["English"] };
    case "CorrectionComment":
      return { name: kind, text: "The previous metric was stale.", sharedContent: { "@type": "CreativeWork", name: "Release report" } };
    case "CheckoutPage":
      return { name: kind, url: "https://mdwrk.test/checkout", offers: [{ "@type": "Offer", price: "10.00", priceCurrency: "USD" }] };
    case "ClaimReview":
      return { name: kind, url: "https://mdwrk.test/claim-review", claimReviewed: "Claim" };
    case "Clip":
      return { name: kind, url: "https://mdwrk.test/video?t=10", startOffset: 10, endOffset: 20 };
    case "CollectionPage":
      return { name: kind, url: "https://mdwrk.test/collection", hasPart: [{ "@type": "Article", name: "Entry" }] };
    case "ContactPage":
      return { name: kind, url: "https://mdwrk.test/contact", significantLinks: ["https://mdwrk.test/contact/email"] };
    case "Course":
      return { name: kind, url: "https://mdwrk.test/course" };
    case "CourseInstance":
      return { name: kind, url: "https://mdwrk.test/course-instance" };
    case "Country":
      return { name: kind, containedInPlace: { "@type": "Place", name: "North America" } };
    case "CreativeWork":
      return { name: kind, text: "Visible body text.", author: { "@type": "Person", name: "MdWrk" } };
    case "CreativeWorkSeason":
      return { name: kind, seasonNumber: 1, numberOfEpisodes: 8, episode: [{ "@type": "Episode", name: "Episode 1" }] };
    case "CreativeWorkSeries":
      return { name: kind, issn: "1234-5678", startDate: "2025-01-01" };
    case "Credential":
      return { name: kind, credentialCategory: "badge", recognizedBy: { "@type": "Organization", name: "MdWrk" } };
    case "CreditCard":
      return { name: kind, interestRate: 14.9, feesAndCommissionsSpecification: "No annual fee." };
    case "CssSelectorType":
      return {};
    case "DataCatalog":
      return { name: kind, dataset: [{ "@type": "Dataset", name: "Release metrics" }], measurementMethod: "survey" };
    case "DataDownload":
      return { name: kind, contentUrl: "https://mdwrk.test/export.csv", encodingFormat: "text/csv" };
    case "DataFeed":
      return { name: kind, dataFeedElement: [{ "@type": "DataFeedItem", name: "Release one" }], dateModified: "2026-05-27" };
    case "DataFeedItem":
      return { name: "Release one", item: { "@type": "Thing", name: "Prompt Studio" }, dateCreated: "2026-05-27" };
    case "Dataset":
      return { name: kind, url: "https://mdwrk.test/dataset" };
    case "DefinedRegion":
      return { name: kind, addressCountry: "US", postalCodePrefix: "60" };
    case "DefinedTerm":
      return { name: kind, termCode: "PD-01", about: { "@type": "Thing", name: "Model behavior change" } };
    case "DefinedTermSet":
      return { name: kind, hasDefinedTerm: [{ "@type": "DefinedTerm", name: "Prompt drift" }] };
    case "DeliveryChargeSpecification":
      return { name: kind, price: "15.00", priceCurrency: "USD" };
    case "Demand":
      return { name: kind, itemOffered: { "@type": "Product", name: "Prompt Studio Enterprise" }, seller: { "@type": "Organization", name: "MdWrk" } };
    case "Distance":
      return {};
    case "DiscussionForumPosting":
      return { name: kind, url: "https://mdwrk.test/discussion" };
    case "Duration":
      return {};
    case "EducationalOccupationalCredential":
      return { name: kind, credentialCategory: "badge", educationalLevel: "Intermediate", competencyRequired: ["Prompt validation"] };
    case "EducationalOrganization":
      return { name: kind, url: "https://mdwrk.test/academy", address: "Chicago, IL" };
    case "Energy":
      return {};
    case "EnergyConsumptionDetails":
      return { name: kind, description: "Efficiency profile." };
    case "EntryPoint":
      return { name: kind, urlTemplate: "https://mdwrk.test/api/prompts/{id}", httpMethod: "GET" };
    case "Enumeration":
      return { name: kind, description: "Enumeration of prompt states." };
    case "Episode":
      return { name: kind, episodeNumber: 1, partOfSeries: { "@type": "CreativeWorkSeries", name: "Prompt Ops Series" } };
    case "Event":
      return { name: kind, url: "https://mdwrk.test/event", startDate: "2026-05-23" };
    case "FAQPage":
      return { items: [{ question: "Q?", answer: "A." }] };
    case "FinancialProduct":
      return { name: kind, annualPercentageRate: 18.2, provider: { "@type": "Organization", name: "MDWRK Finance" } };
    case "Gene":
      return { name: kind, hasBioPolymerSequence: "ATCGATCG", associatedDisease: [{ "@type": "MedicalCondition", name: "Prompt fatigue" }] };
    case "GeoCoordinates":
      return { latitude: 41.8781, longitude: -87.6298, addressCountry: "US" };
    case "GeospatialGeometry":
      return { name: kind, geoContains: { "@type": "Place", name: "Chicago" }, geoWithin: { "@type": "Place", name: "Illinois" } };
    case "GeoShape":
      return { box: "41.8 -87.7 41.9 -87.6", addressCountry: "US" };
    case "Grant":
      return { name: kind, fundedItem: [{ "@type": "CreativeWork", name: "Prompt research" }] };
    case "HyperTocEntry":
      return { name: kind, text: "Jump here.", position: 1, target: { "@type": "Thing", name: "Section A", url: "https://mdwrk.test/guide#a" } };
    case "HealthInsurancePlan":
      return { name: kind, healthPlanId: "HIOS-12345", contactPoint: { "@type": "ContactPoint", name: "Support" }, healthPlanDrugTier: "Generic" };
    case "HealthPlanCostSharingSpecification":
      return { name: kind, healthPlanCoinsuranceRate: 0.2, healthPlanCopay: { "@type": "PriceSpecification", price: "25.00", priceCurrency: "USD" } };
    case "HealthPlanFormulary":
      return { name: kind, healthPlanDrugTier: "Generic", offersPrescriptionByMail: true };
    case "HealthPlanNetwork":
      return { name: kind, healthPlanNetworkId: "NW-100", healthPlanNetworkTier: "Tier 1" };
    case "HowTo":
      return { name: kind, url: "https://mdwrk.test/how-to", steps: [{ name: "Step", text: "Do it." }] };
    case "HowToItem":
      return { name: kind, requiredQuantity: "1" };
    case "HowToSection":
      return { name: kind, steps: "Gather materials." };
    case "HowToStep":
      return { name: kind, text: "Do it.", position: 1 };
    case "HowToSupply":
      return { name: kind, requiredQuantity: "2 sheets", estimatedCost: { "@type": "MonetaryAmount", name: "$5" } };
    case "HowToTool":
      return { name: kind, requiredQuantity: "1" };
    case "ImageGallery":
      return { name: kind, url: "https://mdwrk.test/image-gallery", hasPart: [{ "@type": "ImageObject", name: "Overview panel" }] };
    case "ImageObject":
      return { name: kind, url: "https://mdwrk.test/image.png" };
    case "InteractionCounter":
      return { name: kind, userInteractionCount: 42, interactionService: { "@type": "WebSite", name: "Docs" } };
    case "Integer":
      return {};
    case "QuantitativeValue":
      return { name: kind, value: 120, unitText: "ms" };
    case "QuantitativeValueDistribution":
      return { name: kind, median: 130, percentile10: 100, percentile90: 180 };
    case "MonetaryAmount":
      return { name: kind, currency: "USD", value: 5000 };
    case "Rating":
      return { name: kind, ratingValue: 4.8, author: { "@type": "Organization", name: "MdWrk" } };
    case "ItemPage":
      return { name: kind, url: "https://mdwrk.test/item", mainEntity: { "@type": "Thing", name: "Item" } };
    case "ItemList":
      return { name: kind, items: [{ name: "Item 1", url: "https://mdwrk.test/item-1" }] };
    case "JobPosting":
      return { name: kind, title: kind, url: "https://mdwrk.test/job", datePosted: "2026-05-23", hiringOrganization: { "@type": "Organization", name: "MdWrk" } };
    case "Language":
      return { name: kind, alternateName: "en-US" };
    case "LifestyleModification":
      return { name: kind, code: { "@type": "MedicalCode", name: "LM-1" } };
    case "ListItem":
      return { name: kind, item: { "@type": "Thing", name: "Prompt audit" }, position: 1 };
    case "LoanOrCredit":
      return { name: kind, amount: "25000", loanTerm: "P24M", requiredCollateral: "Laptop inventory" };
    case "LearningResource":
      return { name: kind, url: "https://mdwrk.test/learning-resource", learningResourceType: "Math Solver", teaches: ["Algebra"] };
    case "LocalBusiness":
    case "Movie":
    case "MusicAlbum":
    case "MusicComposition":
    case "MusicGroup":
    case "MusicPlaylist":
    case "MusicRecording":
    case "MusicRelease":
    case "Product":
    case "ProductGroup":
    case "ProductModel":
    case "ProfilePage":
    case "VacationRental":
    case "Vehicle":
    case "WebPage":
    case "WebSite":
    case "Organization":
    case "SoftwareApplication":
    case "WebApplication":
    case "SoftwareSourceCode":
      return { name: kind, url: `https://mdwrk.test/${kind.toLowerCase()}` };
    case "MathSolver":
      return { name: kind, url: "https://mdwrk.test/math", mathExpression: "1+1" };
    case "LocationFeatureSpecification":
      return { name: kind, propertyID: "entrance_access", value: true, hoursAvailable: ["Mo-Fr 09:00-17:00"] };
    case "Map":
      return { name: kind, text: "Level one and level two.", mapType: "Venue" };
    case "Mass":
      return {};
    case "MedicalAudience":
      return { name: kind, audienceType: "Adult patients" };
    case "MedicalCause":
      return { name: kind };
    case "MedicalCode":
      return { name: kind, codeValue: "M-CODE-1", codingSystem: "ICD-10" };
    case "MedicalCondition":
      return { name: kind };
    case "MedicalConditionStage":
      return { name: kind };
    case "MedicalContraindication":
      return { name: kind };
    case "MedicalDevice":
      return { name: kind };
    case "MedicalEntity":
      return { name: kind };
    case "MedicalGuideline":
      return { name: kind };
    case "MedicalIntangible":
      return { name: kind };
    case "MedicalProcedure":
      return { name: kind };
    case "MedicalRiskFactor":
      return { name: kind };
    case "MedicalSign":
      return { name: kind };
    case "MedicalSignOrSymptom":
      return { name: kind };
    case "MedicalStudy":
      return { name: kind, status: "Active" };
    case "MedicalTest":
      return { name: kind };
    case "MedicalTherapy":
      return { name: kind };
    case "MedicalWebPage":
      return { name: kind, url: "https://mdwrk.test/medical-page", lastReviewed: "2026-05-31" };
    case "MediaGallery":
      return { name: kind, url: "https://mdwrk.test/media-gallery", hasPart: [{ "@type": "MediaObject", name: "Walkthrough clip" }] };
    case "MediaObject":
      return { name: kind, contentUrl: "https://mdwrk.test/media.mp4", encodingFormat: "video/mp4" };
    case "MediaSubscription":
      return { name: kind, authenticatingAuthority: { "@type": "Organization", name: "MDWRK ID" }, expectsAcceptanceOf: [{ "@type": "Thing", name: "Terms of service" }] };
    case "MenuItem":
      return { name: kind, offers: [{ "@type": "Offer", name: "Cup", price: "6.00", priceCurrency: "USD" }], suitableForDiet: ["https://schema.org/VegetarianDiet"] };
    case "MenuSection":
      return { name: kind, hasMenuItem: [{ "@type": "MenuItem", name: "Launch latte" }] };
    case "MemberProgram":
      return { name: kind, url: "https://mdwrk.test/member-program" };
    case "MaximumDoseSchedule":
      return { name: kind, doseUnit: "mg", frequency: "daily" };
    case "MemberProgramTier":
      return { name: kind, membershipPointsRequired: 5000, hasTierBenefit: ["Priority support"] };
    case "MerchantReturnPolicy":
    case "OfferShippingDetails":
      return { name: kind };
    case "MerchantReturnPolicySeasonalOverride":
      return { name: kind, merchantReturnDays: 60, startDate: "2026-11-15", endDate: "2027-01-15" };
    case "NutritionInformation":
      return { name: kind, servingSize: "1 bar", calories: "200 kcal", proteinContent: "10 g" };
    case "Occupation":
      return { name: kind, educationRequirements: "BS or equivalent", skills: ["Prompt evaluation"] };
    case "OccupationalExperienceRequirements":
      return { name: kind, monthsOfExperience: 24, occupationalExperienceProperties: { "@type": "PropertyValue", name: "Incidents handled", value: 12 } };
    case "Offer":
      return { name: kind, price: "10.00", priceCurrency: "USD", seller: { "@type": "Organization", name: "MdWrk" } };
    case "OfferCatalog":
      return { name: kind, numberOfItems: 2, itemListElement: [{ "@type": "Offer", name: "Starter" }] };
    case "OpeningHoursSpecification":
      return { name: kind, opens: "09:00", closes: "17:00", dayOfWeek: ["Monday", "Tuesday"] };
    case "Property":
      return { name: kind, domainIncludes: [{ "@type": "Class", name: "PromptEntity" }], rangeIncludes: [{ "@type": "Class", name: "PromptStage" }] };
    case "PropertyValue":
      return { name: kind, value: 120, unitText: "ms" };
    case "MonetaryAmountDistribution":
      return { name: kind, currency: "USD", minValue: 1, maxValue: 2 };
    case "ProgramMembership":
      return { name: kind, hostingOrganization: { "@type": "Organization", name: "MdWrk" }, membershipNumber: "PM-42", programName: "Partners" };
    case "PublicationEvent":
      return { name: kind, publishedBy: { "@type": "Organization", name: "MdWrk" }, startDate: "2026-05-27T10:00:00Z" };
    case "RepaymentSpecification":
      return { name: kind, numberOfLoanPayments: 12, loanPaymentFrequency: 1 };
    case "QAPage":
      return { question: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, url: "https://mdwrk.test/qa" };
    case "Question":
      return { name: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, eduQuestionType: "Flashcard" };
    case "Quiz":
      return { name: kind, hasPart: [{ name: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, eduQuestionType: "Flashcard" }] };
    case "ReadAction":
      return { target: "https://mdwrk.test/book" };
    case "RealEstateListing":
      return { name: kind, url: "https://mdwrk.test/listing", offers: [{ "@type": "Offer", price: "3000", priceCurrency: "USD" }] };
    case "Recipe":
      return { name: kind, url: "https://mdwrk.test/recipe", recipeIngredient: ["salt"], recipeInstructions: "Mix." };
    case "Review":
      return { name: kind, url: "https://mdwrk.test/review", itemReviewed: { "@type": "Product", name: "Product" }, reviewBody: "Solid." };
    case "SearchResultsPage":
      return {
        name: kind,
        url: "https://mdwrk.test/search",
        significantLinks: ["https://mdwrk.test/search/result-1"],
      };
    case "Schedule":
      return { name: kind, repeatFrequency: "P1W", byDay: ["Monday"], startDate: "2026-05-27", endDate: "2026-06-27" };
    case "Series":
      return { name: kind, startDate: "2026-01-01", endDate: "2026-12-31" };
    case "Service":
      return { name: kind, serviceType: "Consulting", areaServed: { "@type": "AdministrativeArea", name: "Illinois" }, provider: { "@type": "Organization", name: "MdWrk" } };
    case "ServiceChannel":
      return { name: kind, processingTime: "P1D", serviceUrl: "https://mdwrk.test/support" };
    case "ServicePeriod":
      return { name: kind, cutoffTime: "17:00:00-05:00", startDate: "2026-05-27", endDate: "2026-06-27" };
    case "ShippingConditions":
      return { name: kind, shippingDestination: { "@type": "DefinedRegion", name: "US" }, shippingOrigin: { "@type": "Place", name: "Chicago" } };
    case "ShippingDeliveryTime":
      return { name: kind, cutoffTime: "17:00:00-05:00" };
    case "ShippingRateSettings":
      return { name: kind, shippingDestination: { "@type": "DefinedRegion", name: "US" } };
    case "ShippingService":
      return { name: kind, shippingConditions: { "@type": "Thing", name: "Standard conditions" } };
    case "SolveMathAction":
      return { target: "https://mdwrk.test/math?q={mathExpression}", mathExpressionInput: "required name=mathExpression", eduQuestionType: ["Algebra"] };
    case "StatisticalVariable":
      return { name: kind, measurementMethod: "count", measurementTechnique: "manual review", populationType: { "@type": "Class", name: "OperatorCohort" } };
    case "RuntimePlatform":
      return { name: kind, applicationCategory: "DeveloperApplication", operatingSystem: "Cross-platform" };
    case "OperatingSystem":
      return { name: kind, applicationCategory: "SystemApplication", softwareVersion: "1.0.0" };
    case "SpeakableSpecification":
      return { cssSelector: [".answer"] };
    case "XPathType":
      return {};
    case "URL":
      return {};
    case "SuperficialAnatomy":
      return { name: kind, associatedPathophysiology: "Localized inflammation." };
    case "Substance":
      return { name: kind, activeIngredient: "Caffeine" };
    case "Taxon":
      return { name: kind, parentTaxon: { "@type": "Taxon", name: "Automation" }, taxonRank: "family" };
    case "TherapeuticProcedure":
      return { name: kind };
    case "TextObject":
      return { name: kind, text: "Transcript body", encodingFormat: "text/plain" };
    case "Trip":
      return {
        name: kind,
        departureTime: "2026-06-10T09:00:00Z",
        arrivalTime: "2026-06-10T12:00:00Z",
        tripOrigin: { "@type": "Place", name: "Chicago" },
        itinerary: [{ "@type": "Place", name: "Austin" }],
        provider: { "@type": "Organization", name: "MdWrk" },
      };
    case "TypeAndQuantityNode":
      return {
        name: kind,
        amountOfThisGood: 2,
        typeOfGood: { "@type": "Product", name: "Prompt Device" },
        unitCode: "C62",
      };
    case "UnitPriceSpecification":
      return {
        name: kind,
        price: "29.00",
        priceCurrency: "USD",
        unitCode: "MON",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1 },
      };
    case "VirtualLocation":
      return { name: kind, url: "https://mdwrk.test/meet" };
    case "WarrantyPromise":
      return {
        name: kind,
        durationOfWarranty: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
      };
    case "WebContent":
      return { name: kind, text: "Visible body text.", author: { "@type": "Person", name: "MdWrk" } };
    case "WebPageElement":
      return { name: kind, text: "Top of page banner.", cssSelector: [".hero-banner"], xpath: ["//*[@id='hero-banner']"] };
    case "VideoGallery":
      return { name: kind, url: "https://mdwrk.test/gallery", video: [{ "@type": "VideoObject", name: "Demo" }] };
    case "VideoObject":
      return {
        name: kind,
        url: "https://mdwrk.test/video",
        thumbnailUrl: "https://mdwrk.test/video.png",
        uploadDate: "2026-05-23",
        clip: [{ name: "Key moment", url: "https://mdwrk.test/video?t=10", startOffset: 10, endOffset: 20 }],
        publication: [{ name: "Live stream", startDate: "2026-05-23T10:00:00Z", isLiveBroadcast: true }],
      };
    default:
      return generatedDefaultDataForKind(kind);
  }
}
