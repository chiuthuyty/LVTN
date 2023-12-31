export default function ProductReviews() {
  return (
    <div className='bg-white mt-2 py-5 '>
      <div className='container'>
        <div className='font-semibold text-3xl mb-4'>Quản lý đánh giá sản phẩm</div>
        <div className='flex items-center p-4'>
          <div className='grid grid-cols-3'>
            <div className='mr-4 col-span-2 mt-3'>
              <span className='text-gray-600'>Tổng đánh giá:</span> <span className='font-bold'>2</span>
              <button className='ml-4 rounded py-1 px-6 flex-shrink-0 bg-red-500 hover:bg-red-600 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  />
                </svg>
              </button>
            </div>
            <div className='bg-white rounded p-1 flex border border-black col-span-1'>
              <input
                type='text'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='TÌM KIẾM THEO TÊN'
              />
              <button className='rounded py-1 px-6 flex-shrink-0 bg-[#f58420] hover:bg-[#e56b17] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-8 text-sm capitalize text-gray-500 shadow'>
          <div className='col-span-2'>
            <div className='flex items-center'>
              <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                <input type='checkbox' className='h-5 w-5 accent-orange' />
              </div>
              <div className='flex-grow text-black'>Khách hàng</div>
            </div>
          </div>
          <div className='col-span-10'>
            <div className='grid text-center grid-cols-10'>
              <div className='col-span-2'>Số sao</div>
              <div className='col-span-1'>Đánh giá</div>
              <div className='col-span-2'>Mã đơn hàng</div>
              <div className='col-span-2'>Sản phẩm</div>
              <div className='col-span-2'>Ảnh</div>
              <div className='col-span-1'>Ngày</div>
            </div>
          </div>
        </div>
        <div className='my-3 rounded-sm bg-white shadow'>
          <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-8 text-sm capitalize text-gray-500 shadow'>
            <div className='col-span-2'>
              <div className='flex items-center'>
                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                  <input type='checkbox' className='h-5 w-5 accent-orange' />
                </div>
                <div className='flex-grow text-black'>Nguyễn Văn A</div>
              </div>
            </div>
            <div className='col-span-10'>
              <div className='grid text-center grid-cols-10'>
                <div className='col-span-2 flex px-12'>
                  {'5'}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                </div>
                <div className='col-span-1'>Tốt</div>
                <div className='col-span-2'>DH001</div>
                <div className='col-span-2'>Intel i5</div>
                <div className='col-span-2'>
                  <img
                    src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFDbo5Hr107wUXC-VFm00ize9_SgYkh_g02_hjAGnJ_XzqMrYc7p3tGRLmdpAb8Z6jVRkpyC4-_lidXO5Em1ov95VWEPoR2X1w_fJ3s4YIPCqJbPLZauzwe1JKuMakKmEz75ReHloI&usqp=CAc'
                    alt=''
                    className='mx-auto h-20 w-15'
                  />
                </div>
                <div className='col-span-1'>24-1-2024</div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-8 text-sm capitalize text-gray-500 shadow'>
            <div className='col-span-2'>
              <div className='flex items-center'>
                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                  <input type='checkbox' className='h-5 w-5 accent-orange' />
                </div>
                <div className='flex-grow text-black'>Nguyễn Văn A</div>
              </div>
            </div>
            <div className='col-span-10'>
              <div className='grid text-center grid-cols-10'>
                <div className='col-span-2 flex px-12'>
                  {'5'}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                </div>
                <div className='col-span-1'>Tốt</div>
                <div className='col-span-2'>DH001</div>
                <div className='col-span-2'>Intel i5</div>
                <div className='col-span-2'>
                  <img
                    src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFDbo5Hr107wUXC-VFm00ize9_SgYkh_g02_hjAGnJ_XzqMrYc7p3tGRLmdpAb8Z6jVRkpyC4-_lidXO5Em1ov95VWEPoR2X1w_fJ3s4YIPCqJbPLZauzwe1JKuMakKmEz75ReHloI&usqp=CAc'
                    alt=''
                    className='mx-auto h-20 w-15'
                  />
                </div>
                <div className='col-span-1'>24-1-2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
