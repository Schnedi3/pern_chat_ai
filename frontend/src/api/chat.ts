import { useMutation } from "@tanstack/react-query";

import customAxios from "./axios";

export const useCreateChat = () => {
  return useMutation({
    mutationFn: () => {
      return customAxios.post("/chat");
    },
  });
};
