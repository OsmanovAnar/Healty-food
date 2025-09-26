const Lunch = () => {
  return (
    <div className="flex h-[150px] w-[540px] flex-col justify-around bg-[#252525] rounded-[10px] pl-[30px]">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>

      <div className="flex gap-[15px]">
        <img src="/lunch.png" alt="" />
        <p>07 Jan 2016</p>
      </div>

      <img className="w-[80px]" src="/social.png" alt="" />
    </div>
  )
}

export default Lunch
