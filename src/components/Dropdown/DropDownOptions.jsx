import { Dropdown } from 'keep-react'
import {
  FaGear,
  FaRightToBracket,
  FaRightFromBracket
} from 'react-icons/fa6'

export default function DropDownOptions() {

  return (
    <Dropdown
      arrowIcon={true}
      label={<FaGear />}
      size='md'
      dismissOnClick={true}
      className='focus:ring-0 focus:bg-violet-700 focus:text-white bg-white hover:bg-violet-700 
      hover:text-white border border-violet-700 text-violet-700 transition-all hidden lg:block dark:bg-slate-900 dark:text-white'
    >
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
