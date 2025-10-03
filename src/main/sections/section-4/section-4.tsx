import Card from './card'

const Section4 = () => {
  return (
    <div className="h-[1286px] w-[1110px] bg-amber-600">
      <img src="/DISHES.png" alt="" />

      <div className="flex flex-wrap items-center justify-between gap-[30px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Section4
