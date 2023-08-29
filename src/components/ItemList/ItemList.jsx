import propTypes from "prop-types";
import { Link } from "react-router-dom";
import './ItemList.css';


const ItemList = ({ items, isLoading }) => {


  return (
    <div className="container">
      <div className="row ">
      {isLoading ? (
          <div
            className="col-12 d-flex align-items-center justify-content-center"
            style={{
              minHeight: '100vh', // Altura mínima de la vista
            }}
          >
            <h2>Cocinando delicias...</h2>
          </div>
        ) : (
        items.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={item.img} className="card-img-top custom-image" alt={item.name} />
              <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text text-muted">{item.category}</p>
                <Link to={`/item/${item.id}`} className="custom-button">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))
        )}
      </div>
    </div>
  );
};


ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;