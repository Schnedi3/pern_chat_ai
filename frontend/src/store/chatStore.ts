import { create } from "zustand";

import { IChatStore } from "../types/types";

export const useChatStore = create<IChatStore>((set) => ({
  chat: [],
  setChat: (data) => set(() => ({ chat: data })),
}));
