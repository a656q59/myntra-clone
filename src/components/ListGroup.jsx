import React from 'react';

function ListGroup(props) {
    console.log()
    return (
        <ul className="list-group">
            <li className={props.itemSelected===props.name?"list-group-item active":"list-group-item" }onClick={()=>props.onClick(props.name)}>{props.name}</li>
        </ul>
    );
}

export default ListGroup;