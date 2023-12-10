import { Link } from 'react-router-dom'
import Popover from '../Popover'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import purchaseApi from 'src/apis/purchase.api'
import noproduct from 'src/assets/images/no product.png'
import { formatCurrency } from 'src/utils/utils'
import NavHeader from '../NavHeader'
import useSearchProducts from 'src/hooks/useSearchProducts'

const MAX_PURCHASE = 5
export default function Header() {
  const { isAuthenticated } = useContext(AppContext)
  const { onSumbitSearch, register } = useSearchProducts()
  //Khi chúng ta chuyển trang thì Header chỉ bị re-render
  //Chứ không bị umout - mouting again
  //(Tất nhiên là trừ trường hợp logout rồi nhảy sang RegisterLayout rồi nhảy vào lại)
  // Nên các query này sẽ không bị inactive => không bị gọi lại => không cần thiết phải set stale: Infinty
  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const purchasesInCart = purchasesInCartData?.data.data

  return (
    <div className='pb-5 pt-2 bg-[#f58420] text-white'>
      <div className='container'>
        <NavHeader />

        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to='/' className='col-span-2'>
            <div className='flex flex-col items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 48 48'
                className='h-11 w-full fill-white'
              >
                <path
                  fill='#d6e5e5'
                  d='M16.063,43.396c5.269,0.064,14.96,0.837,21.838-0.364c1-0.175,2.01-0.41,2.882-0.93 c1.475-0.879,2.396-2.491,2.811-4.157c0.416-1.666,0.386-3.407,0.354-5.124c-0.14-7.516-0.28-14.033-0.419-21.549 c-0.013-0.685-0.465-2.521-0.747-3.145c-0.26-0.576-0.694-1.071-1.2-1.448c-3.55-2.646-9.487-2.083-14.55-2.177 c-4.023-0.074-8.945,1.032-12.949,0.642c-1.381-0.134-2.789-0.336-4.145-0.036c-2.758,0.61-4.706,3.205-5.48,5.922 s-0.619,5.596-0.654,8.421c-0.015,1.253-0.07,2.505-0.124,3.757C3.64,24.11,3.601,25.015,3.575,25.92 c-0.109,3.869,0.035,6.746,0.43,10.597c0.122,1.189,0.29,2.433,0.993,3.399c0.431,0.593,1.035,1.036,1.661,1.417 C9.396,42.999,12.859,43.357,16.063,43.396z'
                ></path>
                <path
                  fill='#010101'
                  d='M28.011,44.197c-2.758,0-5.46-0.097-7.781-0.18c-1.563-0.057-2.981-0.107-4.173-0.122 c-2.922-0.036-6.66-0.311-9.657-2.136c-0.567-0.345-1.285-0.832-1.806-1.55c-0.765-1.051-0.956-2.375-1.086-3.643 c-0.419-4.083-0.536-6.973-0.433-10.661c0.025-0.908,0.064-1.815,0.105-2.723c0.056-1.307,0.107-2.523,0.123-3.74 c0.006-0.477,0.006-0.954,0.007-1.433c0.001-2.357,0.003-4.796,0.666-7.119C4.709,8.322,6.631,5.325,9.83,4.618 c1.278-0.282,2.575-0.15,3.829-0.021l0.472,0.047c2.206,0.215,4.752-0.04,7.212-0.286C23.266,4.166,25.26,3.978,27.04,4 c0.855,0.016,1.734,0.011,2.624,0.01c4.486-0.006,9.135-0.031,12.216,2.266c0.607,0.453,1.076,1.021,1.357,1.645 c0.3,0.663,0.776,2.571,0.791,3.342c0.069,3.758,0.14,7.266,0.209,10.773c0.07,3.508,0.14,7.017,0.21,10.774 c0.032,1.727,0.065,3.512-0.369,5.255c-0.5,2.009-1.58,3.596-3.04,4.467c-0.959,0.571-2.033,0.814-3.052,0.992 C35.002,44.046,31.463,44.197,28.011,44.197z M11.51,5.451c-0.498,0-0.989,0.038-1.464,0.144c-2.772,0.612-4.484,3.384-5.108,5.57 c-0.624,2.19-0.626,4.557-0.627,6.846c-0.001,0.482-0.001,0.964-0.007,1.444c-0.016,1.228-0.068,2.454-0.12,3.681 c-0.044,0.994-0.083,1.896-0.108,2.798c-0.103,3.643,0.014,6.496,0.427,10.532c0.121,1.178,0.281,2.306,0.9,3.156 c0.325,0.447,0.793,0.844,1.517,1.284c2.79,1.698,6.355,1.955,9.149,1.989l0,0c1.199,0.015,2.626,0.065,4.196,0.122 c5.184,0.187,12.284,0.442,17.55-0.479c0.924-0.162,1.893-0.379,2.712-0.867c1.658-0.989,2.329-2.836,2.581-3.85 c0.403-1.614,0.371-3.332,0.34-4.993c-0.069-3.759-0.14-7.267-0.209-10.774c-0.07-3.508-0.14-7.017-0.21-10.774 c-0.012-0.628-0.452-2.395-0.703-2.949c-0.211-0.469-0.571-0.902-1.043-1.254C38.468,4.98,33.997,5,29.667,5.01 C28.774,5.014,27.885,5.017,27.022,5c-1.736-0.032-3.6,0.155-5.58,0.354c-2.511,0.251-5.104,0.51-7.409,0.287l-0.476-0.049 C12.88,5.522,12.188,5.451,11.51,5.451z'
                ></path>
                <path
                  fill=' #f58420'
                  d='M37.303,36.459c-0.406-1.079-1.881-1.716-3.022-1.881c-1.141-0.165-2.194-0.21-3.274,0.191 c-1.081,0.402-2.119,0.92-3.225,1.246c-3.005,0.886-6.233,0.287-9.266-0.495c-1.113-0.287-2.224-0.599-3.272-1.071 c-2.774-1.248-5.624-3.956-6.696-6.802c3.439,2.293,8.157,4.272,12.212,3.467c1.253-0.248,2.669-0.979,3.771-1.625 c-1.279-1.222-2.474-2.492-3.754-3.715c-3.639-3.476-7.589-6.898-10.223-11.186c2.761,3.43,7.078,5.399,10.899,7.586 c-2.614-2.878-5.023-6.137-6.827-9.581c2.989,2.898,6.159,5.844,9.499,8.33c1.54,1.146,3.589,2.582,5.253,3.539 c1.476-2.098,1.278-5.228,0.494-7.671s-1.93-4.202-3.417-6.292c3.097,1.484,5.26,3.682,6.871,6.715s2.326,6.505,2.254,9.938 c-0.011,0.552-0.137,1.2-0.168,1.751c0.744,0.875,1.405,1.22,2.277,2.284c0.641,0.781,1.031,2.297,0.859,2.922 C38.317,34.945,37.939,35.87,37.303,36.459z'
                ></path>
                <path
                  fill='#010101'
                  d='M37.303,36.959c-0.038,0-0.077-0.004-0.115-0.014c-0.162-0.038-0.294-0.154-0.353-0.311 c-0.31-0.82-1.556-1.407-2.626-1.562c-1.117-0.161-2.061-0.193-3.028,0.165c-0.401,0.149-0.797,0.315-1.192,0.48 c-0.664,0.278-1.351,0.565-2.065,0.776c-3.13,0.922-6.431,0.309-9.533-0.49c-1.031-0.267-2.226-0.593-3.353-1.1 c-3.042-1.368-5.903-4.28-6.958-7.082c-0.077-0.203-0.014-0.433,0.156-0.567c0.17-0.137,0.409-0.146,0.589-0.024 c1.996,1.331,7.146,4.324,11.837,3.393c0.818-0.162,1.839-0.578,3.04-1.239c-0.476-0.466-0.943-0.937-1.41-1.407 c-0.613-0.618-1.227-1.235-1.861-1.842c-0.512-0.489-1.03-0.978-1.55-1.467c-3.174-2.988-6.455-6.079-8.753-9.819 c-0.139-0.225-0.078-0.519,0.138-0.67c0.214-0.151,0.511-0.111,0.678,0.095c2.119,2.632,5.231,4.408,8.291,6.095 c-2.03-2.48-3.725-5.009-5.052-7.543c-0.113-0.218-0.053-0.486,0.145-0.633c0.196-0.146,0.471-0.129,0.646,0.041 c2.753,2.669,6.027,5.741,9.45,8.288c0.85,0.633,2.931,2.15,4.79,3.264c1.111-1.973,0.842-4.782,0.182-6.841 c-0.782-2.438-1.979-4.23-3.349-6.155c-0.133-0.186-0.122-0.438,0.024-0.612c0.147-0.174,0.393-0.227,0.599-0.129 c3.124,1.497,5.379,3.699,7.097,6.932c1.589,2.992,2.389,6.514,2.313,10.184c-0.007,0.321-0.049,0.673-0.092,1.021 c-0.023,0.186-0.046,0.369-0.062,0.547c0.274,0.304,0.544,0.544,0.826,0.796c0.408,0.364,0.83,0.74,1.323,1.342 c0.711,0.868,1.185,2.538,0.955,3.372c-0.317,1.156-0.784,2.025-1.387,2.584C37.549,36.912,37.428,36.959,37.303,36.959z M9.771,28.992c1.262,2.053,3.413,3.983,5.677,5.001c1.056,0.475,2.201,0.787,3.192,1.043c2.965,0.765,6.107,1.353,9,0.5 c0.662-0.195,1.294-0.46,1.963-0.739c0.407-0.171,0.815-0.342,1.229-0.496c1.234-0.457,2.422-0.374,3.52-0.218 c1.095,0.158,2.333,0.677,3.021,1.521c0.276-0.415,0.509-0.959,0.691-1.627c0.12-0.434-0.206-1.792-0.764-2.472 c-0.444-0.542-0.836-0.892-1.216-1.23c-0.339-0.303-0.689-0.615-1.056-1.046c-0.083-0.098-0.126-0.225-0.118-0.353 c0.015-0.257,0.048-0.533,0.082-0.813c0.039-0.314,0.079-0.632,0.085-0.921c0.073-3.499-0.687-6.851-2.195-9.693 c-1.25-2.352-2.801-4.122-4.795-5.45c0.901,1.391,1.682,2.841,2.259,4.641c0.378,1.178,1.455,5.244-0.561,8.11 c-0.148,0.213-0.436,0.275-0.658,0.146c-2-1.151-4.374-2.881-5.303-3.571c-2.454-1.827-4.827-3.914-6.988-5.932 c1.397,2.173,3.066,4.331,4.985,6.445c0.165,0.182,0.174,0.457,0.02,0.649c-0.154,0.191-0.427,0.243-0.638,0.12 c-0.666-0.381-1.346-0.755-2.03-1.131c-1.729-0.951-3.49-1.92-5.111-3.05c1.713,1.943,3.627,3.746,5.503,5.513 c0.521,0.492,1.041,0.981,1.556,1.473c0.641,0.612,1.26,1.236,1.879,1.86c0.618,0.622,1.236,1.244,1.875,1.854 c0.113,0.108,0.169,0.264,0.151,0.419c-0.019,0.156-0.109,0.295-0.244,0.374c-1.572,0.921-2.856,1.472-3.926,1.684 C16.737,32.429,12.384,30.494,9.771,28.992z'
                ></path>
              </svg>
              <div className='text-center font-semibold text-white]'>FLYER</div>
            </div>
          </Link>
          <form className='col-span-9' onSubmit={onSumbitSearch}>
            <div className='bg-white rounded-sm p-1 flex'>
              <input
                type='text'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent '
                placeholder='TÌM KIẾM SẢN PHẨM'
                {...register('name')}
              />
              <button className='rounded-sm py-2 px-6 flex-shrink-0 bg-[#f58420] hover:opacity-90'>
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
          </form>
          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border border-gray-200 max-w-[400px] min-w-[300px] text-sm'>
                  {purchasesInCart && purchasesInCart.length > 0 ? (
                    <div className='p-2'>
                      <div className='text-gray-400 capitalize'>Sản Phẩm Mới Thêm</div>
                      <div className='mt-5'>
                        {purchasesInCart.slice(0, MAX_PURCHASE).map((purchase) => (
                          <div className='mt-2 py-2 flex hover:bg-gray-100' key={purchase._id}>
                            <div className='flex-shrink-0'>
                              <img
                                src={purchase.product.image}
                                alt={purchase.product.name}
                                className='w-11 h-11 object-cover'
                              />
                            </div>
                            <div className='flex-grow ml-2 overflow-hidden'>
                              <div className='truncate'>{purchase.product.name}</div>
                            </div>
                            <div className='ml-2 flex-shrink-0'>
                              <span className='text-orange'>₫{formatCurrency(purchase.product.price)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='flex mt-6 items-center justify-between'>
                        <div className='capitalize text-xs text-gray-500'>
                          {purchasesInCart.length > MAX_PURCHASE ? purchasesInCart.length - MAX_PURCHASE : ''}
                          Thêm hàng vào giỏ
                        </div>
                        <Link
                          to={path.cart}
                          className='capitalize bg-orange hover:bg-opacity-90 px-4 py-2 rounded-sm text-white'
                        >
                          Xem giỏ hàng
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className='p-2 w-[300px] h-[300px] flex items-center justify-center flex-col'>
                      <img src={noproduct} alt='no product' className='h-24 w-24' />
                      <div className='mt-3 capitalize'>Chưa có sản phẩm</div>
                    </div>
                  )}
                </div>
              }
            >
              <Link to='/' className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
                {purchasesInCart && purchasesInCart.length > 0 && (
                  <span className='absolute top-[-5px] left-[17px] rounded-full px-[9px] py-[1px] text-orange bg-white text-xs'>
                    {purchasesInCart?.length}
                  </span>
                )}
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
