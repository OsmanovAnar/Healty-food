import { items } from './consts'
import Lunch from './lunch'
import RecipesSlider from './section-5-swiper'

const Section5 = () => {
  return (
    <div className="flex h-[840px] w-[1110px] gap-[30px]">
      <RecipesSlider />

      <div className="flex flex-col gap-[30px]">
        {items.map((item) => (
          <Lunch key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Section5
