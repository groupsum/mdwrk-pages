import assert from 'node:assert/strict';
import {
  COMPONENT_INTENT_KINDS,
  STRUCTURED_DATA_INTENT_KINDS,
  getStructuredDataSchemaBySchemaId,
  getStructuredDataSchemaByType,
  getTemplateDataSchemaBySchemaId,
  getTemplateDataSchemaByTemplateId,
  isComponentIntentKind,
  isStructuredDataIntentKind,
  listStructuredDataSchemas,
  listTemplateDataSchemas,
  validateStructuredDataBySchemaId,
  validateStructuredDataByType,
  validateTemplateDataBySchemaId,
  validateTemplateDataByTemplateId,
  validateComponentIntent,
  validateStructuredDataIntent,
  validateStructuredDataIntentStrict,
} from '../dist/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { governedTypes, invalidPayloadByType, validPayloadByType } from './structured-data-schema-samples.mjs';

assert.ok(STRUCTURED_DATA_INTENT_KINDS.length > governedTypes.length);
assert.ok(isStructuredDataIntentKind('SoftwareApplication'));
assert.ok(isStructuredDataIntentKind('WebPage'));
assert.ok(isStructuredDataIntentKind('about'));
assert.ok(isStructuredDataIntentKind('ActionStatusType'));
assert.ok(isStructuredDataIntentKind('Boolean'));
assert.ok(!isStructuredDataIntentKind('UnsupportedType'));

assert.ok(COMPONENT_INTENT_KINDS.includes('page_shell'));
assert.ok(COMPONENT_INTENT_KINDS.includes('structured_data_graph'));
assert.ok(COMPONENT_INTENT_KINDS.includes('support_channels'));
assert.ok(COMPONENT_INTENT_KINDS.includes('policy_summary'));
assert.ok(isComponentIntentKind('hero'));
assert.ok(!isComponentIntentKind('unknown_component'));

assert.deepEqual(validateStructuredDataIntent({ kind: 'FAQPage', data: { name: 'FAQ' } }), []);
assert.deepEqual(validateComponentIntent({ id: 'intent:hero', kind: 'hero', sourceId: 'hero' }), []);
assert.match(validateStructuredDataIntent({ kind: 'UnsupportedType' })[0], /unsupported structured-data intent kind/);
assert.match(validateComponentIntent({ id: '', kind: 'hero' })[0], /component intent id is required/);
assert.ok(validateStructuredDataIntentStrict({ kind: 'FAQPage', data: { name: 'FAQ' } }).some((failure) => failure.includes('data.@type')));

assert.equal(listTemplateDataSchemas().length, 6);
assert.equal(getTemplateDataSchemaByTemplateId('education.course-test').schemaId.endsWith('course-test.schema.json'), true);
assert.equal(getTemplateDataSchemaBySchemaId('https://schemas.mdwrk.com/lander/page-template/education/quiz.schema.json').templateId, 'education.quiz');

assert.deepEqual(validateTemplateDataByTemplateId('education.learning-path', {
  summary: 'Follow the path.',
  outcomes: ['Ship schema-backed pages'],
  prerequisites: ['TypeScript'],
}), []);

assert.deepEqual(validateTemplateDataBySchemaId('https://schemas.mdwrk.com/lander/page-template/education/module.schema.json', {
  summary: 'Read and practice.',
  body: 'Module lesson body.',
}), []);

assert.ok(validateTemplateDataByTemplateId('education.quiz', {
  summary: 'Quick check.',
  questions: [],
}).some((issue) => issue.keyword === 'minItems'));
assert.ok(validateTemplateDataByTemplateId('education.course', {
  metadata: {},
}).some((issue) => issue.keyword === 'required' && issue.path === 'data.summary'));

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const structuredDataSchemas = listStructuredDataSchemas();
assert.ok(structuredDataSchemas.length > governedTypes.length);
assert.equal(getStructuredDataSchemaByType('Quiz').schemaId, 'urn:groupsum:schemaorg:class:Quiz');
assert.equal(getStructuredDataSchemaBySchemaId('urn:groupsum:schemaorg:class:VideoObject').type, 'VideoObject');
assert.equal(getStructuredDataSchemaByType('LearningResource').schemaId, 'urn:groupsum:schemaorg:class:LearningResource');
assert.equal(getStructuredDataSchemaByType('about').schemaId, 'urn:groupsum:schemaorg:property:about');
assert.equal(getStructuredDataSchemaByType('ActionStatusType').schemaId, 'urn:groupsum:schemaorg:enumeration:ActionStatusType');
assert.equal(getStructuredDataSchemaByType('Boolean').schemaId, 'urn:groupsum:schemaorg:datatype:Boolean');
for (const entry of structuredDataSchemas) {
  const assetPath = path.join(packageRoot, entry.assetPath.replace(/^\.\//, '').replaceAll('/', path.sep));
  assert.ok(fs.existsSync(assetPath), `missing structured-data schema asset: ${entry.assetPath}`);
}

for (const type of governedTypes) {
  assert.deepEqual(validateStructuredDataByType(type, { '@type': type }), []);
}

assert.deepEqual(validateStructuredDataBySchemaId('urn:groupsum:schemaorg:class:QAPage', { '@type': 'QAPage' }), []);

assert.ok(validateStructuredDataByType('Quiz', {
  '@type': 'Thing',
}).some((issue) => issue.keyword === 'const' && issue.path === 'data.@type'));

assert.ok(validateStructuredDataByType('VideoObject', {
  '@type': 'VideoObject',
  unexpectedProperty: true,
}).some((issue) => issue.keyword === 'unevaluatedProperties' && issue.path === 'data.unexpectedProperty'));

for (const type of Object.keys(invalidPayloadByType)) {
  const wrongType = type === 'Thing' ? 'XPathType' : 'Thing';
  assert.ok(validateStructuredDataByType(type, { '@type': wrongType }).some((issue) => issue.path === 'data.@type'));
}

assert.deepEqual(validateStructuredDataIntentStrict({
  kind: 'Article',
  data: { '@type': 'Article' },
}), []);

assert.ok(validateStructuredDataIntentStrict({
  kind: 'VideoObject',
  data: { name: 'Video only' },
}).some((failure) => failure.includes('data.@type')));

assert.ok(
  validateStructuredDataIntentStrict({ kind: 'Dataset', data: { keywords: 'schema' } }).some((failure) => failure.includes('data.@type')),
);
