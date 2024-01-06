import { Sidebar } from 'keep-react'
import {
  FaArrowLeftLong,
  FaUserPlus,
  FaRightToBracket,
  FaRegMoon,
  FaRegSun,
  FaComputer
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

export const SidebarComponent = ({ toggleMenu, setToggleMenu }) => {
  const { theme, handleChangeTheme } = useContext(ThemeContext)
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
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={
              theme === 'dark' ? (
                <FaRegMoon size={24} className='text-2xl text-violet-700' />
              ) : (
                <FaRegSun size={24} className='text-2xl text-violet-700' />
              )
            }
            className='text-violet-700 hover:bg-violet-200'
            label='Themes'
          >
            <Sidebar.Item
              icon={
                <FaRegSun
                  size={24}
                  className={`${
                    theme === 'light' && 'text-violet-700'
                  } text-2xl`}
                />
              }
              className={`${
                theme === 'light' ? 'text-violet-700' : 'text-gray-700'
              } hover:bg-violet-200 cursor-pointer`}
              onClick={() => handleChangeTheme('light')}
            >
              Light
            </Sidebar.Item>
            <Sidebar.Item
              icon={
                <FaRegMoon
                  size={24}
                  className={`${
                    theme === 'dark' && 'text-violet-700'
                  } text-2xl`}
                />
              }
              className={`${
                theme === 'dark' ? 'text-violet-700' : 'text-gray-700'
              } hover:bg-violet-200 cursor-pointer`}
              onClick={() => handleChangeTheme('dark')}
            >
              Dark
            </Sidebar.Item>
            <Sidebar.Item
              icon={
                <FaComputer
                  size={24}
                  className={`${
                    theme === 'system' && 'text-violet-700'
                  } text-2xl`}
                />
              }
              className={`${
                theme === 'system' ? 'text-violet-700' : 'text-gray-700'
              } hover:bg-violet-200 cursor-pointer`}
              onClick={() => handleChangeTheme('system')}
            >
              System
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Link to='/sign-in'>
            <Sidebar.Item
              icon={
                <FaRightToBracket
                  size={24}
                  className='text-2xl text-violet-700'
                />
              }
              className='text-violet-700 hover:bg-violet-200'
            >
              Sign In
            </Sidebar.Item>
          </Link>
          <Link to='/sign-up'>
            <Sidebar.Item
              icon={
                <FaUserPlus size={24} className='text-2xl text-violet-700' />
              }
              className='text-violet-700 hover:bg-violet-200'
            >
              Sign Up
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    // <Sidebar
    //   aria-label='Sidebar with multi-level dropdown example'
    //   className={`${
    //     toggleMenu ? 'translate-x-0' : 'translate-x-full'
    //   } transition-all duration-300 z-50 lg:hidden h-full fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-3/4`}
    // >
    //   <div
    //     onClick={() => setToggleMenu(false)}
    //     className='w-full px-4 py-2 flex justify-end items-center cursor-pointer'
    //   >
    //     <p className='flex justify-center items-center gap-2 text-md text-gray-400'>
    //       <FaArrowLeftLong />
    //       Go back
    //     </p>
    //   </div>
    //   <Sidebar.ItemGroup className='flex flex-col justify-start items-start'>
    //     {/* label='3' */}
    //     <Sidebar.Collapse
    //       icon={
    //         theme === 'dark' ? (
    //           <FaRegMoon size={24} className='text-2xl text-violet-700' />
    //         ) : (
    //           <FaRegSun size={24} className='text-2xl text-violet-700' />
    //         )
    //       }
    //       className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //       label='Themes'
    //     >
    //       <Sidebar.Item
    //         icon={<FaRegSun size={24} className={`${theme === 'light' ? 'text-violet-700' : 'text-gray-700'} text-2xl`} />}
    //         className={`${theme === 'light' ? 'text-violet-700' : 'text-gray-700'} hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition cursor-pointer`}
    //         onClick={() => handleChangeTheme('light')}
    //       >
    //         Light
    //       </Sidebar.Item>
    //       <Sidebar.Item
    //         icon={<FaRegMoon size={24} className={`${theme === 'dark' ? 'text-violet-700' : 'text-gray-700'} text-2xl`} />}
    //         className={`${theme === 'dark' ? 'text-violet-700' : 'text-gray-700'} hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //         transition cursor-pointer`}
    //         onClick={() => handleChangeTheme('dark')}
    //       >
    //         Dark
    //       </Sidebar.Item>
    //       <Sidebar.Item
    //         icon={<FaComputer size={24} className={`${theme === 'system' ? 'text-violet-700' : 'text-gray-700'} text-2xl`} />}
    //         className={`${theme === 'system' ? 'text-violet-700' : 'text-gray-700'} hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //         transition cursor-pointer`}
    //         onClick={() => handleChangeTheme('system')}
    //       >
    //         System
    //       </Sidebar.Item>
    //     </Sidebar.Collapse>
    //     <Sidebar.Item
    //       // icon={<FaRegSun className='text-2xl text-violet-700' />}
    //       className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //     ></Sidebar.Item>
    //     {/* <Sidebar.Item
    //       icon={<FaGear className='text-2xl text-violet-700' />}
    //       className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //     >
    //       Options
    //     </Sidebar.Item> */}
    //     <Link to='/sign-in'>
    //       <Sidebar.Item
    //         icon={<FaRightToBracket className='text-2xl text-violet-700' />}
    //         className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //       >
    //         Sign In
    //       </Sidebar.Item>
    //     </Link>
    //     <Link to='/sign-up'>
    //       <Sidebar.Item
    //         icon={<FaUserPlus className='text-2xl text-violet-700' />}
    //         className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //       >
    //         Sign Up
    //       </Sidebar.Item>
    //     </Link>
    //     {/* <Sidebar.Item
    //       icon={<FaRightFromBracket className='text-2xl text-violet-700' />}
    //       className='text-violet-700 hover:bg-white hover:border-l-[3px] hover:border-l-violet-700
    //       transition'
    //     >
    //       Sign Out
    //     </Sidebar.Item> */}
    //   </Sidebar.ItemGroup>
    // </Sidebar>
  )
}
