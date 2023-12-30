import { useContext } from 'react'
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceDropdown from './PriceDropdown'

import { HiOutlineSearchCircle } from 'react-icons/hi'
import { HouseContext } from '../context/HouseContext'
// import { HouseContext } from '../context/HouseContext'

export default function Search() {
  const { handleSearch } = useContext(HouseContext)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-lg bg-white lg:bg-transparent lg:backdrop-blur rounded-lg dark:lg:shadow-white dark:lg:shadow-sm'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceDropdown />
      <button
        onClick={() => handleSearch()}
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[140px] h-14 rounded-lg flex justify-center items-center text-white text-3xl dark:bg-slate-900 dark:border-white dark:border dark:hover:border-none'
      >
        <HiOutlineSearchCircle />
      </button>
    </div>
  )
}
