import { Dropdown } from 'keep-react'
import { useContext } from 'react'
import { FaRegMoon, FaRegSun, FaComputer } from 'react-icons/fa6' /* FaComputer */
import { ThemeContext } from '../../context/ThemeContext'

export default function DropDownTheme() {
  const { theme, handleChangeTheme } = useContext(ThemeContext)

  return (
    <Dropdown
      arrowIcon={true}
      label={theme === 'dark' ? <FaRegMoon /> : <FaRegSun />}
      size='md'
      dismissOnClick={true}
      className='focus:ring-0 focus:bg-violet-700 focus:text-white bg-white hover:bg-violet-700 
      hover:text-white border border-violet-700 text-violet-700 transition-all hidden lg:block'
    >
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRegSun className='text-lg' />}
        onClick={() => handleChangeTheme('light')}
      >
        Light Mode
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaRegMoon className='text-lg' />}
        onClick={() => handleChangeTheme('dark')}
      >
        Dark Mode
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        icon={<FaComputer className='text-lg'/>}
        onClick={() => handleChangeTheme('system')}
      >
        System
      </Dropdown.Item>
    </Dropdown>
  )
}
