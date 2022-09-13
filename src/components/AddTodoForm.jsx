import {useSelector, useDispatch} from 'react-redux';

import {addTodo} from '../redux/todolistSlice';

const AddTodoForm = () => {
    const dispatch = useDispatch();

    const getUserInputs = () => {
        let titleInput = document.querySelector('#inputTitle');
        let descInput = document.querySelector('#inputDesc');

        addTodo(titleInput, descInput);
    }
    
    return (
        <div>
            <label htmlFor="inputTitle">Title:</label>
            <input type="text" id="inputTitle"/>
            <label htmlFor="inputDesc">Description:</label>
            <input type="text" id="inputDesc"/>
            <button onClick={() => {dispatch(getUserInputs())}}>Save</button>
        </div>
    )
}

export default AddTodoForm;