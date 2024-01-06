import { Category } from 'src/types/category.type'

interface Props {
  categories: Category[]
}
export default function CategoryItem({ categories }: Props) {
  return (
    <div>
      {categories.map((categoryItem) => {
        return (
          <div className='grid grid-cols-3 bg-gray-100 text-center py-2' key={categoryItem._id}>
            <div className='col-span-1'>{categoryItem._id}</div>
            <div className='col-span-1'>{categoryItem.name}</div>
            <div className='col-span-1'>
              <div className='flex justify-center space-x-2'>
                <button className='text-blue-600 hover:underline'>Xóa</button>
                <button className='text-blue-600 hover:underline'>Sửa</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
