import { useParams, Link } from 'react-router-dom'

import { housesData } from '../data'

import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineCurrencyDollar,
  HiDevicePhoneMobile
} from 'react-icons/hi2'
import { RiMapPinLine } from 'react-icons/ri'
import ScrollToTopController from '../components/Scroll/ScrollToTopController'
import { getPriceByCoin } from '../utils/functions'
import { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'

export default function PropertyDetails() {
  let { id } = useParams()
  const { coinType } = useContext(HouseContext)
  const house = housesData.find((house) => house.id === parseInt(id))
  return (
    <section>
      {/* I added this component because each time i navigate to other page the scroll goes to the bottom of the screen */}
      <ScrollToTopController />
      <div className='container mx-auto mb-14'>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt={house.id} />
            </div>
            <div className='flex gap-6 text-violet-700 mb-6 pl-4'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div className='font-semibold text-[18px] max-w-[90%] pl-4 text-pretty'>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to={''} className='text-violet-700 text-sm'>
                  View Listing
                </Link>
              </div>
            </div>
            {/* Agent information */}
            <div className='flex flex-col gap-y-4'>
              <div>
                <div className='flex items-center justify-start'>
                  <HiOutlineHome className='mr-3 text-2xl text-violet-700 text-center' />
                  <h2 className='text-2xl font-semibold'>{house.name}</h2>
                </div>
                <div className='border-b border-b-gray-400 h-1 w-full my-3' />
                <div className='flex items-center justify-start'>
                  <RiMapPinLine className='mr-3 text-2xl text-violet-700 text-center' />
                  <h2 className='text-2xl font-semibold'>{house.address}</h2>
                </div>
                <div className='border-b border-b-gray-400 h-1 w-full my-3' />
                <div className='flex items-center justify-start'>
                  <HiDevicePhoneMobile className='mr-3 text-2xl text-violet-700 text-center' />
                  <h2 className='text-2xl font-semibold'>
                    {house.agent.phone}
                  </h2>
                </div>
                <div className='border-b border-b-gray-400 h-1 w-full my-3' />
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                <HiOutlineInformationCircle className='text-2xl text-violet-700 mr-1' />
                <div className='bg-green-500 text-white px-3 rounded-full'>
                  {house.type}
                </div>
                <div className='bg-violet-500 text-white px-3 rounded-full'>
                  {house.country}
                </div>
              </div>
              <div className='border-b border-b-gray-400 h-1 w-full my-3' />
              <div className='flex items-center justify-start'>
                <HiOutlineCurrencyDollar className='text-2xl text-violet-700 mr-3' />
                <div className='text-3xl text-violet-700 font-semibold'>
                  {getPriceByCoin(house.price, coinType)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
