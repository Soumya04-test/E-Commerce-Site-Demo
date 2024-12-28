// import React from "react";
import Productcard from "../components/Productcard";
import { SwiperSlide ,Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Style.css';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import axios from "axios"

const fetchProductData = async () => {
  const response = await axios.get("http://localhost:5000/all-product") ;
  // console.log (response.data);
  const data = response.data;
  return data ;
} ;


const Shopping = () => {
   const [ data, setData] = useState ([]);


  const assignData = async () => {
    const fetchedData = await fetchProductData();
    setData(fetchedData);
  }
  useEffect(() => {
    assignData();
  } ,[]) ;

  return (
    <div  className="flex flex-col items-center justify-center">
      <h1 className="text-center my-5 text-4xl">Shopping Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
      {data.map((product)=> {
        return (
          <Productcard 
          key={product._id}
          // id={product.id}
          title={product.title}
          description={product.description}
          disPrice={product.discountedPrice}
          orgPrice={product.originalPrice}
          imgsrc={product.imageUrl}
          />
        )
      })}
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>  {data.map((product)=> {
        return (
          <Productcard
          key={product._id}
          id={product.id}
          title={product.title}
          description={product.description}
          disPrice={product.discountedPrice}
          orgPrice={product.originalPrice}
          imgsrc={product.imageUrl}
          />
        )
      })}</SwiperSlide>
        <SwiperSlide >{data.map((product)=> {
        return (
          <Productcard
          key={product._id}
          id={product.id}
          title={product.title}
          description={product.description}
          disPrice={product.discountedPrice}
          orgPrice={product.originalPrice}
          imgsrc={product.imageUrl}
          />
        )
      })}</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    
  );
};

export default Shopping;
