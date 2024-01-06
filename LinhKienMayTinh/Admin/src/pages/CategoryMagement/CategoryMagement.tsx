import { useQuery } from '@tanstack/react-query'
import categoryApi from 'src/apis/category.api'
import CategoryItem from './components/CategoryItem'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function CategoryMagement() {
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategoties()
    }
  })
  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl font-semibold'>Quản lý danh mục</div>
          <div>
            <Link
              to={path.addcategory}
              className='bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue active:bg-orange/80'
            >
              Tạo danh mục
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-3 bg-gray-200 text-center font-bold py-2'>
          <div>Mã</div>
          <div>Tên danh mục</div>
          <div>Hành động</div>
        </div>

        <CategoryItem categories={categoriesData?.data.data || []} />
      </div>
    </div>
  )
}
