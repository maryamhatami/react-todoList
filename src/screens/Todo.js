import React from "react";
import '../App.css';
import List from "../compoenents/List";

const TodoForm = ()  => {
    const [text, setText] = React.useState('');
    const [list, setList] = React.useState([]);
    const [listLength, setListLength] = React.useState(0);
    const [index, setIndex] = React.useState(null);


    React.useEffect(() => {
        console.log('hi');
        let TodoList = localStorage.getItem('list');
        TodoList = JSON.parse(TodoList);
        if (TodoList) setList(TodoList);
        } , []
    )

    React.useEffect(() => {
        console.log('didUpdate');
    }, [listLength])


    const InputChange = (e) => {
        setText(e.target.value);
    }

    const addItem = () => {
        let toDoList = list;

        if(text) {
            list.push(text);
            localStorage.setItem('list', JSON.stringify(toDoList));
            setList(toDoList);
            setListLength(list.length);
        } else {
            alert("There is no item to be added!!!");
        }
        setText('');
    }

    const removeItem = (index) => {
        let toDoList = list;
        toDoList.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(toDoList));
        setList(toDoList);
        setListLength(list.length);
    }

    const editItem = (index) => {
        setText(list[index]);
        setIndex(index);
    }

  
    const saveItem = () => {
        let toDoList = list;

        if(text) {
            list[index] = text;
            localStorage.setItem('list', JSON.stringify(toDoList));
            setList(toDoList);
            setText('');
            setIndex(null);
        } else {
            alert("There is no item to be added!!!");
        }
    }

    return (
        <div className="container">
            <h1>TODo List</h1>
            <input className="input" placeholder="add your task" onChange={InputChange} value={text}/>
            <div>
                {(index === null) && <button className="add-btn" onClick={addItem}>ADD</button>}
                {(index !== null) && <button className="add-btn" onClick={saveItem}>SAVE</button>}
            </div>
            <List items={list} removeItem={removeItem} editItem={editItem}/>
        </div>
    )
}

export default TodoForm;
