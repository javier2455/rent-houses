import { useContext } from 'react'
import { HiOutlineWallet } from 'react-icons/hi2'
import { HouseContext } from '../context/HouseContext'

export default function PriceDropdown() {
  const { setPrice } = useContext(HouseContext)
  const prices = [
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    }
  ]
  return (
    <div className='flex items-center h-14 border border-violet-700 rounded-lg lg:max-w-[296px] w-full'>
      <div className='h-full flex items-center px-2 border-r border-violet-700'>
        <HiOutlineWallet className='text-xl text-violet-700' />
      </div>
      <div className='flex items-center rounded-lg h-full w-full'>
        <select
          className='select w-full focus:border-none focus:outline-none'
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value={'Price (any)'} className='text-[14px]'>
            Price (any)
          </option>
          {prices.map((p, index) => (
            <option key={index} value={p.value} className='text-[14px]'>
              {p.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
