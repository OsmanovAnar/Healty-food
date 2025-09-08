import SwiperSection from "./Swiper"

const Section2 = () => {
  return (
    <div className="flex h-[736px] w-[1110px] flex-col items-center justify-around bg-[#252525]">
      <div className="flex items-center justify-center">
        <img
          className="absolute z-20"
          src="/public/The Basics Of Buying.png"
          alt=""
        />

        <img className="z-10" src="/public/ABOUT.png" alt="" />
      </div>
      <div>
        <img src="/public/Catering is the busi.png" alt="" />
      </div>

      <SwiperSection />
    </div>
  )
}

export default Section2
