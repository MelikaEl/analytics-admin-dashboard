//router
import { createBrowserRouter } from "react-router-dom";

//layout
import { AppLayout } from "@/components/layout";

//pages
import OverviewPage from "@/pages/OverviewPage";
import UsersPage from "@/pages/UsersPage";
import TransactionsPage from "@/pages/TransactionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
        // You can add loaders here for data fetching
        // loader: dashboardLoader,
      },
      {
        path: "users",
        element: <UsersPage />,
        // loader: usersLoader,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
        // loader: transactionsLoader,
      },
    ],
  },
  // You can add more top-level routes here
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
]);
