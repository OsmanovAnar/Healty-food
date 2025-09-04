import { Clock, MapPin, Phone } from "lucide-react";

const Section1 = () => {
  return (
    <section className="w-full h-[1080px] flex flex-col justify-around items-center ">
      {/* <p className="text-[72px] text-center ">Your Favourite Food Felivered Fot & Fresh</p> */}
      <img src="/public/Cooking with fine Wi.png" alt="" />
      {/* <p className="text-[16px] w-[1100px] h-[163px] text-center">
        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
        marinating, so you can cook a fresh homemade dinner in just 15 minutes.
      </p> */}
      <img src="/public/Whether you barbecue.png" alt="" className="relative bottom-[150px]"/>
      <button className="w-[220px] h-[72px] bg-[#34C759] text-[18px] rounded-[43px]">
        Order now
      </button>

      <div className="flex justify-center items-center gap-[90px] mt-[70px]">
        <div className="flex flex-col items-center">
          <Clock  className="mb-[16px]"/>
          <div>Today 10:00 am - 7:00 pm</div>
          <div>Working hours</div>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="mb-[16px]" />
          <div>Velyka Vasylkivska 100</div>
          <div>Get Directions</div>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="mb-[16px]"/>
          <div>+38 (063)833 24 15</div>
          <div>Call Online</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
