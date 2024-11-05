import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./main.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};
