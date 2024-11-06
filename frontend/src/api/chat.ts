import { useMutation } from "@tanstack/react-query";

import customAxios from "./axios";
import { IMessage } from "../types/types";

export const useCreateChat = () => {
  return useMutation({
    mutationFn: () => {
      return customAxios.post("/chat");
    },
  });
};

export const useAddMessage = () => {
  return useMutation({
    mutationFn: ({ chatId, role, content }: IMessage) => {
      return customAxios.post("/chat/message", { chatId, role, content });
    },
  });
};
