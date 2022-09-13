import {createSlice} from '@reduxjs/toolkit';

const todolistSlice = createSlice({
    name: 'todolist',
    initialState: { 
        todos: [
            {
                title: "Städa",
                desc: "Sopa, damma",
                id: 1,
            },
            {
                title: "Handla",
                desc: "Mjölk, bröd, smör",
                id: 2,
            }, {
                title: "Skicka brev",
                desc: "Köpa frimärken och lägga på postlådan",
                id: 3,
            },
        ],
        latestId: 3,
    },
    reducers :{
        addTodo: (state, {payload}) => {
            state.todos.push(payload);
            state.latestId += 1;
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter((todo) => todo.id !== payload);
        }
    }
})

export default todolistSlice.reducer;
export const {addTodo, deleteTodo} = todolistSlice.actions;
