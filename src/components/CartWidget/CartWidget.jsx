import React, { useContext } from 'react';
import cartImage from './assets/cart.svg';
import CartContext from '../../context/CartContext';
import { getCartQuantity } from '../../tools';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = getCartQuantity(cart);

  return (
    <Link to="/cart" className="CartWidget" style={{ display: quantity > 0 ? 'block' : 'none' }}>
      <div className="d-flex align-items-center ml-auto position-relative">
        <img src={cartImage} alt="cart" width="20" height="20" />
        {quantity > 0 ? (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-button" style={{ marginLeft: '0.8rem' }}>
            {quantity > 99 ? '99+' : quantity}
          </span>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
