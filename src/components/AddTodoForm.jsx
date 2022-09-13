import {useSelector, useDispatch} from 'react-redux';

import {addTodo} from '../redux/todolistSlice';

const AddTodoForm = () => {
    const dispatch = useDispatch();
    const { latestId } = useSelector((state) => state.todolist);
    console.log(latestId)

    const getUserInputs = () => {
        let titleInput = document.querySelector('#inputTitle').value;
        let descInput = document.querySelector('#inputDesc').value;

        dispatch(
            addTodo({
                title: titleInput,
                desc: descInput,
                id: latestId + 1
            })
        );
    };
    
    return (
        <div>
            <label htmlFor="inputTitle">Title:</label>
            <input type="text" id="inputTitle"/>
            <label htmlFor="inputDesc">Description:</label>
            <input type="text" id="inputDesc"/>
            <button onClick={() => {getUserInputs()}}>Save</button>
        </div>
    )
}

export default AddTodoForm;