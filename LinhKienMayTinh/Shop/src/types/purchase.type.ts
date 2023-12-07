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
export type PrurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5
export type PurchaseListStatus = PrurchaseStatus | 0
export interface Prurchase {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PrurchaseStatus
  user: string
  product: Product
  createdAt: string
  updateAt: string
}
