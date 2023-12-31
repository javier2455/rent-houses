import { useContext } from 'react'
import Rooms from './Rooms'
import { HouseContext } from '../../context/HouseContext'
import { getPriceByCoin } from '../../utils/functions'

export default function House({ data }) {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    data
  const { coinType } = useContext(HouseContext)

  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl border transition dark:bg-slate-900 dark:hover:shadow-md dark:hover:shadow-violet-700 dark:border-violet-700'>
      <img src={image} alt='house details' className='mb-8' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>
          {country}
        </div>
        {/* <div>{country}</div> */}
      </div>
      <div className='text-lg font-semibold max-w-[260px] dark:text-white'>
        {address}
      </div>
      <div className='flex gap-x-4 my-4'>
        <Rooms typeRoom={'bedrooms'} count={bedrooms} />
        <Rooms typeRoom={'bathrooms'} count={bathrooms} />
        <Rooms typeRoom={'surface'} count={surface} />
      </div>
      <div className='text-lg font-semibold text-violet-700 mb-4 dark:font-bold dark:text-white'>
        $ {getPriceByCoin(price, coinType)}
      </div>
    </div>
  )
}
