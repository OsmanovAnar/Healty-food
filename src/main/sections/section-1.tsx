import { Clock, MapPin, Phone } from 'lucide-react'

const Section1 = () => {
  return (
    <section className="my-[80px] flex h-full w-full flex-col items-center">
      {/* <p className="text-[72px] text-center ">Your Favourite Food Felivered Fot & Fresh</p> */}

      <img src="/public/Cooking with fine Wi.png" alt="" />

      {/* <p className="text-[16px] w-[1100px] h-[163px] text-center">
        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
        marinating, so you can cook a fresh homemade dinner in just 15 minutes.
      </p> */}

      <img
        className="mt-[16px]"
        src="/public/Whether you barbecue.png"
        alt=""
      />

      <button className="mt-[40px] h-[72px] w-[220px] rounded-[43px] bg-[#34C759] text-[18px]">
        Order now
      </button>

      <div className="mt-[70px] flex items-center justify-center gap-[90px] text-white">
        <div className="flex flex-col items-center">
          <Clock className="mb-[16px]" />
          <div>Today 10:00 am - 7:00 pm</div>
          <div>Working hours</div>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="mb-[16px]" />
          <div>Velyka Vasylkivska 100</div>
          <div>Get Directions</div>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="mb-[16px]" />
          <div>+38 (063)833 24 15</div>
          <div>Call Online</div>
        </div>
      </div>
    </section>
  )
}

export default Section1
