// import "./App.css";

//import router
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

//import react query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
