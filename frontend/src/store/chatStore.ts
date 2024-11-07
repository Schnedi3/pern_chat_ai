import { create } from "zustand";

import { IChatStore } from "../types/types";

export const useChatStore = create<IChatStore>((set) => ({
  chat: [],
  setChat: (data) => set(() => ({ chat: data })),
  chatId: 0,
  setChatId: (id) => set(() => ({ chatId: id })),
  viewSidebar: false,
  setViewSidebar: () => set((state) => ({ viewSidebar: !state.viewSidebar })),
}));
