import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


const SwiperSection = () => {
  return (
      <Swiper
        slidesPerView={2}
        spaceBetween={35}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[735px] h-[270px] flex items-center justify-around bg-[#1A1A1A]"
      >
        <SwiperSlide><img className='w-full h-full' src="/eat1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="/eat2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="/eat1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="/eat2.png" alt="" /></SwiperSlide>
      </Swiper>
  )
}



export default SwiperSection