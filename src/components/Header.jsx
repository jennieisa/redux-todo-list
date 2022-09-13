import {useState} from 'react';

const Header = () => {
    const [name, setName] = useState(false);

    const updateName = () => {
        
        let inputName = document.querySelector("#todoName").value;
        setName(inputName);
        console.log(inputName);
    }

    return (
        <header className="App-header">
            <label htmlFor="todoName">Name:</label>
            <input type="text" id="todoName"/>  
            <button onClick={() => {updateName()}}>Save</button>
            {name && 
                <h2>{name}'s Todo-List</h2>
            }
        </header>
    )
}

export default Header;