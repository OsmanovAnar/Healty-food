import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// @ts-ignore
import 'swiper/css'

const SwiperSection = () => {
  return (
    <div className="flex h-[270px] w-[735px] items-center justify-center">
      <Swiper
        slidesPerView={2}
        spaceBetween={34}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide>
          <img
            className="flex h-full w-full items-center justify-center"
            src="/eat1.png"
            alt="Картинка"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="flex h-full w-full items-center justify-center"
            src="/eat2.png"
            alt="Картинка"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="flex h-full w-full items-center justify-center"
            src="/eat1.png"
            alt="Картинка"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="flex h-full w-full items-center justify-center"
            src="/eat2.png"
            alt="Картинка"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSection
