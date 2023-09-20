import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button  className="custom-button" onClick={handleDecrement} style={{ marginRight: "1rem" }}>-</button>
        <span>{count}</span>
        <button className="custom-button" onClick={handleIncrement} style={{ marginLeft: "1rem" }}>+</button>
      </div>
      <button className="custom-button" onClick={() => onAdd(count)} disabled={count === 0} style={{ marginTop: "1rem" }}>
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ItemCount;