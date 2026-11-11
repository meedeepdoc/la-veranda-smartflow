export interface MenuItem {
  id: string
  title: string
  price: number
  description: string
  image: string
  isSoldOut: boolean
}

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}
