import { educationDomainBundle } from "@mdwrk/lander-page-templates";
import type { PageTemplatePreset, PresetOptions } from "../types.js";
import { buildPresetFromMaps, mergePresetLinks, mergePresetPages } from "../authoring.js";
import { presetSlug } from "../types.js";

export function createEducationPathPreset(options: PresetOptions = {}): PageTemplatePreset {
  const title = options.title ?? "Learning Path";
  return buildPresetFromMaps({
    id: "preset.education-path",
    title: "Education path preset",
    description: "Learning path with course-owned modules, optional flash cards, quizzes, and a final course test.",
    domain: "education",
    entryPageKey: "path",
    bundles: [educationDomainBundle],
    pages: mergePresetPages({
      path: {
        id: "education:path",
        templateId: "education.learning-path",
        slug: presetSlug(options.baseSlug, "learn"),
        title,
        description: options.description ?? "Guided learning path.",
        summary: "Start here and follow the course sequence.",
        data: {
          outcomes: ["Finish the learning path.", "Complete the course and module sequence."],
          prerequisites: ["Working knowledge of the topic area."],
        },
      },
      course: {
        id: "education:course",
        templateId: "education.course",
        slug: presetSlug(options.baseSlug, "learn/course"),
        title: "Course",
        description: "Course overview.",
        summary: "Review modules and outcomes.",
        order: 1,
        data: {
          objectives: ["Understand the core material.", "Finish every module and the final test."],
          prerequisites: ["Complete the path prerequisites."],
          testCallout: "Take the course test after you complete the modules.",
        },
      },
      module: {
        id: "education:module",
        templateId: "education.module",
        slug: presetSlug(options.baseSlug, "learn/course/module"),
        title: "Module",
        description: "Course module.",
        summary: "Complete module material.",
        order: 1,
        data: {
          body: "Work through the lesson material, examples, and takeaways in this module.",
          keyTakeaways: ["Understand the lesson objective.", "Be ready for the course quiz."],
          nextStep: "Return to the course page when you are ready for the quiz.",
        },
      },
      flashcards: {
        id: "education:flashcards",
        templateId: "education.flashcards",
        slug: presetSlug(options.baseSlug, "learn/course/flashcards"),
        title: "Flash Cards",
        description: "Course flash cards.",
        summary: "Practice key questions and answers.",
        order: 1,
        data: {
          body: "Use these flash cards as a separate recall aid before you attempt the quiz.",
          cards: [{
            question: "What is the purpose of flash cards?",
            answer: "To rehearse key concepts with fast question-and-answer review.",
            explanation: "Flash cards are optional study aids, not graded quizzes.",
          }],
        },
      },
      quiz: {
        id: "education:quiz",
        templateId: "education.quiz",
        slug: presetSlug(options.baseSlug, "learn/course/quiz"),
        title: "Quiz",
        description: "Course quiz.",
        summary: "Check understanding.",
        order: 1,
        data: {
          passingGuidance: "Review the module and retry if needed.",
          questions: [{
            question: "What is the main purpose of this module?",
            options: ["To skip the lesson", "To reinforce learning", "To replace the course", "To publish the site"],
            correctAnswerIndex: 1,
            explanation: "The module quiz checks understanding of the lesson material.",
          }],
        },
      },
      courseTest: {
        id: "education:course-test",
        templateId: "education.course-test",
        slug: presetSlug(options.baseSlug, "learn/course/test"),
        title: "Course Test",
        description: "Course final test.",
        summary: "Validate course readiness.",
        order: 2,
        data: {
          readinessChecklist: ["Finish each module.", "Review the quiz feedback."],
          scoreSummary: "Passing this test confirms course completion readiness.",
          passingGuidance: "Score well enough to demonstrate course mastery.",
          questions: [{
            question: "What must be completed before the course test?",
            options: ["Only the first module", "The full module sequence", "Only the quiz", "Nothing"],
            correctAnswerIndex: 1,
            explanation: "The course test assumes the learner completed the full course sequence.",
          }],
        },
      },
    }, options.pages),
    links: mergePresetLinks({
      path: { courses: ["course"] },
      course: { modules: ["module"], flashcards: ["flashcards"], quizzes: ["quiz"], test: ["courseTest"] },
    }, options.links),
  });
}
