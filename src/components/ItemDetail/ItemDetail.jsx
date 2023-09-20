
import PropTypes from "prop-types";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";


const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
      addItem(item, quantity);
    }
  };

  if (isLoading) {
    return <h2 className="checkout-confirmation">Cargando Detalles...</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mx-auto text-center">
            {item?.img && (
              <img src={item.img} className="card-img-top" alt={item.title} />
            )}
            <div className="card-body">
              {item && (
                <>
                  <h1 className="card-title">{item.title}</h1>
                  <p className="card-text">${item.price}</p>
                  <h5 className="card-subtitle mb-2 text-muted">
                    {item.description}
                  </h5>
                  <ItemCount stock={item.stock} initial={0} onAdd={handleOnAdd} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;
