import React from "react";
import Button from './Button.jsx';
import "./Card.css";

const Card = ({ id,title}) => {
  return (
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{id}</p>
        <Button />
      </div>
  );
};

export default Card;
