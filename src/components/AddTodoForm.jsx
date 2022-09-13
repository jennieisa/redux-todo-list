import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

import {addTodo} from '../redux/todolistSlice';

const AddTodoForm = () => {
    const dispatch = useDispatch();

    const {input, setInput} = useState([]);

    const getUserInputs = () => {
        let titleInput = document.querySelector('#inputTitle').value;
        let descInput = document.querySelector('#inputDesc').value;

        setInput(titleInput);
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