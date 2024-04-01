import instance from '@/apis'
import { getProduct } from '@/apis/product'
import { TProduct } from '@/interfaces/TProduct'
import { joiResolver } from '@hookform/resolvers/joi/src/joi.js'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

type Props = {
  onEdit: (product: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})
const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit = (product: TProduct) => {
    // console.log(data)
    onEdit({ ...product, id })
  }
  useEffect(() => {
    ;(async () => {
      // const data = await getProduct(`/${id}`)
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.title}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('price', { required: true, min: 0 })}
            defaultValue={product?.price}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('description')}
            defaultValue={product?.description}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
