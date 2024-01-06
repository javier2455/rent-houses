import { Dropdown } from 'keep-react'
import { FaGear, FaRightToBracket, FaUserPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
      <Link to={'/sign-in'}>
        <Dropdown.Item
          className='hover:bg-violet-700 hover:text-white'
          icon={<FaRightToBracket />}
          onClick={() => console.log('Sign In')}
        >
          Sign In
        </Dropdown.Item>
      </Link>
      <Link to={'/sign-up'}>
        <Dropdown.Item
          className='hover:bg-violet-700 hover:text-white'
          icon={<FaUserPlus />}
          onClick={() => console.log('Sing Up')}
        >
          Sing Up
        </Dropdown.Item>
      </Link>
    </Dropdown>
  )
}
