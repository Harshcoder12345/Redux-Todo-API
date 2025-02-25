import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo, edited, remove } from '../features/todo/TodoSlice'



const Listitem = ({todo}) => {

  const {dark} = useSelector(state => state.theme)
  
const dispatch = useDispatch()
const {isSuccess} = useSelector(state => state.todos)

const Delete = (id) => {
  console.log(id)

  dispatch(DeleteTodo(id))

  if(isSuccess){
    dispatch(remove(id))
  }
 
  
}

const Edit = (todo) => {
  dispatch(edited(todo))
  console.log(todo);
  
}



  return (
    <div>
      <li className= {dark ? 'px-4 overflow-hidden border bg-white border-blue-500 my-3 py-2' : 'px-4 overflow-hidden border bg-gray-200 border-blue-500 my-3 py-2' } >
      <p>Title : {todo.title} </p>
      <p>Description : {todo.description}</p>
      {/* <p>Id: {todo.id}</p> */}
      <span className='float-end'>
        <button className=  'bg-blue-500 p-2 rounded-md text-white mx-2 hover:bg-blue-800' onClick={()=> Delete(todo._id)}>Delete</button>
        <button className='bg-blue-500 p-2 rounded-md text-white' onClick={()=> Edit(todo)} >Edit</button>
      </span>
        </li>
    </div>
  )
}

export default Listitem