import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../tools";
import { createOrder } from "../../services";
import CheckoutForm from "../CheckOut/CheckoutForm";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const total = getCartTotal(cart);

  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = () => {
    const order = {
      buyer: {
        name,
        adress: adress,
        phone,
        email,
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  const isFormValid = (name && adress && phone)

  return (
    <div>
      {orderId &&  <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  ¡Gracias por tu compra, {name}!
                </div>
                <div className="card-body">
                  <p className="card-text">
                    El id de tu orden es: {orderId}
                  </p>
                  <a href="/" className="buy-button">
                    Volver al Shop
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>}

      {!orderId && (
        <>

<div className="container mt-5">
<div class="card text-center mx-auto w-50">
  <div class="card-header">
    Datos de Contacto
  </div>
  <div class="card-body">
        <div className="contact-form">
                  <CheckoutForm
                    name={name}
                    setName={setName}
                    adress={adress}
                    setAdress={setAdress}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                  />
        </div>
        <button disabled = {!isFormValid} onClick={handleCheckout} className="buy-button mt-4">
          Comprar
        </button>
  </div>
</div>
</div>

          {isLoading && <div className="checkout-confirmation">
        <p>Procesando compra...</p>
      </div>}
        </>
      )}
    </div>
  );
};

export default Checkout;