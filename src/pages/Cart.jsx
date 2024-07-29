import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card.jsx';
import './Cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  console.log(items)
  return (
    <div className="cart-container">
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
          items.map((item) =>
            <Card type="remove" key={item.id} id={item.id} title={item.title} >
              Remove
            </Card>
          )
      )}
    </div>
  );
};

export default Cart;
