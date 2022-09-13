import {createSlice} from '@reduxjs/toolkit';

const todolistSlice = createSlice({
    name: 'todolist',
    initialState: [
        {
            title: "Städa",
            desc: "Sopa, damma"
        },
        {
            title: "Handla",
            desc: "Mjölk, bröd, smör"
        }, {
            title: "Skicka brev",
            desc: "Köpa frimärken och lägga på postlådan"
        }
    ],
    reducers :{
        addTodo: (state) => {

        },
        removeTodo: (state) => {

        }
    }
})

export default todolistSlice.reducer;
export const {addTodo, removeTodo} = todolistSlice.actions;
