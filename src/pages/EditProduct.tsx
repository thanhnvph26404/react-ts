import { useForm, SubmitHandler } from 'react-hook-form'
import { useUpdateProductMutation, useGetProductQuery } from '../api/product'
import { useNavigate , useParams} from 'react-router-dom'
import { useEffect } from 'react'

type Inputs = {
  name: string
  desc: string
  quantity: number
  origin: string
}

const EditProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const { data: product } = useGetProductQuery(id || '')
  const [updateProduct] = useUpdateProductMutation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
  const onsubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    updateProduct(data).unwrap()
      .then(() => {
        
      navigate('/')
    })
    
  }

  useEffect(() => {
reset(product)
  }, [product])
  return (
    <div>
      <h1>update product</h1>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input type="text" {...register('name', { required: true, minLength: 2 })}  placeholder='name'  />
        {errors.name && <span>name is required and min length is 2</span>}
        <input type="text" {...register('desc', { required: true })} placeholder='desc' />
        {errors.desc && <span>desc is required </span>}
        
        <input type="number" {...register('quantity', { required: true, min: 0 })}  placeholder='quanitty' />
        {errors.quantity && <span>quantity is required and greater than 0</span>}
        
        <select  id="" {...register('origin')}  >
          <option value="Việt Nam">Việt Nam</option>
          <option value="Trung Quốc">Trung Quốc</option>
          <option value="Đài Loan">Đài Loan</option>
        </select>
        <button className='mx-auto block bg-red-600 text-white' >Submit</button>
      </form>
    </div>
  )
}

export default EditProduct