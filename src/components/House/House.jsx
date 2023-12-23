import Rooms from './Rooms'

export default function House({ data }) {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    data
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl border transition'>
      <img src={image} alt='house details' className='mb-8' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>
          {country}
        </div>
        {/* <div>{country}</div> */}
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <Rooms typeRoom={'bedrooms'} count={bedrooms} />
        <Rooms typeRoom={'bathrooms'} count={bathrooms} />
        <Rooms typeRoom={'surface'} count={surface} />
      </div>
      <div className='text-lg font-semibold text-violet-700 mb-4'>
        $ {price}
      </div>
    </div>
  )
}