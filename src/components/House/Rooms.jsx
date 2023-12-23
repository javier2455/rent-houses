import { BiBed, BiBath, BiArea } from 'react-icons/bi'

export default function Rooms({ typeRoom, count }) {
  return (
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'>
        {typeRoom === 'bathrooms' && <BiBath />}
        {typeRoom === 'bedrooms' && <BiBed />}
        {typeRoom === 'surface' && <BiArea />}
      </div>
      <div>{count}</div>
    </div>
  )
}
