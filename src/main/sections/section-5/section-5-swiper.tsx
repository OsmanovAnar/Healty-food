import { EffectFlip, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
//  @ts-ignore
import 'swiper/css'
//  @ts-ignore
import 'swiper/css/effect-flip'

const RecipesSlider = () => {
  return (
    <Swiper
      className={`h-[510px] w-full max-w-[540px]`}
      modules={[EffectFlip, Navigation]}
      effect="flip"
      loop
      navigation={{
        nextEl: '.recipes-next',
      }}
    >
      <SwiperSlide className='bg-[url("/slider-img.png")]'>
        <p className={``}></p>
        <p>05 Jul 2016</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Jason Keller</p>
        <p>
          <img src="/social.png" alt="Breakfast Footer" />
        </p>
      </SwiperSlide>

      <SwiperSlide className='bg-[url("/slider-img.png")]'>
        <p className={``}></p>
        <p>05 Jul 2016</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Jason Keller</p>
        <p>
          <img src="/social.png" alt="Breakfast Footer" />
        </p>
      </SwiperSlide>

      <SwiperSlide className='bg-[url("/slider-img.png")]'>
        <p className={``}></p>
        <p>05 Jul 2016</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Jason Keller</p>
        <p>
          <img src="/social.png" alt="Breakfast Footer" />
        </p>
      </SwiperSlide>

      <SwiperSlide className='bg-[url("/slider-img.png")]'>
        <p className={``}></p>
        <p>05 Jul 2016</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>Jason Keller</p>
        <p>
          <img src="/social.png" alt="Breakfast Footer" />
        </p>
      </SwiperSlide>

      <button className={`recipes-next`} type="button"></button>
    </Swiper>
  )
}

export default RecipesSlider
