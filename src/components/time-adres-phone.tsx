import { Clock, MapPin, Phone } from 'lucide-react'

const TimeAdresPhone = () => {
  return (
    <div>
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
    </div>
  )
}

export default TimeAdresPhone
