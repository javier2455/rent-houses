import { useContext } from 'react'
import { RiMapPinLine } from 'react-icons/ri'
import { HouseContext } from '../context/HouseContext'

export default function CountryDropdown() {
  const { setCountry, countries } = useContext(HouseContext)
  return (
    <div className='flex items-center h-14 border border-violet-700 rounded-lg lg:max-w-[296px] w-full'>
      <div className='h-full flex items-center px-2 border-r border-violet-700'>
        <RiMapPinLine className='text-xl text-violet-700' />
      </div>
      <div className='flex items-center rounded-lg h-full w-full'>
        <select
          className='select w-full focus:border-none focus:outline-none'
          onChange={(e) => setCountry(e.target.value)}
        >
          {/* <option selected className='text-[14px]'>
            Select your country destination
          </option> */}
          {countries.map((c, index) => (
            <option
              key={index}
              value={c}
              className='text-[14px]'
            >
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
