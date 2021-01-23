import React from "react";
import deleteIcon from '../delete.svg';
import editIcon from '../edit.svg';



const TodoList = (props) => {
    return (
        props.items.map(
            (item, index) => (
                <div className="row" key={index}>
                    {index+1}.  {item}
                    <div>
                        <img className="del-btn" src={editIcon} alt="editIcon" onClick={()=>props.editItem(index)}/>
                        <img className="del-btn" src={deleteIcon} alt="deleteIcon" onClick={()=>props.removeItem(index)}/>
                    </div>
                </div>)
        )
    )

}

export default TodoList;
