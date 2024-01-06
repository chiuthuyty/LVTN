import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'

import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'

import OrderManagement from './pages/OrderManagement/OrderManagement'
import CategoryMagement from './pages/CategoryMagement'
import ProductMagement from './pages/ProductMagement'
import UserMagement from './pages/UserMagement'
import ProductReviews from './pages/ProductReviews'
import Statistical from './pages/Statistical'
import path from './constants/path'
import DesProduct from './pages/ProductMagement/components/DesProduct'
import ProductAdd from './pages/ProductMagement/pages/ProductAdd'
import CategoryAdd from './pages/CategoryMagement/pages/CategoryAdd'
import ProductEdit from './pages/ProductMagement/pages/ProductEdit'
import CategoryEdit from './pages/CategoryMagement/pages/CategoryEdit'

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
          path: path.statistical,
          element: <Statistical />
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
        },
        {
          path: path.desproduct,
          element: <DesProduct />
        },
        {
          path: path.addproduct,
          element: <ProductAdd />
        },
        {
          path: path.addcategory,
          element: <CategoryAdd />
        },
        {
          path: path.editproduct,
          element: <ProductEdit />
        },
        {
          path: path.editcategory,
          element: <CategoryEdit />
        }
      ]
    }
  ])
  return useRouteElemnts
}
