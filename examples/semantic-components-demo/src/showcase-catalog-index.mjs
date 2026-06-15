import { semanticFixtures } from "../../../packages/ui/lander-react/tests/semantic-fixtures.mjs";
import { governedFamilyEntries } from "./generated-governed-family-map.mjs";

export const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const curatedDescriptionsByName = {
  AboutPage: "About-page variant with entity framing.",
  AggregateRating: "Aggregate rating summary block.",
  Answer: "Answer block with lightweight attribution.",
  Article: "Primary editorial story shell.",
  BlogPosting: "Blog variant with the article visual pattern.",
  Book: "Book catalog entity.",
  BroadcastEvent: "Live broadcast event surface.",
  BreadcrumbList: "Breadcrumb navigation surface.",
  CheckoutPage: "Checkout-focused page shell.",
  ClaimReview: "Fact-check style editorial surface.",
  Clip: "Time-bounded video clip summary.",
  CollectionPage: "Collection page with curated entries.",
  ContactPage: "Contact page with direct channels.",
  Course: "Course overview with modules.",
  CourseInstance: "Scheduled offering of a course.",
  Dataset: "Dataset entity shell.",
  DiscussionForumPosting: "Discussion post shell with article-body semantics.",
  EmployerAggregateRating: "Employer reputation summary.",
  Event: "General event shell.",
  FAQPage: "FAQ landing surface.",
  HowTo: "Step-by-step procedural guide.",
  ImageObject: "Image asset shell.",
  ItemList: "Curated item list surface.",
  ItemPage: "Single-entity page shell.",
  JobPosting: "Job listing shell.",
  LearningResource: "General learning asset shell.",
  LocalBusiness: "Local business entity surface.",
  MathSolver: "Math assistance surface.",
  MemberProgram: "Membership program summary.",
  MerchantReturnPolicy: "Return-policy terms surface.",
  MonetaryAmountDistribution: "Compensation or price-range distribution.",
  Movie: "Movie-style media entity.",
  NewsArticle: "News-focused article wrapper.",
  OfferShippingDetails: "Shipping details summary.",
  Organization: "Organization identity shell.",
  Product: "Primary product offer shell.",
  ProductGroup: "Grouped product variants.",
  ProfilePage: "Person or entity profile page.",
  QAPage: "Question-and-answer landing surface.",
  Question: "Single question block with accepted answer.",
  Quiz: "Assessment shell with question cards.",
  ReadAction: "Read action surface.",
  RealEstateListing: "Real-estate listing page shell.",
  Recipe: "Recipe-style checklist shell.",
  Review: "Review surface for an item.",
  SearchResultsPage: "Search results page with query context.",
  SolveMathAction: "Action wrapper for math solving.",
  SoftwareApplication: "Software application landing shell.",
  SoftwareSourceCode: "Source-code catalog entry.",
  SpeakableSpecification: "Speakable content selector surface.",
  TechArticle: "Technical article specialization.",
  VacationRental: "Rental listing shell.",
  Vehicle: "Vehicle inventory surface.",
  VideoGallery: "Gallery shell for multiple videos.",
  VideoObject: "Video preview shell.",
  WebApplication: "Browser-oriented app shell.",
  WebPage: "Generic web page shell.",
  WebSite: "Site-level identity surface.",
};

const highlightFamilyOrder = [
  "Article family",
  "Education family",
  "Commerce family",
  "Media family",
  "Identity family",
  "Catalog family",
  "Page family",
];

const highlightFamilyDescriptions = {
  "Article family": "Editorial, publishing, discussion, and fact-check surfaces.",
  "Education family": "Courses, Q&A, quizzes, learning assets, and how-to flows.",
  "Commerce family": "Product, review, shipping, pricing, and return-policy semantics.",
  "Media family": "Video, clips, broadcasts, images, and movie-style media shells.",
  "Identity family": "Profiles, organizations, local entities, breadcrumbs, and site identity.",
  "Catalog family": "Datasets, recipes, software, rentals, vehicles, job posts, and action surfaces.",
  "Page family": "Specialized page variants for about, contact, listings, search, and galleries.",
};

