# Structured Data Semantic Component Matrix

Legend:

- `✅` present
- `—` absent

Notes:

- `JSON-LD emitting React component` means the type-specific wrapper in `@mdwrk/lander-react-structured-data`.
- `JSON-LD emitting Visible Semantic React component` means a visible semantic component in `@mdwrk/lander-react` that renders UI and emits matching JSON-LD.
- `Fused` means the visible semantic component and JSON-LD emission are unified as one intended surface.
- `Fused ClassNames` means the fused visible component accepts `className?`.
- `Fused ClassName CSS Tokens` means there is a dedicated per-component CSS token file in `@mdwrk/pages-ui-tokens`.
- The current frontier fused semantic set is `Article`, `Product`, `Course`, and `Quiz`.

| Structured data type | JSON Schema? | JSON-LD emitting React component? | JSON-LD emitting Visible Semantic React component? | Fused? | Fused ClassNames | Fused ClassName CSS Tokens |
|---|---:|---:|---:|---:|---:|---:|
| `AggregateRating` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Answer` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Article` | `✅` | `✅` | `✅` | `✅` | `✅` | `✅` |
| `BlogPosting` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Book` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `BroadcastEvent` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `BreadcrumbList` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `ClaimReview` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Clip` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Course` | `✅` | `✅` | `✅` | `✅` | `✅` | `✅` |
| `CourseInstance` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Dataset` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `DiscussionForumPosting` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `EmployerAggregateRating` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Event` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `FAQPage` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `HowTo` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `ImageObject` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `ItemList` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `JobPosting` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `LearningResource` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `LocalBusiness` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `MathSolver` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `MemberProgram` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `MerchantReturnPolicy` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `MonetaryAmountDistribution` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Movie` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `NewsArticle` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `OfferShippingDetails` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Organization` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Product` | `✅` | `✅` | `✅` | `✅` | `✅` | `✅` |
| `ProductGroup` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `ProfilePage` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `QAPage` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Question` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Quiz` | `✅` | `✅` | `✅` | `✅` | `✅` | `✅` |
| `ReadAction` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Recipe` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Review` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `SolveMathAction` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `SoftwareApplication` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `SoftwareSourceCode` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `SpeakableSpecification` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `TechArticle` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `VacationRental` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `Vehicle` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `VideoObject` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `WebApplication` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `WebPage` | `✅` | `✅` | `—` | `—` | `—` | `—` |
| `WebSite` | `✅` | `✅` | `—` | `—` | `—` | `—` |

## Totals

- `JSON Schema`: `50 / 50`
- `JSON-LD emitting React component`: `50 / 50`
- `JSON-LD emitting Visible Semantic React component`: `4 / 50`
- `Fused`: `4 / 50`
- `Fused ClassNames`: `4 / 50`
- `Fused ClassName CSS Tokens`: `4 / 50`

## Current Fused Frontier

These fused visible + JSON-LD components exist today in `@mdwrk/lander-react` and have dedicated per-component token CSS in `@mdwrk/pages-ui-tokens`:

- `Article`
- `Product`
- `Course`
- `Quiz`

The current fused frontier is now T2-backed for:

- fused visible + JSON-LD behavior
- fused `className` support
- fused class-name CSS token support
