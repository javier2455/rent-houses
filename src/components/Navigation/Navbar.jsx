import { HiBars3CenterLeft } from "react-icons/hi2";
export default function Navbar() {
  return (
    <div className='navbar bg-base-100 border border-b-black rounded-b-md'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <HiBars3CenterLeft className="text-[1.4rem]"/>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-md dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2 w-52 bg-green-400'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Button</a>
      </div>
    </div>
  )
}
