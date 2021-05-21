import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTodo = createAsyncThunk(
    'todos/fetchTodo',
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (title) => {
        try {
            const newTodo = {
                userId: 1,
                title: title,
                completed: false
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
    },
    extraReducers: {
        [fetchTodo.fulfilled]: (state, action) => {
            state.todos = action.payload
        },
        [addTodo.fulfilled]: (state, action) => {
            state.todos.push(action.payload)
        }
    }
})

const { actions, reducer } = todoSlice

export default reducer