import React, { useContext } from 'react'
import Listitem from './Listitem'
import { useSelector } from 'react-redux'




const Listgroup = () => {

 const {todos} = useSelector( (state)=> state.todos)



  return (
    <div>
      <ul className='list-none py-5  mx-12'  >
      
{
  todos.map((todo)=> <Listitem   todo={todo}/>)
}
      </ul>
    
    </div>
  )
}

export default Listgroup