import { useParams } from 'react-router-dom'
import { housesData } from '../data'
import RentForm from '../components/Form/RentForm'

export default function HouseToRent() {
  const { id } = useParams()
  const house = housesData.find((house) => house.id === parseInt(id))
  return (
    <section className='flex flex-col md:flex-row justify-between container border border-white mx-auto'>
      {/* <RentForm /> */}
      <div className='dark:text-white'>House Info</div>
    </section>
  )
}
