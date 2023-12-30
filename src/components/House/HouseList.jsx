import { useContext } from 'react'
import { HouseContext } from '../../context/HouseContext'
import { Link } from 'react-router-dom'
import House from './House'

import { ImSpinner10 } from "react-icons/im";

export default function HouseList() {
  const { houses, loading } = useContext(HouseContext)

  if(loading){
    return <ImSpinner10 className='mx-auto animate-spin text-violet-700 text-4xl my-[200px]'/>
  }

  if(houses.length < 1){
    return <div className='mx-auto text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found</div>
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {houses.map((house) => (
                <Link to={`/property/${house.id}`} key={house.id}>
                    <House data={house} />
                </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
