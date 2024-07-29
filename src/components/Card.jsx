import React from "react";
import Button from './Button.jsx';
import "./Card.css";

const Card = ({type,children,id,title}) => {
  return (
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className=" card-bottom">
        <p className="card-description">{`ALBUM ID:${id}`}</p>
        <Button btnType={type} id={id} title={title}>{children}</Button>
        </div>  
      </div>
  );
};

export default Card;
