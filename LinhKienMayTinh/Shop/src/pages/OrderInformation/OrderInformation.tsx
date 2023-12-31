import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import purchaseApi from 'src/apis/purchase.api'

import AddressSelector from 'src/components/AddressSelector'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import InputNumber from 'src/components/InputNumber'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import { AppContext } from 'src/contexts/app.contexts'
import { OderSchema, oderSchema } from 'src/utils/rules'
import { formatCurrency, generaNameId } from 'src/utils/utils'

const buySchema = oderSchema.pick(['name', 'address', 'phone'])
type FormData = Pick<OderSchema, 'name' | 'address' | 'phone'>
export default function OrderInformation() {
  const { showPurchases } = useContext(AppContext)
  console.log('showPurchases', showPurchases)
  const navigate = useNavigate()
  const { refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const checkedPurchasesCount = showPurchases.length
  const totalCheckedPurchasePrice = useMemo(
    () =>
      showPurchases.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [showPurchases]
  )

  const buyProductsMutation = useMutation({
    mutationFn: purchaseApi.buyProduct,
    onSuccess: (data) => {
      refetch()
      toast.success(data.data.message, {
        position: 'top-center',
        autoClose: 1000
      })
      navigate(path.historyPurchase)
    }
  })

  // const handleBuyPurchases = () => {
  //   if (showPurchases.length > 0) {
  //     const body = showPurchases.map((purchase) => ({
  //       product_id: purchase.product._id,
  //       buy_count: purchase.buy_count
  //     }))
  //     buyProductsMutation.mutate(body)
  //   }
  // }

  const {
    register,
    control,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(buySchema)
  })

  const onSubmit = handleSubmit(() => {
    navigate(path.historyPurchase)
  })

  return (
    <div className='bg-neutral-100 py-10'>
      <div className='container'>
        <form className='grid grid-cols-2 gap-6 md:grid-cols-12' onSubmit={onSubmit}>
          <div className='col-span-6'>
            <div className='px-7 font-semibold'> Thông tin khách</div>
            <div className='px-7'>
              <AddressSelector />
              <div className='sm:pl-5 mt-4'>
                <Input
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                  register={register}
                  name='address'
                  placeholder='Số nhà và tên đường '
                  errorMessage={errors.address?.message}
                />
              </div>
            </div>
            <div className='px-7'>
              <div className='sm:w-[100%] sm:pl-5'>
                <Input
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                  register={register}
                  name='name'
                  placeholder='Họ và tên'
                  errorMessage={errors.name?.message}
                />
              </div>
            </div>
            <div className='px-7'>
              <div className='sm:w-[100%] sm:pl-5'>
                <Controller
                  control={control}
                  name='phone'
                  render={({ field }) => (
                    <InputNumber
                      classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border:gray-500 focus:shadow-sm'
                      placeholder='Số điện thoại'
                      errorMessage={errors.phone?.message}
                      {...field}
                      onChange={field.onChange}
                    />
                  )}
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

          <div className='col-span-6 '>
            Thông tin sản phẩm đặt
            <div className='bg-white my-3 rounded-sm  shadow'>
              {showPurchases.map((purchase) => (
                <div
                  key={purchase._id}
                  className='text-center rounded-sm border py-2 px-2 border-neutral-100 bg-white text-sm text-gray-500 mt-1 items-center'
                >
                  <div className='flex'>
                    <Link
                      to={`${path.home}${generaNameId({
                        name: purchase.product.name,
                        id: purchase.product._id
                      })}`}
                      className='h-20 w-20 flex-shrink-0 '
                    >
                      <img alt={purchase.product.name} src={purchase.product.image} />
                    </Link>
                    <div className='flex-grow px-5 pt-1 pb-2'>
                      <Link
                        to={`${path.home}${generaNameId({
                          name: purchase.product.name,
                          id: purchase.product._id
                        })}`}
                        className='line-clamp-2 text-left'
                      >
                        {purchase.product.name}
                      </Link>
                      <div className='text-left mt-3'>
                        ₫{formatCurrency(purchase.product.price)} x {purchase.buy_count}
                      </div>
                      <div className='text-right text-orange'>
                        ₫{formatCurrency(purchase.product.price * purchase.buy_count)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-right'>
              <div>Tổng thanh toán ({checkedPurchasesCount} sản phẩm)</div>
              <div className='ml-2 text-2xl text-orange'>₫{formatCurrency(totalCheckedPurchasePrice)}</div>
            </div>
            <div className='text-right'>
              <Button
                type='submit'
                disabled={buyProductsMutation.isLoading}
                className='bg-red-500 hover:bg-red-600  w-52 h-10 uppercase text-white justify-center items-center'
              >
                Đặt hàng
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
