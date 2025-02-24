import { create } from "zustand";

interface IBreadcrumbContentState {
  content: React.ReactNode[];
  setBreadcrumbContent: (content: React.ReactNode[]) => void;
}

const useBreadcrumbContent = create<IBreadcrumbContentState>()((set) => ({
  content: [],
  setBreadcrumbContent: (content) => set({ content }),
}));

export default useBreadcrumbContent;
