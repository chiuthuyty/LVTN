import AddressSelector from 'src/components/AddressSelector'
import Input from 'src/components/Input'

export default function OrderInformation() {
  return (
    <div className='bg-neutral-100 py-10'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-12'>
          <div className='col-span-6'>
            <div className='px-7 font-semibold'> Thông tin khách</div>
            <div className='px-7'>
              <AddressSelector />
            </div>
            <div className='px-7'>
              <div className='sm:w-[100%] sm:pl-5'>
                <Input
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                  name='address'
                  placeholder='Họ và tên'
                />
              </div>
            </div>
            <div className='px-7'>
              <div className='sm:w-[100%] sm:pl-5'>
                <Input
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                  name='address'
                  placeholder='Số điện thoại'
                />
              </div>
            </div>
            <div className='px-7'>
              <div className='sm:w-[100%] sm:pl-5'>
                <Input
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                  name='address'
                  placeholder='Ghi chú'
                />
              </div>
            </div>
          </div>

          <div className='col-span-6'>Thông tin sản phẩm đặt</div>
        </div>
      </div>
    </div>
  )
}
