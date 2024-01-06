import { useQuery } from '@tanstack/react-query'
import ProductItem from './components/ProductItem'
import useQueryConfig from 'src/hooks/useQueryConfig'
import productApi from 'src/apis/product.api'
import { ProductListConfig } from 'src/types/product.type'
import Pagination from 'src/components/Pagination'
import categoryApi from 'src/apis/category.api'
import CategorySelect from './components/CategorySelect'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function ProductManagement() {
  const queryConfig = useQueryConfig()

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategoties()
    }
  })

  const { data: productData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl font-semibold'>Quản lý sản phẩm</div>
          <div className='flex items-center space-x-4'>
            <label htmlFor='category' className='text-gray-600 px-3'>
              Danh mục:
            </label>
            <CategorySelect queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            <Link to={path.productmagement} className='p-2 bg-red-500 rounded-md text-white'>
              Tất cả
            </Link>
            <Link
              to={path.addproduct}
              className='bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue active:bg-orange/80'
            >
              Thêm sản phẩm
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-9 bg-gray-200 text-center font-bold py-2'>
          <div className='col-span-1'>Tên sản phẩm</div>
          <div className='col-span-1'>Giá</div>
          <div className='col-span-1'>Giá khuyến mãi</div>
          <div className='col-span-1'>Số lượng</div>
          <div className='col-span-1'>Mô tả</div>
          <div className='col-span-1'>Ảnh chính</div>
          <div className='col-span-1'>Ảnh phụ</div>
          <div className='col-span-1'>Danh mục</div>
          <div className='col-span-1'>Hành động</div>
        </div>
        {productData && (
          <div>
            {productData.data.data.products.map((product) => (
              <div className='col-span-1' key={product._id}>
                <ProductItem product={product} />
              </div>
            ))}
            <Pagination queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />
          </div>
        )}
      </div>
    </div>
  )
}
