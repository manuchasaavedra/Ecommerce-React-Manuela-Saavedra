import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando Detalles...</h2>;
  }


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img
              src={item.img}
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body">
              <h1 className="card-title">{item.name}</h1>
              <p className="card-text">${item.price}</p>
              <h5 className="card-subtitle mb-2 text-muted">Descripcion: {item.description}</h5>
              <ItemCount initial={1} stock={item.stock} onAdd= {(quantity) => console.log ('Cantidad Agregada', quantity)}/>
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