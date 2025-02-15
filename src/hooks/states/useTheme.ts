import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    { name: "theme" },
  ),
);

export default useTheme;
