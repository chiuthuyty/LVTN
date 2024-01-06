import Button from 'src/components/Button'
import Input from 'src/components/Input'

export default function CategoryEdit() {
  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <form className='flex flex-col'>
          <div className='font-semibold text-3xl mb-4'>Thêm sản phẩm mới</div>
          <div className='flex pt-4'>
            <div className='w-40'>Mã danh mục</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='flex pt-4'>
            <div className='w-40'>Tên danh mục</div>
            <Input className='w-full' type='text' />
          </div>
          <div className='text-center justify-center space-x-4 mt-6'>
            <Button className='bg-orange p-2 rounded-md text-white'>Thêm danh mục</Button>
            <Button className='bg-orange p-2 rounded-md text-white'>Hủy</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
