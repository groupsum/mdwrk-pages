import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const registry = JSON.parse(readFileSync(join(process.cwd(), '.ssot', 'registry.json'), 'utf8'));

const rows = [
  ['001', 'root-governance', 'Root governance, SSOT, manifests, AGENTS, proof'],
  ['014', 'structured-data', 'Structured data shared package'],
  ['025', 'lander-content-contract', 'Lander content contract'],
  ['026', 'lander-core', 'Lander core compiler'],
  ['027', 'lander-seo', 'Lander SEO discovery helpers'],
  ['028', 'lander-theme', 'Lander theme package'],
  ['029', 'lander-react', 'Lander React package'],
  ['030', 'lander-markdown-content-adapter', 'Lander markdown content adapter'],
  ['031', 'lander-page-templates', 'Lander page templates'],
  ['032', 'lander-page-template-presets', 'Lander page template presets'],
  ['035', 'lander-validation-suite', 'Lander validation suite'],
  ['036', 'documentation-owners', 'Documentation owners'],
];

function byId(collection, id) {
  return collection.find((entry) => entry.id === id);
}

function fail(message) {
  console.error(`[mdwrk-pages-cr-matrix-t0] ${message}`);
  process.exitCode = 1;
}

for (const [number, slug] of rows) {
  const featureId = `feat:mdwrk-pages.cr-${number}.${slug}`;
  const claimId = `clm:mdwrk-pages.cr-${number}.t0`;
  const testId = `tst:mdwrk-pages.cr-${number}.t0`;
  const evidenceId = `evd:mdwrk-pages.cr-${number}.t0`;
  const feature = byId(registry.features ?? [], featureId);
  const claim = byId(registry.claims ?? [], claimId);
  const test = byId(registry.tests ?? [], testId);
  const evidence = byId(registry.evidence ?? [], evidenceId);

  if (!feature) fail(`Missing feature ${featureId}`);
  if (!claim) fail(`Missing claim ${claimId}`);
  if (!test) fail(`Missing test ${testId}`);
  if (!evidence) fail(`Missing evidence ${evidenceId}`);

  if (feature && !feature.spec_ids?.includes('spc:2095')) fail(`${featureId} must link spc:2095`);
  if (feature && feature.plan?.target_claim_tier !== 'T0') fail(`${featureId} must target T0`);
  if (feature && !feature.claim_ids?.includes(claimId)) fail(`${featureId} must link ${claimId}`);
  if (feature && !feature.test_ids?.includes(testId)) fail(`${featureId} must link ${testId}`);

  if (claim && claim.tier !== 'T0') fail(`${claimId} must be T0`);
  if (claim && claim.status !== 'evidenced') fail(`${claimId} must be evidenced`);
  if (claim && !claim.feature_ids?.includes(featureId)) fail(`${claimId} must link ${featureId}`);
  if (claim && !claim.test_ids?.includes(testId)) fail(`${claimId} must link ${testId}`);
  if (claim && !claim.evidence_ids?.includes(evidenceId)) fail(`${claimId} must link ${evidenceId}`);

  if (test && test.status !== 'passing') fail(`${testId} must be passing`);
  if (test && test.path !== 'tools/governance/mdwrk-pages-cr-matrix-t0.test.mjs') fail(`${testId} must point at this test`);
  if (test && !test.execution) fail(`${testId} must include execution metadata`);
  if (test && !test.feature_ids?.includes(featureId)) fail(`${testId} must link ${featureId}`);
  if (test && !test.claim_ids?.includes(claimId)) fail(`${testId} must link ${claimId}`);
  if (test && !test.evidence_ids?.includes(evidenceId)) fail(`${testId} must link ${evidenceId}`);

  if (evidence && evidence.status !== 'passed') fail(`${evidenceId} must be passed`);
  if (evidence && evidence.path !== 'tools/governance/mdwrk-pages-cr-matrix-t0.test.mjs') fail(`${evidenceId} must point at this test`);
  if (evidence && !evidence.claim_ids?.includes(claimId)) fail(`${evidenceId} must link ${claimId}`);
  if (evidence && !evidence.test_ids?.includes(testId)) fail(`${evidenceId} must link ${testId}`);
}

if (!process.exitCode) {
  console.log(`validated ${rows.length} mdwrk-pages CR matrix T0 rows`);
}
