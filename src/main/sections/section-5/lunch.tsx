import { Eye, MessageSquareIcon } from 'lucide-react'

const Lunch = () => {
  return (
    <div className="flex h-[150px] w-[540px] flex-col justify-around rounded-[10px] bg-[#252525] pl-[30px]">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>

      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center gap-3`}>
          <span>Lunch</span>
          <span>07 Jan 2016</span>
        </div>
        <div className={`flex items-center gap-6`}>
          <div className={`flex items-center gap-3.5`}>
            <Eye />
            275
          </div>
          <div className={`flex items-center gap-3.5`}>
            <MessageSquareIcon />
            12
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lunch
