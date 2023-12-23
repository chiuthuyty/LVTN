import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'

import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import path from './constants/path'
import Dashboard from './pages/Dashboard'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import CategoryMagement from './pages/CategoryMagement'
import ProductMagement from './pages/ProductMagement'
import UserMagement from './pages/UserMagement'
import ProductReviews from './pages/ProductReviews'

export default function useRouteElemnts() {
  const useRouteElemnts = useRoutes([
    {
      path: path.home,
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    },
    {
      path: path.admin,
      element: (
        <MainLayout>
          <AdminLayout />
        </MainLayout>
      ),
      children: [
        {
          path: path.dashboard,
          element: <Dashboard />
        },
        {
          path: path.ordermanagement,
          element: <OrderManagement />
        },
        {
          path: path.categorymagement,
          element: <CategoryMagement />
        },
        {
          path: path.productmagement,
          element: <ProductMagement />
        },
        {
          path: path.usermagement,
          element: <UserMagement />
        },
         {
          path: path.productreviews,
          element: <ProductReviews />
        }
      ]
    }
  ])
  return useRouteElemnts
}
