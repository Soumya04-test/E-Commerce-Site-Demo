import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const CreateNewProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const submitHandler = async ({ title, description, discountedPrice, originalPrice, imageUrl }) => {
      try {
        const res = await axios.post('http://localhost:5000/create-product', {
          title,
          description,
          discountedPrice,
          originalPrice,
          imageUrl
        })
        console.log(res.data);
  
        if (res.status === 201) {
          alert('Product created successfully')
        }
      } catch (e) {
        alert("Something went wrong")
      }
    }
    return (
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl my-6'>Product Creation</h1>
        <form
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className='mb-4'>
            <label className='block text-xl font-semibold leading-6 text-zinc-500'>Title</label>
            <input
              type="text"
              id='title'
              className='block w-96 px-4 py-2 mt-2 text-base text-zinc-900 placeholder-zinc-500 border border-zinc-500 focus:outline-none '
              {...register('title',
                { required: true })}
            />
            {errors.title && <span>This field is required</span>}
          </div>
  
          <div className='mb-4'>
            <label className='block text-xl font-semibold leading-6 text-zinc-500'>Description</label>
            <input
              type="text"
              id='description'
              className='block w-full px-4 py-2 mt-2 text-base text-zinc-900 placeholder-zinc-500 border border-zinc-500 focus:outline-none '
              {...register('description',
                { required: true })}
            />
            {errors.description && (<div>{errors.description.message}</div>)}
          </div>
  
          <div className='mb-4'>
            <label className='block text-xl font-semibold leading-6 text-zinc-500'>Discounted Price</label>
            <input
              type="number"
              id='discountedPrice'
              className='block w-full px-4 py-2 mt-2 text-base text-zinc-900 placeholder-zinc-500 border border-zinc-500 focus:outline-none '
              {...register('discountedPrice',
                { required: true })}
            />
            {errors.discountedPrice && (<div>{errors.discountedPrice.message}</div>)}
          </div>
  
          <div className='mb-4'>
            <label className='block text-xl font-semibold leading-6 text-zinc-500'>Original Price</label>
            <input
              type="number"
              id='originalPrice'
              className='block w-full px-4 py-2 mt-2 text-base text-zinc-900 placeholder-zinc-500 border border-zinc-500 focus:outline-none '
              {...register('originalPrice',
                { required: true })}
            />
            {errors.originalPrice && (<div>{errors.originalPrice.message}</div>)}
          </div>
  
          <div className='mb-4'>
            <label className='block text-xl font-semibold leading-6 text-zinc-500'>Image URL</label>
            <input
              type="text"
              id='imageUrl'
              className='block w-full px-4 py-2 mt-2 text-base text-zinc-900 placeholder-zinc-500 border border-zinc-500 focus:outline-none '
              {...register('imageUrl',
                { required: true })}
            />
            {errors.imageUrl && (<div>{errors.imageUrl.message}</div>)}
          </div>
  
          <div>
            <button
              type='submit'
              className='px-4 py-2 text-lg font-semibold text-white bg-zinc-500 rounded-md hover:bg-zinc-600'
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    )
  }

export default CreateNewProduct