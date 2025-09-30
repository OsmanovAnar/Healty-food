export interface IItem {
  id: number
  text: string
  type: 'LUNCH' | 'DINNER' | 'BREAKFAST' | 'SWEETS'
  date: string
  watchCount: number
  comments: number
  bgImage?: string
}

export const items: IItem[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    type: 'LUNCH',
    date: '07 Jan 2016',
    watchCount: 275,
    comments: 12,
    bgImage: '',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    type: 'DINNER',
    date: '07 Jan 2016',
    watchCount: 275,
    comments: 12,
    bgImage: '/dinner-bg.png',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    type: 'SWEETS',
    date: '07 Jan 2016',
    watchCount: 275,
    comments: 12,
    bgImage: '',
  },
]
