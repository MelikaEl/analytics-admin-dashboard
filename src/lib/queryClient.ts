import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000, //Prevents unnecessary refetches for 30 minutes after data loads
      retry: 1, //If API fails, tries once 
      refetchOnWindowFocus: false, // No refetch when switching tabs 
    },
  },
});
