import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from '../global/server';
import { useNavigate } from 'react-router-dom';


const AllProductsInAdminPanel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${serverUrl}/all-products`,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
     
      setProducts(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const deleteProduct = async (productId) => {
    try {
      const resp = await axios.delete(`${serverUrl}/all-products/${productId}`,
        {
          params: {
            id: productId,
          },
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (resp.status === 200) {
        fetchProducts();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='mb-48' >
      <table
        className='table-auto w-full'
      >
        <thead
          className='bg-zinc-500 text-white'
        >
          <tr
            className='text-left'
          >
            <th
              className='px-4 py-2'
            >Title</th>
            <th
              className='px-4 py-2'
            >Description</th>
            <th
              className='px-4 py-2'
            >Discounted Price</th>
            <th
              className='px-4 py-2'
            >Original Price</th>
            <th
              className='px-4 py-2'
            >Product Status</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody
              key={product._id}
              className='border-b border-zinc-500'
            >
              <tr>
                <td
                  className='px-4 py-2'
                >{product.title}</td>
                <td
                  className='px-4 py-2'
                >{product.description}</td>
                <td
                  className='px-4 py-2'
                >{product.discountedPrice}</td>
                <td
                  className='px-4 py-2'
                >{product.originalPrice}</td>
                <td
                  className='px-4 py-2 flex justify-start gap-4'
                >
                  <button 
                    className='p-2 rounded bg-green-500'
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                  >
                    Edit Product
                  </button>
                  <button 
                    className='p-2 rounded bg-red-500'
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete Product
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default AllProductsInAdminPanel