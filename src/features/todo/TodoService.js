import axios from "axios"

export const fetchTodo = async() => {
    const response = await axios.get(`/api/todo`)
    // console.log(data);
    return response.data
    

} 

export const  addTodos = async(formdata)=> {
    const response = await axios.post("/api/todo/", formdata)
    // console.log(response.data);
    return response.data
    // console.log(formdata);
     
}
export const  deleteTodos = async(id)=> {
    const response = await axios.delete("/api/todo/"+  id)
    // console.log(response.data);
    return response.data
    // console.log(id);
     
}
export const  updateTodo = async(updatedtodo)=> {
    const response = await axios.put("/api/todo/"+ updatedtodo._id, updatedtodo )
    console.log(response.data);
    return response.data
   
}