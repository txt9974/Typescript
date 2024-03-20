export type Product = {
  id: number
  title: string
  description: string | undefined
  price: number
  discountPercentage: number
  rating: number | undefined
  stock: number | undefined
  brand: string | undefined
  category: string | undefined
  thumbnail: string | undefined
  images: string[] | undefined
}
