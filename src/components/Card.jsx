import React from "react";
import "./Card.css";

const Card = ({ id,title}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{id}</p>
      </div>
    </div>
  );
};

export default Card;
