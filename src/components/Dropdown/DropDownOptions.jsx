import { Dropdown } from 'keep-react'
import { useState } from 'react'
import {
  FaGear,
  FaRegMoon,
  FaRegSun,
  FaRightToBracket,
  FaRightFromBracket
} from 'react-icons/fa6'

export default function DropDownOptions() {
  const [theme, setTheme] = useState(false)
  return (
    <Dropdown
      arrowIcon={true}
      label={<FaGear />}
      size='md'
      dismissOnClick={true}
      className='focus:ring-0 focus:bg-violet-700 focus:text-white bg-white hover:bg-violet-700 
      hover:text-white border border-violet-700 text-violet-700 transition-all hidden lg:block'
    >
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={theme ? <FaRegMoon /> : <FaRegSun />}
        onClick={() => setTheme(!theme)}
      >
        Light / Dark Mode
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRightToBracket />}
        onClick={() => console.log('EUR')}
      >
        Sign In
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRightFromBracket />}
        onClick={() => console.log('CUP')}
      >
        Sing Up
      </Dropdown.Item>
    </Dropdown>
  )
}
