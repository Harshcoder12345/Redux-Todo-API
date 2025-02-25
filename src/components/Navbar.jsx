import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changetheme } from '../features/theme/ThemeSlice'

const Navbar = () => {

  const {dark} = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const ThemeChange = () => {
  dispatch(changetheme())
  localStorage.setItem('theme', JSON.stringify(dark ? false : true))
    
  }

  return (
    <div className= { dark ? 'flex justify-between bg-gray-200 px-5 items-center ' : 'flex justify-between bg-gray-800 px-5 items-center '  }>
      <div className=  {dark ? ' py-5 text-center text-gray-800 font-semibold text-2xl' : ' py-5 text-center text-white font-semibold text-2xl' } >Todo with RedUx And API Integration
    
      </div>
     <div><button className= {dark ? ' bg-gray-800  p-2 text-white text-2xl rounded-md ' :'  p-2 bg-white text-black text-2xl rounded-md ' } onClick={ThemeChange}>{dark ? 'Dark-mode' : 'Light-mode'}</button></div> 
      
    </div>
  )
}

export default Navbar