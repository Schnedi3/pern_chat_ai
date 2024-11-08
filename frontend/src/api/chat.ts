import { useMutation, useQuery } from "@tanstack/react-query";

import customAxios from "./axios";
import { IMessage } from "../types/types";
import { useChatStore } from "../store/chatStore";

export const useCreateChat = () => {
  const { setChatId } = useChatStore();

  return useMutation({
    mutationFn: () => {
      return customAxios.post("/chat");
    },
    onSuccess: ({ data }) => {
      setChatId(data.id);
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

export const useCallAi = () => {
  return useMutation({
    mutationFn: (content: string) => {
      return customAxios.post("/chat/ai", { content });
    },
  });
};

export const useGetOldChats = () => {
  return useQuery({
    queryKey: ["oldChats"],
    queryFn: async () => {
      const { data } = await customAxios.get("/chat");
      return data;
    },
    initialData: [],
  });
};

export const useDeleteChat = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return customAxios.delete(`/chat/${id}`);
    },
  });
};
