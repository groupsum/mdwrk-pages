import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

const root = process.cwd();
const registry = JSON.parse(readFileSync(join(root, '.ssot', 'registry.json'), 'utf8'));

const requiredRootFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'LICENSE',
  'STYLE_GUIDE.md',
  'AGENTS.md',
  '.editorconfig',
  '.gitignore',
  '.npmrc',
  '.prettierignore',
  '.prettierrc.json',
  'package.json',
  'pnpm-workspace.yaml',
  'pyproject.toml',
  'uv.lock',
  'tsconfig.base.json',
  'docs/README.md',
];

const requiredRootDirs = ['.github', '.ssot', 'docs', 'examples', 'packages', 'tools'];
const requiredAgentFiles = [
  'AGENTS.md',
  'docs/AGENTS.md',
  'examples/AGENTS.md',
  'packages/AGENTS.md',
  'packages/content/AGENTS.md',
  'packages/shared/AGENTS.md',
  'packages/lander/lander-content-contract/AGENTS.md',
  'packages/lander/lander-react/AGENTS.md',
  'packages/lander/lander-react/src/AGENTS.md',
  'packages/lander/lander-theme/AGENTS.md',
  'tools/AGENTS.md',
];

const requiredGitignoreEntries = [
  'node_modules/',
  'dist/',
  'dist-static/',
  '.demo-dist/',
  '.demo-presets-dist/',
  'artifacts/',
  '.uv-cache/',
  '.venv/',
  '.tmp/',
  '.env',
  '.env.*',
  '!.env.example',
  '*.pem',
  '*.key',
  '*.p12',
  '*.pfx',
  'id_rsa*',
  '*.kdbx',
  '.npmrc.local',
  '*.tsbuildinfo',
];

const allowedRootFiles = new Set([...requiredRootFiles, 'eslint.config.mjs']);
const allowedRootDirs = new Set([
  ...requiredRootDirs,
  '.git',
  '.uv-cache',
  '.tmp',
  '.venv',
  'node_modules',
  'dist',
  'dist-static',
  '.demo-dist',
  '.demo-presets-dist',
  'artifacts',
  '.npm-cache',
  '.pnpm-store',
]);
const rootMediaPattern = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

function fail(message) {
  console.error(`[mdwrk-pages-agent-hygiene] ${message}`);
  process.exitCode = 1;
}

function requirePath(path) {
  if (!existsSync(join(root, path))) fail(`Missing required path: ${path}`);
}

for (const path of requiredRootFiles) requirePath(path);
for (const path of requiredRootDirs) requirePath(path);
for (const path of requiredAgentFiles) requirePath(path);

const gitignore = readFileSync(join(root, '.gitignore'), 'utf8');
for (const entry of requiredGitignoreEntries) {
  if (!gitignore.split(/\r?\n/).includes(entry)) fail(`.gitignore missing required entry: ${entry}`);
}

const readme = readFileSync(join(root, 'README.md'), 'utf8');
for (const needle of [
  '## Documentation Pointers',
  'docs/README.md',
  '.ssot/specs/SPEC-2002-repository-governance.yaml',
  'AGENTS.md',
]) {
  if (!readme.includes(needle)) fail(`README.md missing documentation pointer: ${needle}`);
}

for (const entry of readdirSync(root)) {
  const fullPath = join(root, entry);
  const stat = statSync(fullPath);
  if (stat.isDirectory() && !allowedRootDirs.has(entry)) fail(`Unexpected top-level directory: ${entry}`);
  if (stat.isFile() && !allowedRootFiles.has(entry)) fail(`Unexpected top-level file: ${entry}`);
  if (stat.isFile() && rootMediaPattern.test(basename(entry))) fail(`Root media artifact is not allowed: ${entry}`);
}

const proofChains = [
  {
    feature: 'feat:mdwrk-pages.scoped-agent-ownership-instructions',
    claim: 'clm:mdwrk-pages.scoped-agent-ownership-instructions.t2',
    test: 'tst:mdwrk-pages.scoped-agent-ownership-instructions.t2',
    evidence: 'evd:mdwrk-pages.scoped-agent-ownership-instructions.t2',
  },
  {
    feature: 'feat:repository-top-level-hygiene',
    claim: 'clm:repository-top-level-hygiene.t2',
    test: 'tst:repository-top-level-hygiene.t2',
    evidence: 'evd:repository-top-level-hygiene.t2',
  },
];

function byId(collection, id) {
  return collection.find((entry) => entry.id === id);
}

for (const ids of proofChains) {
  const feature = byId(registry.features ?? [], ids.feature);
  const claim = byId(registry.claims ?? [], ids.claim);
  const test = byId(registry.tests ?? [], ids.test);
  const evidence = byId(registry.evidence ?? [], ids.evidence);
  if (!feature) fail(`Missing feature ${ids.feature}`);
  if (!claim) fail(`Missing claim ${ids.claim}`);
  if (!test) fail(`Missing test ${ids.test}`);
  if (!evidence) fail(`Missing evidence ${ids.evidence}`);
  if (feature && feature.implementation_status !== 'implemented') fail(`${ids.feature} must be implemented`);
  if (feature && feature.plan?.target_claim_tier !== 'T2') fail(`${ids.feature} must target T2`);
  if (claim && (claim.tier !== 'T2' || claim.status !== 'evidenced')) fail(`${ids.claim} must be evidenced T2`);
  if (test && test.status !== 'passing') fail(`${ids.test} must be passing`);
  if (evidence && evidence.status !== 'passed') fail(`${ids.evidence} must be passed`);
  if (test && test.path !== 'tools/governance/mdwrk-pages-agent-hygiene.test.mjs') fail(`${ids.test} path mismatch`);
  if (evidence && evidence.path !== 'tools/governance/mdwrk-pages-agent-hygiene.test.mjs') fail(`${ids.evidence} path mismatch`);
  if (test && !test.execution) fail(`${ids.test} must include execution metadata`);
  if (feature && !feature.claim_ids?.includes(ids.claim)) fail(`${ids.feature} must link ${ids.claim}`);
  if (feature && !feature.test_ids?.includes(ids.test)) fail(`${ids.feature} must link ${ids.test}`);
  if (claim && !claim.feature_ids?.includes(ids.feature)) fail(`${ids.claim} must link ${ids.feature}`);
  if (claim && !claim.test_ids?.includes(ids.test)) fail(`${ids.claim} must link ${ids.test}`);
  if (claim && !claim.evidence_ids?.includes(ids.evidence)) fail(`${ids.claim} must link ${ids.evidence}`);
  if (test && !test.feature_ids?.includes(ids.feature)) fail(`${ids.test} must link ${ids.feature}`);
  if (test && !test.claim_ids?.includes(ids.claim)) fail(`${ids.test} must link ${ids.claim}`);
  if (test && !test.evidence_ids?.includes(ids.evidence)) fail(`${ids.test} must link ${ids.evidence}`);
  if (evidence && !evidence.claim_ids?.includes(ids.claim)) fail(`${ids.evidence} must link ${ids.claim}`);
  if (evidence && !evidence.test_ids?.includes(ids.test)) fail(`${ids.evidence} must link ${ids.test}`);
}

if (!process.exitCode) {
  console.log('validated mdwrk-pages scoped agents and top-level hygiene');
}
