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

assert.equal(STRUCTURED_DATA_INTENT_KINDS.length, 50);
assert.ok(isStructuredDataIntentKind('SoftwareApplication'));
assert.ok(isStructuredDataIntentKind('WebPage'));
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
assert.deepEqual(validateStructuredDataIntentStrict({ kind: 'FAQPage', data: { name: 'FAQ' } }), []);

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
assert.equal(structuredDataSchemas.length, 36);
assert.equal(getStructuredDataSchemaByType('Quiz').schemaId.endsWith('quiz.schema.json'), true);
assert.equal(getStructuredDataSchemaBySchemaId('https://schemas.mdwrk.com/structured-data/video-object.schema.json').type, 'VideoObject');
assert.equal(getStructuredDataSchemaByType('LearningResource').schemaId.endsWith('learning-resource.schema.json'), true);
for (const entry of structuredDataSchemas) {
  const assetPath = path.join(packageRoot, entry.assetPath.replace(/^\.\//, '').replaceAll('/', path.sep));
  assert.ok(fs.existsSync(assetPath), `missing structured-data schema asset: ${entry.assetPath}`);
}

assert.deepEqual(validateStructuredDataByType('Article', {
  name: 'Article',
  url: 'https://mdwrk.test/article',
  headline: 'Article headline',
}), []);

assert.deepEqual(validateStructuredDataBySchemaId('https://schemas.mdwrk.com/structured-data/qa-page.schema.json', {
  question: 'Q?',
  acceptedAnswer: { text: 'A.' },
  suggestedAnswer: [{ text: 'B.' }],
  answerCount: 2,
}), []);

assert.deepEqual(validateStructuredDataByType('LearningResource', {
  name: 'Math Solver learning resource',
  url: 'https://mdwrk.test/math/resource',
  learningResourceType: 'Math Solver',
  teaches: ['Algebra'],
}), []);

assert.deepEqual(validateStructuredDataByType('SolveMathAction', {
  target: 'https://mdwrk.test/math?q={mathExpression}',
  mathExpressionInput: 'required name=mathExpression',
  eduQuestionType: ['Algebra'],
}), []);

assert.ok(validateStructuredDataByType('Quiz', {
  name: 'Quiz',
  hasPart: [],
}).some((issue) => issue.keyword === 'minItems'));

assert.ok(validateStructuredDataByType('VideoObject', {
  name: 'Video only',
}).some((issue) => issue.keyword === 'required' && issue.path === 'data.thumbnailUrl'));

assert.ok(validateStructuredDataByType('Product', {
  name: 'Product',
  offers: 'invalid-offer-shape',
}).some((issue) => issue.path === 'data.offers'));

assert.ok(validateStructuredDataByType('Course', {
  name: 'Course',
  hasCourseInstance: ['invalid-instance-shape'],
}).some((issue) => issue.path === 'data.hasCourseInstance' || issue.path.startsWith('data.hasCourseInstance[')));

assert.ok(validateStructuredDataByType('MathSolver', {
  name: 'Math Solver',
  potentialAction: 'invalid-action-shape',
}).some((issue) => issue.path === 'data.potentialAction'));

assert.deepEqual(validateStructuredDataIntentStrict({
  kind: 'Article',
  data: { name: 'Article', url: 'https://mdwrk.test/article', headline: 'Headline' },
}), []);

assert.ok(validateStructuredDataIntentStrict({
  kind: 'VideoObject',
  data: { name: 'Video only' },
}).some((failure) => failure.includes('data.thumbnailUrl')));

assert.deepEqual(
  validateStructuredDataIntentStrict({ kind: 'Dataset', data: { name: 'Dataset' } }),
  [],
);