const highlightNames = new Set([
  "Article",
  "NewsArticle",
  "Course",
  "Quiz",
  "QAPage",
  "HowTo",
  "Product",
  "Review",
  "AggregateRating",
  "VideoObject",
  "BroadcastEvent",
  "Movie",
  "Organization",
  "ProfilePage",
  "WebSite",
  "Dataset",
  "SoftwareApplication",
  "JobPosting",
  "AboutPage",
  "SearchResultsPage",
  "RealEstateListing",
]);

export const familyByName = new Map(governedFamilyEntries.map((entry) => [entry.name, entry.family]));
export const familySlugByName = new Map(governedFamilyEntries.map((entry) => [entry.name, entry.familySlug]));
const fixtureByName = new Map(semanticFixtures.map((fixture) => [fixture.name, fixture]));
const listingNamePattern = /(Listing|Rental|JobPosting)/;
const pageNamePattern = /(Page|Gallery|WebSite)$/;

export function surfaceFocusForName(name) {
  const isListing = listingNamePattern.test(name);
  const isPage = pageNamePattern.test(name);
  if (isPage && isListing) return "page-or-listing";
  if (isPage) return "page";
  if (isListing) return "listing";
  return "all";
}

export function matchesSurfaceFocus(entry, surface = "all") {
  if (surface === "all") return true;
  if (surface === "page") return entry.surfaceFocus === "page" || entry.surfaceFocus === "page-or-listing";
  if (surface === "listing") return entry.surfaceFocus === "listing" || entry.surfaceFocus === "page-or-listing";
  if (surface === "page-or-listing") return entry.surfaceFocus !== "all";
  return true;
}

function coreEntryFromFixture(fixture) {
  const family = familyByName.get(fixture.name) ?? "Unassigned family";
  return {
    name: fixture.name,
    exportName: fixture.name,
    family,
    familySlug: familySlugByName.get(fixture.name) ?? slugify(family),
    kind: "type",
    slug: slugify(fixture.name),
    surfaceFocus: surfaceFocusForName(fixture.name),
    description: curatedDescriptionsByName[fixture.name] ?? "Governed first-class semantic component.",
    visible: fixture.visible,
  };
}

const governedCoreEntries = semanticFixtures.map(coreEntryFromFixture);

const highlightsEntriesByFamily = highlightFamilyOrder.map((family) => ({
  family,
  familySlug: slugify(family),
  description: highlightFamilyDescriptions[family],
  entries: governedCoreEntries.filter((entry) => entry.family === family && highlightNames.has(entry.name)),
})).filter((group) => group.entries.length > 0);

function groupEntriesByFamily(entries) {
  const grouped = new Map();
  for (const entry of entries) {
    const family = entry.family;
    if (!grouped.has(family)) {
      grouped.set(family, {
        family,
        familySlug: entry.familySlug,
        description: `${family} surfaces from the governed authored runtime.`,
        entries: [],
      });
    }
    grouped.get(family).entries.push(entry);
  }
  return [...grouped.values()];
}

export function buildGovernedCoreGroups({ family = "all", search = "", surface = "all" } = {}) {
  const normalizedSearch = search.trim().toLowerCase();
  const filtered = governedCoreEntries.filter((entry) => {
    if (family !== "all" && entry.family !== family) return false;
    if (!matchesSurfaceFocus(entry, surface)) return false;
    if (!normalizedSearch) return true;
    return [
      entry.name,
      entry.description,
      entry.family,
      ...(entry.visible ?? []),
    ].join(" ").toLowerCase().includes(normalizedSearch);
  });

  return groupEntriesByFamily(filtered);
}

export const governedFamilyOptions = [
  { value: "all", label: "All families" },
  ...groupEntriesByFamily(governedCoreEntries).map((group) => ({ value: group.family, label: group.family })),
];

export const highlightsView = {
  mode: "highlights",
  title: "Curated semantic highlights",
  description: "A compact pass through the strongest authored examples before exploring the full generated surface.",
  groups: highlightsEntriesByFamily,
};

export { governedCoreEntries, highlightFamilyOrder };
