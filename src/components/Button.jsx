import './Button.css';
import { useDispatch } from 'react-redux';
import { addItem,removeItem } from '../features/counter/counterSlice';

import React from 'react';
import './Button.css';

const Button = ({ btnType, children, id, title }) => {

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log(id, title);
    const item = {
      id: id,
      title:title,
    }
    dispatch(addItem(item));
  };
  const handleRemoveFromCart = () => {
    console.log(id, title);
    dispatch(removeItem(id));
  };

  if (btnType === "add") {
    return (
      <button className="add-button"  onClick={handleAddToCart}>
        {children}
      </button>
    );
  }

  if (btnType === "remove") {
    return (
      <button className="remove-button" onClick={handleRemoveFromCart} >
        {children}
      </button>
    );
  }
  return (
    <button className="primary-button" >
      {children}
    </button>
  );
};

export default Button;

