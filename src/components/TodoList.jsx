import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/todolistSlice';

import AddTodoForm from './AddTodoForm';

const TodoList = () => {
    const dispatch = useDispatch();
    const todolist = useSelector((state) => state.todolist);
    console.log(todolist)

    return (
        <>
            <AddTodoForm />
            <ul>
                <p>Alla todos</p>
                {todolist.map((todo, index) => 
                    <li key={index}>
                        <h2>{todo.title}</h2>
                        <p>{todo.desc}</p>
                        <button onClick={() => {dispatch(deleteTodo(index))}}>Done</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default TodoList;