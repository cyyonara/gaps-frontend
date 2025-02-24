import { IUser } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuth {
  auth: IUser | null;
  setCredentials: (credentials: IUser) => void;
  removeCredentials: () => void;
}

const useAuth = create<IAuth>()(
  persist(
    (set) => ({
      auth: null,
      setCredentials: (credentials) => set({ auth: credentials }),
      removeCredentials: () => set({ auth: null }),
    }),
    {
      name: "gaps-auth",
    },
  ),
);

export default useAuth;
