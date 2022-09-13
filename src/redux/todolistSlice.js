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
        addTodo: (state, {payload}) => {
            console.log(payload.inputTitle + payload.inputDesc);
            
            /*const newTodo = {
                title: payload.inputTitle,
                desc: payload.inputDesc,
            }

            state.todolist.push(newTodo);
            */
        },
        deleteTodo: (state, {payload}) => {
            state.splice(payload, 1);
            console.log(payload)
        }
    }
})

export default todolistSlice.reducer;
export const {addTodo, deleteTodo} = todolistSlice.actions;
