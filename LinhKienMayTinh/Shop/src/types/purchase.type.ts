import { Product } from './product.type'

/*
-1 sản phẩm trong giỏ hàng
0 tất cả sản phẩm
1: sản phẩm chờ xác nhận từ chủ shop
2: sản phẩm dang được lấy hàng
3: sản phẩm đang vận chuyển
4: sản phẩm đã được giao
5: sản phẩm đã hủy
*/
export type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5
export type PurchaseListStatus = PurchaseStatus | 0
export interface Purchase {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PurchaseStatus
  user: string
  product: Product
  createdAt: string
  updatedAt: string
}
