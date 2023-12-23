export default function CategoryMagement() {
  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl font-semibold'>Quản lý danh mục</div>
          <div>
            <button className='bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              Tạo danh mục
            </button>
          </div>
        </div>

        <div className='grid grid-cols-3 bg-gray-200 text-center font-bold py-2'>
          <div>STT</div>
          <div>Tên danh mục</div>
          <div>Hành động</div>
        </div>

        <div className='grid grid-cols-3 bg-gray-100 text-center py-2'>
          <div className='col-span-1'>1</div>
          <div className='col-span-1'>RAM</div>
          <div className='col-span-1'>
            <div className='flex justify-center space-x-2'>
              <button className='text-blue-600 hover:underline'>Xóa</button>
              <button className='text-blue-600 hover:underline'>Sửa</button>
            </div>
          </div>
          <div className='col-span-1'>2</div>
          <div className='col-span-1'>Bộ nhớ</div>
          <div className='col-span-1'>
            <div className='flex justify-center space-x-2'>
              <button className='text-blue-600 hover:underline'>Xóa</button>
              <button className='text-blue-600 hover:underline'>Sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
