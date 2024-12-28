import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { serverUrl } from '../global/server';

const EditProduct = () => {
  const didRunOnce = useRef(false);
  const { productId } = useParams();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get(
          `${serverUrl}/all-products`,
          {
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        );

        const product = res.data.find((product) => product._id === productId);
        setValue('title', product.title);
        setValue('description', product.description);
        setValue('discountedPrice', product.discountedPrice);
        setValue('originalPrice', product.originalPrice);
        setValue('imageUrl', product.imageUrl);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (!didRunOnce.current) {
      fetchProductData();
      didRunOnce.current = true;
    }
  }, [productId, setValue]);

  const submitHandler = async ({
    title,
    description,
    discountedPrice,
    originalPrice,
    imageUrl,
  }) => {
    try {
      const resp = await axios.put(`${serverUrl}/all-products/${productId}`,
        {
          title,
          description,
          discountedPrice,
          originalPrice,
          imageUrl,
          _id: productId,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (resp.status === 200) {
        setValue('title', '');
        setValue('description', '');
        setValue('discountedPrice', '');
        setValue('originalPrice', '');
        setValue('imageUrl', '');
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl my-6'>Update Product</h1>
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


export default EditProduct