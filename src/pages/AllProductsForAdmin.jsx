import React from 'react'
import AllProductsInAdminPanel from '../components/AllProductsInAdminPanel';
import { useNavigate } from 'react-router-dom';

const AllProductsForAdmin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='container mx-auto'>
        <button 
          className='bg-zinc-500 text-white px-4 py-2 rounded-md my-2'
          onClick={() => navigate('/create-product')}
        >
          Create New Product
        </button>

        <h1 className='text-2xl font-semibold my-2'>All Products</h1>
        <AllProductsInAdminPanel />
      </div>
    </>
  )
}

export default AllProductsForAdmin