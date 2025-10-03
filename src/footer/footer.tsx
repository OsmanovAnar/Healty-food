import { Clock, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex h-[275px] w-full flex-col items-center justify-center gap-[62px] bg-[#252525]">
      <div className="mx-auto mt-[70px] flex w-full max-w-[915px] items-center justify-between text-white">
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

      <div className="flex flex-col items-center justify-center gap-[10px] bg-[#252525] pb-[30px]">
        <img className="h-[25px] w-[207px]" src="/Logo.png" alt="" />
        <p>© Designed by Yellow Snow. All Rights Reserved. </p>
      </div>
    </footer>
  )
}

export default Footer
