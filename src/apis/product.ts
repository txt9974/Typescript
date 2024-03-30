import instance from './index'
import { TProduct } from '@/interfaces/TProduct'

export const getProducts = async () => {
  try {
    const { data } = await instance.get('/products')
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getProduct = async (id: string) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const createProducts = async (product: TProduct) => {
  try {
    const { data } = await instance.post(`/products`, product)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const updateProducts = async (product: TProduct) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const removeProduct = async (id: string) => {
  try {
    await instance.delete(`/products/${id}`)
  } catch (error) {
    console.log(error)
  }
}
