import Breakfast from './breakfast'
import { items } from './consts'
import Lunch from './lunch'

const Section5 = () => {
  return (
    <div className="flex h-[840px] w-[1110px] gap-[30px]">
      <Breakfast />

      <div className="flex flex-col gap-[30px]">
        {items.map((item) => (
          <Lunch key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Section5
