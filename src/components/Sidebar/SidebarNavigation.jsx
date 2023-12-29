import { Sidebar } from 'keep-react'
import {
  FaArrowLeftLong,
  FaRegSun,
  // FaRegMoon,
  FaUserPlus,
  FaRightToBracket,
  // FaRightFromBracket,
  // FaGear
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const SidebarComponent = ({ toggleMenu, setToggleMenu }) => {
  return (
    <Sidebar
      aria-label='Sidebar with multi-level dropdown example'
      className={`${
        toggleMenu ? 'translate-x-0' : 'translate-x-full'
      } transition-all duration-300 z-50 lg:hidden h-full fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-3/4`}
    >
      <div
        onClick={() => setToggleMenu(false)}
        className='w-full px-4 py-2 flex justify-end items-center cursor-pointer'
      >
        <p className='flex justify-center items-center gap-2 text-md text-gray-400'>
          <FaArrowLeftLong />
          Go back
        </p>
      </div>
      <Sidebar.ItemGroup className='flex flex-col justify-start items-start'>
        {/* label='3' */}
        <Sidebar.Item
          icon={<FaRegSun className='text-2xl text-violet-700' />}
          className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
          transition'
        >
          Light / Dark Mode
        </Sidebar.Item>
        {/* <Sidebar.Item
          icon={<FaGear className='text-2xl text-violet-700' />}
          className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
          transition'
        >
          Options
        </Sidebar.Item> */}
        <Link to='/sign-in'>
          <Sidebar.Item
            icon={<FaRightToBracket className='text-2xl text-violet-700' />}
            className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
          transition'
          >
            Sign In
          </Sidebar.Item>
        </Link>
        <Link to='/sign-up'>
          <Sidebar.Item
            icon={<FaUserPlus className='text-2xl text-violet-700' />}
            className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
          transition'
          >
            Sign Up
          </Sidebar.Item>
        </Link>
        {/* <Sidebar.Item
          icon={<FaRightFromBracket className='text-2xl text-violet-700' />}
          className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
          transition'
        >
          Sign Out
        </Sidebar.Item> */}
      </Sidebar.ItemGroup>
    </Sidebar>
  )
}
