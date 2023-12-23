import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* site-name */}
        <Link to={'/'}>
          <p className='uppercase text-2xl'>Rent Your Dreams</p>
        </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link
            to={''}
            className='text-violet-900 border border-violet-700 hover:bg-violet-700 hover:text-white transition px-4 py-3 rounded-lg'
          >
            Log in
          </Link>
          <Link
            to={''}
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
          >
            Sing up
          </Link>
        </div>
      </div>
    </header>
  )
}
