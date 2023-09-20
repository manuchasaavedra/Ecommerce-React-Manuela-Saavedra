import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    
    setIsLoading(true);

    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    })
    .catch (() => {
      setItems([]);
      setIsLoading(false);
    });
  }, [categoryId]);

  return (  <div className="container-fluid">
  <ItemList items={items} isLoading={isLoading} />
  </div>
  );
};

export default ItemListContainer;