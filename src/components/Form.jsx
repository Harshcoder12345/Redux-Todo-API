import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo, getTodos, Update } from '../features/todo/TodoSlice'




const Form = () => {
  const {isLoading, edit } = useSelector(state => state.todos)

  const {dark} = useSelector(state => state.theme)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")  


const dispatch = useDispatch()



useEffect(()=> {
  dispatch(getTodos())

}, [])

useEffect(()=> {
setTitle(edit?.todos?.title)
setDescription(edit?.todos?.description)
}, [edit])

  
  const HandleSubmit = (e) => {
    e.preventDefault()
       
 !edit.isEdit
  ?
    dispatch(AddTodo({description, title}))
  :
    dispatch(Update({title, description, _id: edit.todos._id}))


  
   setTitle("")
  setDescription("") 

  }

if(isLoading){
  return(
    <h1>Loading....</h1>
  )
}
  return (
    <div>

        <form onSubmit={HandleSubmit}  className=  {dark ?  ' my-3 border bg-white flex flex-col mx-[50px]' : ' my-3 border bg-gray-400  flex flex-col mx-[50px]'}  >
            <input required onChange={(e)=>setTitle(e.target.value)}  value={title}  className='my-3 font-xl bg-white p-3 mx-5 border' type="text" placeholder='Enter the text here' />
            <input required onChange={(e)=>setDescription(e.target.value)}  value={description}  className='my-3 bg-white mx-5 p-3 border'  type="number" placeholder='Enter the number here' />
            <button type='submit' className='my-3 py-2 border border-blue-700 mx-5 bg-blue-700 text-white font-semibold rounded hover:bg-blue-500'>Submit</button>
        </form>
    </div>
  )
}

export default Form