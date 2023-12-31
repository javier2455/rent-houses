import { useContext } from 'react'
import { HiOutlineWallet } from 'react-icons/hi2'
import { HouseContext } from '../context/HouseContext'

export default function PriceDropdown() {
  const { setPrice, coinType } = useContext(HouseContext)
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
      value: '190000 - 230000'
    }
  ]
  const pricesInCUP = [
    {
      value: '2900000 - 4000000'
    },
    {
      value: '4100000 - 6000000'
    },
    {
      value: '6100000 - 8000000'
    },
    {
      value: '8100000 - 10000000'
    },
    {
      value: '10010000 - 20000000'
    },
    {
      value: '20000000 - 60000000'
    }
  ]
  return (
    <div className='flex items-center h-14 border border-violet-700 rounded-lg lg:max-w-[296px] w-full'>
      <div className='h-full flex items-center px-2 border-r border-violet-700'>
        <HiOutlineWallet className='text-xl text-violet-700 dark:text-white' />
      </div>
      <div className='flex items-center rounded-lg h-full w-full '>
        <select
          className='select w-full h-full focus:border-none focus:outline-none rounded-r-lg dark:bg-slate-900 dark:text-white'
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value={'Price (any)'} className='text-[14px]'>
            Price (any)
          </option>
          {coinType === 'CUP' &&
            pricesInCUP.map((p, index) => (
              <option key={index} value={p.value} className='text-[14px]'>
                {p.value}
              </option>
            ))}
          {coinType !== 'CUP' &&
            prices.map((p, index) => (
              <option key={index} value={p.value} className='text-[14px]'>
                {p.value}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}
