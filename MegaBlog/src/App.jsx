import { useState, useEffect } from 'react'
import './App.css'
import { Provider, useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, []);


  return !loading ? (
    <div className='min-h-screen flex flex-warp flex-col content-middle bg-gray-400'>
      <div className='w-full block'>
        <Header />
      </div>
      <div className='flex-grow'>
        <Outlet />
      </div>

      <div className='w-full block'>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
