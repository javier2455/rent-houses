import { Navbar } from 'keep-react'
import { CaretDown } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Switch } from '../Switch/Switch'
import { DropdownComponent } from '../Dropdown/DropDown'

export const NavigationBar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className='flex items-center justify-between'>
        <Navbar.Brand className='border border-red-400'>
          <Link to={'/'}>
            <p className='uppercase text-2xl'>Rent Your Dreams</p>
          </Link>
          {/* <img src={house.imageLg} alt={house.id} /> */}
        </Navbar.Brand>

        <Navbar.Container className='flex items-center gap-6'>
          <Navbar.Container
            tag='ul'
            className='lg:flex hidden items-center justify-between gap-4'
          >
            <DropdownComponent />
          </Navbar.Container>
          <Navbar.Container className='flex gap-1'>
            Menu
            <Navbar.Toggle className='block' />
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse
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
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  )
}
