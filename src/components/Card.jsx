import React from 'react';
import '../styles/Card.css';
import { Link,useResolvedPath } from 'react-router-dom';

function Card(props) {
  const resolvd = useResolvedPath();
    return (
        <div className="card"  style={{width:"20rem", height:"30rem"}}  onClick={props.onClick}>
          <img src={props.image} style={{width:"20rem", height:"17rem"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name.length>60? props.name.substr(0,40)+"..." : props.name}</h5>
            <p className="card-text">{props.name.length>60? props.name.substr(0,40)+"..." : props.name}</p>
            <Link to={resolvd.pathname.includes('/products/category')?`/products/${props.id}`:`/products/category/${props.name}`} className="btn btn-primary " onClick={()=>props.onClick(props.id)}>Go somewhere</Link>
          </div>
        </div>
    );
}

export default Card;

