// src/routes/index.ts
import { createBrowserRouter } from 'react-router-dom'
// import { DashboardPage } from '@/pages/DashboardPage'
// import { UsersPage } from '@/pages/UsersPage'
// import { TransactionsPage } from '@/pages/TransactionsPage'
import { AppLayout } from '@/components/layout/AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <DashboardPage />,
    //     // You can add loaders here for data fetching
    //     // loader: dashboardLoader,
    //   },
    //   {
    //     path: 'users',
    //     element: <UsersPage />,
    //     // loader: usersLoader,
    //   },
    //   {
    //     path: 'transactions',
    //     element: <TransactionsPage />,
    //     // loader: transactionsLoader,
    //   },
    // ],
  },
  // You can add more top-level routes here
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
])