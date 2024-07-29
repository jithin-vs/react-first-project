import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const count = useSelector((state) => state.cart.value);

  return (
    <header className="header">
      <div className="header-name">Logo</div>
      <div className="header-fields">
        <Link to="/">Home</Link>
        <div className="cart-icon">
          <Link to="/cart" className='cart-link'>Cart</Link>
          {count > 0 && <span className="cart-count">{count}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
