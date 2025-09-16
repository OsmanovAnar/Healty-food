import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';




const SwiperSection = () => {
  return (
    <div className='w-[735px] h-[270px] flex items-center justify-center'>
      <Swiper
        slidesPerView={2}
        spaceBetween={34}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide><img className='w-full h-full flex items-center justify-center' src="/eat1.png" alt="Картинка" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full flex items-center justify-center' src="/eat2.png" alt="Картинка" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full flex items-center justify-center' src="/eat1.png" alt="Картинка" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full flex items-center justify-center' src="/eat2.png" alt="Картинка" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSection