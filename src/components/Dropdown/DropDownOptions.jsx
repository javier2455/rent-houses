import { Dropdown } from 'keep-react'
import { useContext } from 'react'
import {
  FaGear,
  FaRegMoon,
  FaRegSun,
  FaRightToBracket,
  FaRightFromBracket
} from 'react-icons/fa6'
import { ThemeContext } from '../../context/ThemeContext'

export default function DropDownOptions() {
  const { theme, handleChangeTheme } = useContext(ThemeContext)

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
        icon={theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
        onClick={handleChangeTheme}
      >
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRightToBracket />}
        onClick={() => console.log('Sign In')}
      >
        Sign In
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRightFromBracket />}
        onClick={() => console.log('Sing Up')}
      >
        Sing Up
      </Dropdown.Item>
    </Dropdown>
  )
}
