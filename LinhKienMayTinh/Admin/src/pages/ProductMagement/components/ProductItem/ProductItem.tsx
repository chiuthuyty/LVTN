import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency } from 'src/utils/utils'

interface Props {
  product: ProductType
}
export default function ProductItem({ product }: Props) {
  return (
    <div className='grid grid-cols-9 bg-white text-center py-2 border-b border-gray-300'>
      <div className='col-span-1 pt-2 min-h-[2rem] line-clamp-6 text-xs'>{product.name}</div>
      <div className='col-span-1 pt-2'>đ{formatCurrency(product.price_before_discount)}</div>
      <div className='col-span-1 pt-2'>đ{formatCurrency(product.price)}</div>
      <div className='col-span-1 pt-2'>{product.quantity}</div>
      <Link to={path.desproduct} className='col-span-1 text-gray-500 pt-2'>
        Xem
      </Link>
      <div className='col-span-1'>
        <img src={product.image} alt='' className='mx-auto max-h-20 w-auto' />
      </div>
      <div className='col-span-1 overflow-x-auto flex'>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt='' className='mx-auto max-h-20 w-auto' />
        ))}
      </div>
      <div className='col-span-1 pt-2'>{product.category.name}</div>
      <div className='col-span-1 pt-2'>
        <div className='flex justify-center items-center space-x-2'>
          <button className='text-red-500'>Xóa</button>
          <Link to={path.editproduct} className='text-blue-500'>
            Sửa
          </Link>
        </div>
      </div>
    </div>
  )
}
