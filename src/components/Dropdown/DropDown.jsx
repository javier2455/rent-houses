import { Dropdown } from 'keep-react'
import { useContext } from 'react'
import { HouseContext } from '../../context/HouseContext'

export const DropdownComponent = () => {
  const { coinType, setCoinType } = useContext(HouseContext)
  return (
    <Dropdown
      label={coinType}
      size='sm'
      dismissOnClick={true}
      className='focus:ring-0 focus:bg-violet-700 focus:text-white bg-white hover:bg-violet-700 hover:text-white border border-violet-700 text-violet-700 transition-all dark:bg-slate-900 dark:text-white'
    >
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        onClick={() => setCoinType('USD')}
      >
        USD
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        onClick={() => setCoinType('EUR')}
      >
        EUR
      </Dropdown.Item>
      <Dropdown.Item
        className='hover:bg-violet-700 hover:text-white'
        onClick={() => setCoinType('CUP')}
      >
        CUP
      </Dropdown.Item>
    </Dropdown>
  )
}
