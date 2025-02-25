import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodos, deleteTodos, fetchTodo, updateTodo } from "./TodoService";


const TodoSlice = createSlice({


  
        name : 'todos',
        initialState : {
          todos : [],
          edit : {todos : {}, isEdit : false},
          isLoading : false,
          isSuccess : false,
          isError : false
        },
    
        
        reducers  : {
           
          remove: (state , action)=> {
            return{
              ...state,
              todos : state.todos.filter((todo)=> todo._id !== action.payload)
            }
          },
          edited: (state , action)=> {
            return{
              ...state,
              edit : {todos : action.payload , isEdit : true}
            }
          },
        
        },

        extraReducers : (builder) => {

       builder
       .addCase(getTodos.pending , (state, action)=> {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
       })
       .addCase(getTodos.fulfilled , (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.todos = action.payload;
       })
       .addCase(getTodos.rejected , (state, action)=> {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.todos = []
       })
       
      
       .addCase(AddTodo.pending , (state, action)=> {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
       })
       .addCase(AddTodo.fulfilled , (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.todos = [action.payload, ...state.todos ]
       })
       .addCase(AddTodo.rejected , (state, action)=> {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.todos = []
       })

       .addCase(DeleteTodo.pending , (state, action)=> {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
       })
       .addCase(DeleteTodo.fulfilled , (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
       })
       .addCase(DeleteTodo.rejected , (state, action)=> {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.todos = []
       })

       .addCase(Update.pending , (state, action)=> {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
       })
       .addCase(Update.fulfilled , (state, action)=> {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.todos = state.todos.map((todo)=> todo._id === action.payload._id ? action.payload : todo)
        state.edit = {todos : {}, isEdit : false}

       })
       .addCase(Update.rejected , (state, action)=> {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.todos = []
       })

     
        }

})


export default TodoSlice.reducer;

export const {remove, edited} = TodoSlice.actions


export const getTodos = createAsyncThunk('fetch/TODO', async()=> {
  try {
   return await fetchTodo()
  } catch (error) {
    console.log(error);
    
  }
    
})
export const AddTodo = createAsyncThunk('add/TODOS', async(formdata)=> {
  try {
    return await addTodos(formdata)
  } catch (error) {
    console.log(error);
    
  }
})
export const DeleteTodo = createAsyncThunk('delete/TODOS', async(id)=> {
  try {
    return await deleteTodos(id)
  } catch (error) {
    console.log(error);
    
  }
})
export const Update = createAsyncThunk('update/TODOS', async(updatedtodo)=> {
  try {
    return await updateTodo(updatedtodo)
  } catch (error) {
    console.log(error);
    
  }
})

