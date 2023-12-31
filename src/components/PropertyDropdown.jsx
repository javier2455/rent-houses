import { useContext } from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { HouseContext } from '../context/HouseContext'

export default function PropertyDropdown() {
  const { setProperty, properties } = useContext(HouseContext)
  return (
    <div className='flex items-center h-14 border border-violet-700 rounded-lg lg:max-w-[296px] w-full'>
      <div className='h-full flex items-center px-2 border-r border-violet-700'>
        <HiOutlineHome className='text-xl text-violet-700 dark:text-white' />
      </div>
      <div className='flex items-center rounded-lg h-full w-full'>
      <select
          className='select w-full h-full focus:border-none focus:outline-none rounded-r-lg dark:bg-slate-900 dark:text-white'
          onChange={(e) => setProperty(e.target.value)}
        >
          {/* <option selected className='text-[14px]'>
            Select your country destination
          </option> */}
          {properties.map((c, index) => (
            <option
              key={index}
              value={c}
              className='text-[14px]'
            >
              {c}
            </option>
          ))}
        </select>
        {/* <select className='select w-full focus:border-none focus:outline-none'>
          {properties.map((p, index) => (
            <option
              onClick={() => setProperty(p)}
              key={index}
              className='text-[14px]'
            >
              {p}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  )
}
