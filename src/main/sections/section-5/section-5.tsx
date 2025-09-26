import Breakfast from './breakfast'
import Lunch from './lunch'

const Section5 = () => {
  return (
    <div className="flex h-[840px] w-[1110px] gap-[30px] ">
      <Breakfast />

      <div className="flex flex-col gap-[30px]">
        <Lunch />
        <Lunch />
        <Lunch />
      </div>
    </div>
  )
}

export default Section5
