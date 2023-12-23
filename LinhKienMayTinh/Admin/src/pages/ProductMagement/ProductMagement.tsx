export default function ProductManagement() {
  const categories = ['Tất cả', 'RAM', 'Bộ nhớ']

  return (
    <div className='bg-white mt-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-3xl font-semibold'>Quản lý sản phẩm</div>
          <div className='flex items-center space-x-4'>
            <div>
              <label htmlFor='category' className='text-gray-600 px-3'>
                Danh mục:
              </label>
              <select id='category' className='bg-white border border-gray-300 rounded-md p-2 focus:outline-none'>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button className='bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              Thêm sản phẩm
            </button>
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

        <div className='grid grid-cols-9 bg-white text-center py-2 border-b border-gray-300'>
          <div className='col-span-1 pt-2'>Itel i5</div>
          <div className='col-span-1 pt-2'>đ100.000</div>
          <div className='col-span-1 pt-2'>đ80.000</div>
          <div className='col-span-1 pt-2'>1000</div>
          <div className='col-span-1 pt-2'>Itel i5 là ....</div>
          <div className='col-span-1'>
            <img
              src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFDbo5Hr107wUXC-VFm00ize9_SgYkh_g02_hjAGnJ_XzqMrYc7p3tGRLmdpAb8Z6jVRkpyC4-_lidXO5Em1ov95VWEPoR2X1w_fJ3s4YIPCqJbPLZauzwe1JKuMakKmEz75ReHloI&usqp=CAc'
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='col-span-1'>
            <img
              src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcIRiASqj_ulbJpWZ5PvTNmmrPpE4XVc55bfZuRMgCKRUCeJoD2-EnZuLfSujzOzMyxmnQMDecnIKCbucLaN6eRqdU5bj3mV2NCiVQqcMr4-wmN_swE0BMVNnK6Dw8dMI6jsYeyJ0A6Q&usqp=CAc'
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='col-span-1 pt-2'>CPU</div>
          <div className='col-span-1 pt-2'>
            <div className='flex justify-center items-center space-x-2'>
              <button className='text-red-500'>Xóa</button>
              <button className='text-blue-500'>Sửa</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-9 bg-white text-center py-2 border-b border-gray-300'>
          <div className='col-span-1 pt-2'>Itel i5</div>
          <div className='col-span-1 pt-2'>đ100.000</div>
          <div className='col-span-1 pt-2'>đ80.000</div>
          <div className='col-span-1 pt-2'>1000</div>
          <div className='col-span-1 pt-2'>Itel i5 là ....</div>
          <div className='col-span-1'>
            <img
              src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFDbo5Hr107wUXC-VFm00ize9_SgYkh_g02_hjAGnJ_XzqMrYc7p3tGRLmdpAb8Z6jVRkpyC4-_lidXO5Em1ov95VWEPoR2X1w_fJ3s4YIPCqJbPLZauzwe1JKuMakKmEz75ReHloI&usqp=CAc'
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='col-span-1'>
            <img
              src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcIRiASqj_ulbJpWZ5PvTNmmrPpE4XVc55bfZuRMgCKRUCeJoD2-EnZuLfSujzOzMyxmnQMDecnIKCbucLaN6eRqdU5bj3mV2NCiVQqcMr4-wmN_swE0BMVNnK6Dw8dMI6jsYeyJ0A6Q&usqp=CAc'
              alt=''
              className='mx-auto'
            />
          </div>
          <div className='col-span-1 pt-2'>CPU</div>
          <div className='col-span-1 pt-2'>
            <div className='flex justify-center items-center space-x-2'>
              <button className='text-red-500'>Xóa</button>
              <button className='text-blue-500'>Sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
