import { defineEdge, definePageInstance, defineTemplateGraph } from "../define.js";
import { educationDomainBundle } from "../domains/education.js";

export const educationTemplateGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  bundles: [educationDomainBundle],
  instances: [
    definePageInstance({ id: "path", templateId: "education.learning-path", slug: "/learn/", title: "Learning Path", description: "Learning path overview.", data: { summary: "Start here.", outcomes: ["Complete the course."], prerequisites: ["Read the overview."] } }),
    definePageInstance({ id: "course", templateId: "education.course", slug: "/learn/course/", title: "Course", description: "Course overview.", data: { summary: "Take the course.", objectives: ["Finish the module."], testCallout: "Finish the course test at the end." } }),
    definePageInstance({ id: "flashcards", templateId: "education.flashcards", slug: "/learn/course/flashcards/", title: "Flash Cards", description: "Flash cards page.", data: { summary: "Review key Q and A items.", cards: [{ question: "Why use flash cards?", answer: "To rehearse core concepts quickly.", explanation: "Flash cards are optional recall aids separate from quizzes." }] } }),
    definePageInstance({ id: "module", templateId: "education.module", slug: "/learn/course/module/", title: "Module", description: "Module overview.", data: { summary: "Complete the module.", body: "Module lesson body." } }),
    definePageInstance({ id: "quiz", templateId: "education.quiz", slug: "/learn/course/quiz/", title: "Quiz", description: "Quiz page.", data: { summary: "Check understanding.", questions: [{ question: "Why take the quiz?", options: ["To guess", "To confirm learning"], correctAnswerIndex: 1, explanation: "The quiz confirms learning." }] } }),
    definePageInstance({ id: "course-test", templateId: "education.course-test", slug: "/learn/course/test/", title: "Course Test", description: "Course test page.", data: { summary: "Finish the course test.", questions: [{ question: "Why take the course test?", options: ["To finish the course", "To skip the modules"], correctAnswerIndex: 0, explanation: "The course test verifies course completion readiness." }] } }),
  ],
  edges: [
    defineEdge({ sourceId: "path", targetId: "course", relationship: "child", slotId: "courses", order: 1 }),
    defineEdge({ sourceId: "course", targetId: "module", relationship: "course_module", slotId: "modules", order: 1 }),
    defineEdge({ sourceId: "course", targetId: "flashcards", relationship: "course_flashcards", slotId: "flashcards", order: 2 }),
    defineEdge({ sourceId: "course", targetId: "quiz", relationship: "course_quiz", slotId: "quizzes", order: 3 }),
    defineEdge({ sourceId: "course", targetId: "course-test", relationship: "course_test", slotId: "test", order: 4 }),
  ],
});
