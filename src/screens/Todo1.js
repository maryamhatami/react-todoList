import React, { useState } from "react";
import List from "../compoenents/List";
import '../App.css';



export default () => {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [visibility, setVisibility] = useState(true);

    const InputChange = (e) => {
        setText(e.target.value);
    }

    const addItem = () => {
        let list = list;

        if(text) {
            list.push(text);
            localStorage.setItem('list', JSON.stringify(list));
            setList(list);
            setText('');
        } else {
            alert("There is no item to be added!!!");
        }
    }

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }

    const removeItem = (index) => {
        let list = list;
        list.splice(index, 1);
        setList(list);
        // localStorage.setItem('list', JSON.stringify(list));
    }

  
    React.useEffect(() => {
        let list = localStorage.getItem('list');
        list = JSON.parse(list);
        if (list) setList(list);} , [])


    const save = () => {
        localStorage.setItem('list', JSON.stringify(list));
    }


    return (
        <div className="container">
            <h1 className="red">Mary TO Do List</h1>
            <input className="input" placeholder="type here" onChange={InputChange} value={text}/>
            {/* <p>{this.state.text}</p> */}
            <div>
                <button onClick={addItem}>add</button>
                <button onClick={removeItem}>remove</button>
                <button onClick={toggleVisibility}>toggleVisibility</button>
                <button onClick={save}>save</button>

            </div>
            {
            this.state.visibility && 
            <List items={list} removeItem={removeItem}/>
            }
        </div>
    )
}