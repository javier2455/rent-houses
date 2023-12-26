import { Sidebar } from 'keep-react'
import {
  Chat,
  LockSimple,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users
} from 'phosphor-react'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const SidebarComponent = ({ toggleMenu, setToggleMenu }) => {
  return (
    <Sidebar
      aria-label='Sidebar with multi-level dropdown example'
      className={`${
        toggleMenu ? 'translate-x-0' : 'translate-x-full'
      } transition-all duration-300 z-50 lg:hidden h-full fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2`}
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
      <Sidebar.ItemGroup>
        <Sidebar.Item href='#' icon={<SquaresFour size={24} />}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item icon={<ShoppingCart size={24} />}>
          E-commerce
        </Sidebar.Item>
        <Sidebar.Item
          href='#'
          icon={<LockSimple size={24} />}
          label='pro'
          labelColor='gray'
        >
          Components
        </Sidebar.Item>
        <Sidebar.Item href='#' icon={<Chat size={24} />} label='3'>
          Inbox
        </Sidebar.Item>
        <Sidebar.Item href='#' icon={<Users size={24} />}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href='#' icon={<ShoppingBagOpen size={24} />}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href='#' icon={<SignIn size={24} />}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href='#' icon={<UserPlus size={24} />}>
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  )
}
