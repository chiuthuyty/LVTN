import Button from 'src/components/Button'
import Input from 'src/components/Input'
import InputFile from 'src/components/InputFile'
import categoryApi from 'src/apis/category.api'
import { useQuery } from '@tanstack/react-query'

export default function ProductAdd() {
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategoties()
    }
  })
  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <form className='flex flex-col'>
          <div className='font-semibold text-3xl mb-4'>Thêm sản phẩm mới</div>
          <div className='flex pt-4'>
            <div className='w-40'>Tên sản phẩm</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Giá</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Giá khuyến mãi</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Mô tả</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Ảnh chính</div>
            <InputFile />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Ảnh phụ</div>
            <InputFile />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Danh mục</div>
            <select id='category' className='bg-white border border-gray-300 rounded-md p-2 focus:outline-none'>
              {categoriesData?.data.data.map((categoryItem) => (
                <option key={categoryItem._id} value={categoryItem._id}>
                  {categoryItem.name}
                </option>
              ))}
            </select>
          </div>
          <div className='text-center justify-center space-x-4 mt-6'>
            <Button className='bg-orange p-2 rounded-md text-white'>Thêm sản phẩm</Button>
            <Button className='bg-orange p-2 rounded-md text-white'>Hủy</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
