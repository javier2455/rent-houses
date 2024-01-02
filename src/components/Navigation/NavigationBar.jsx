import { Navbar } from 'keep-react'
// import { CaretDown } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { DropdownComponent } from '../Dropdown/DropDown'
import { SidebarComponent } from '../Sidebar/SidebarNavigation'
import { useState } from 'react'
import { FaBars, FaHouseChimneyUser } from 'react-icons/fa6'
import DropDownOptions from '../Dropdown/DropDownOptions'
import DropDownTheme from '../Dropdown/DropDownTheme'

export const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <Navbar fluid={true} className='dark:bg-slate-900'>
      <Navbar.Container className='flex items-center justify-between'>
        <Navbar.Brand>
          <Link to={'/'} className='dark:text-white md:hidden'>
            <FaHouseChimneyUser className='text-[45px]' />
          </Link>
          <Link to={'/'} className='hidden md:flex md:items-center md:justify-start md:gap-3'>
            <FaHouseChimneyUser className='text-[40px] dark:text-white' />
            <p className='uppercase text-2xl dark:text-white'>
              Rent Your Dreams
            </p>
          </Link>
          {/* <img src={house.imageLg} alt={house.id} /> */}
        </Navbar.Brand>

        <Navbar.Container className='flex items-center gap-6'>
          <Navbar.Container
            tag='ul'
            className='lg:flex hidden items-center justify-between gap-4'
          >
            {/* Aqui puede ir contenido que se oculta cuando cambian las dimensiones a mobile */}
            {/* <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className='flex justify-center items-center cursor-pointer border hover:border-violet-700 px-4 py-2 rounded-lg text-violet-700 transition'
            >
              <p>Sign In</p>
            </div>
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className='flex justify-center items-center cursor-pointer px-4 py-2 rounded-lg bg-violet-700 text-white hover:bg-violet-800 transition'
            >
              <p>Sign Up</p>
            </div> */}
          </Navbar.Container>
          <Navbar.Container className='flex gap-3'>
            <DropdownComponent />
            <DropDownTheme />
            <DropDownOptions />
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className='lg:hidden flex justify-center items-center cursor-pointer border border-violet-700 px-4 py-2 rounded-lg hover:bg-violet-700 hover:text-white text-violet-700 transition -ml-3'
            >
              <FaBars className='text-xl' />
            </div>
          </Navbar.Container>
        </Navbar.Container>
        <SidebarComponent
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        {/* <Navbar.Collapse
          collapseType='sidebar'
          className='fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2'
        >
          <Navbar.Container tag='ul' className='flex flex-col gap-5'>
            <Navbar.Link
              linkName='Home'
              icon={<CaretDown size={20} />}
              className='!py-0'
            />
            <Navbar.Link
              linkName='Projects'
              icon={<CaretDown size={20} />}
              className='!py-0'
            />
            <Navbar.Link
              linkName='Blogs'
              icon={<CaretDown size={20} />}
              className='!py-0'
            />
            <Navbar.Link linkName='News' className='!py-0' />
            <Navbar.Link linkName='Resources' className='!py-0' />
            <Switch />
          </Navbar.Container>
        </Navbar.Collapse> */}
      </Navbar.Container>
    </Navbar>
  )
}
