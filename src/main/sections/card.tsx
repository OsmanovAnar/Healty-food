const Cards = () => {
  return (
    <div className="flex gap-[30px]">
      <div className="flex h-[208px] w-[255px] cursor-pointer flex-col items-center justify-evenly bg-[#252525] hover:bg-[#34C759]">
        <h3 className="text-[22px]">Pick meals</h3>
        <p className="text-[13px]">
          Choose your meals from our diverse weekly menu. Find gluten or dairy
          free, low carb & veggie options.
        </p>
      </div>
      <div className="flex h-[208px] w-[255px] cursor-pointer flex-col items-center justify-evenly bg-[#252525] hover:bg-[#34C759]">
        <h3 className="text-[22px]">Choose how often</h3>
        <p className="text-[13px]">
          Our team of chefs do the prep work - no more chopping, measuring, or
          sink full of dishes!
        </p>
      </div>
      <div className="flex h-[208px] w-[255px] cursor-pointer flex-col items-center justify-evenly bg-[#252525] hover:bg-[#34C759]">
        <h3 className="text-[22px]">fast deliveries</h3>
        <p className="text-[13px]">
          Your freshly prepped 15-min dinner kits arrive on your doorstep in a
          refrigerated box.
        </p>
      </div>
      <div className="flex h-[208px] w-[255px] cursor-pointer flex-col items-center justify-evenly bg-[#252525] hover:bg-[#34C759]">
        <h3 className="text-[22px]">tasty meals</h3>
        <p className="text-[13px]">
          Gobble makes cooking fast, so you have more time to unwind and be with
          family.
        </p>
      </div>
    </div>
  )
}

export default Cards
