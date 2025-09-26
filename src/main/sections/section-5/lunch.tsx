import { Eye, MessageSquareIcon } from 'lucide-react'
import type { IItem } from './consts'

const Lunch = ({ text, date, comments, type, watchCount, bgImage }: IItem) => {
  return (
    <div
      className="flex h-[150px] w-[540px] flex-col justify-around rounded-[10px] bg-[#252525] bg-cover bg-center bg-no-repeat pl-[30px]"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <p className="">{text}</p>

      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center gap-3`}>
          <span>{type}</span>
          <span>{date}</span>
        </div>
        <div className={`flex items-center gap-6`}>
          <div className={`flex items-center gap-3.5`}>
            <Eye />
            {watchCount}
          </div>
          <div className={`flex items-center gap-3.5`}>
            <MessageSquareIcon />
            {comments}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lunch
