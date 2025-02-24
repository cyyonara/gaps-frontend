import { IAssessmentDetails } from "@/types";
import { create } from "zustand";
import { IQuestion } from "@/types";

interface IAssessmentState {
  assessmentDetails: IAssessmentDetails | null;
  questions: IQuestion[];
  setAssessmentDetails: (assessmentDetails: IAssessmentDetails) => void;
  addQuestion: (question: IQuestion) => void;
  editQuestion: (index: number, updatedQuestion: IQuestion) => void;
  deleteQuestion: (index: number) => void;
}

const useAssessment = create<IAssessmentState>()((set) => ({
  assessmentDetails: null,
  questions: [],
  setAssessmentDetails: (assessmentDetails) => set({ assessmentDetails }),
  addQuestion: (question) => set((prev) => ({ ...prev, questions: [...prev.questions, question] })),
  editQuestion: (index, updatedQuestion) => {
    set((prev) => ({
      ...prev,
      questions: prev.questions.map((question, i) => (i === index ? updatedQuestion : question)),
    }));
  },
  deleteQuestion: (index) => {
    set((prev) => ({ ...prev, questions: prev.questions.filter((_, i) => i !== index) }));
  },
}));

export default useAssessment;
