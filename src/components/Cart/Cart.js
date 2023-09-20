import "./Cart.css"
import React, { useContext } from 'react';
import trashImage from '../../assets/trash.svg';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const getCartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">{item.title}</td>
                  <td className="align-middle">{item.quantity}</td>
                  <td className="align-middle">${item.price}</td>
                  <td className="align-middle">${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn d-flex align-items-center"
                    >
                      <img src={trashImage} alt="trash" width="20" height="30" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fw-bold">Total de la compra: ${getCartTotal(cart)}</p>
          <button onClick={clear} className="clear-button me-2">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="buy-button">
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
