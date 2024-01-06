import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound404 from './pages/NotFound404'
import HouseToRent from './pages/HouseToRent'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white dark:bg-slate-900'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/house-to-rent/:id' element={<HouseToRent />} />
        <Route path='/*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
