import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Productcard/ProductCard";
import ProductContext from "../Context/ProductItems/ProductContext";

const Products = () => {
  const productContext = useContext(ProductContext);
  const { items, filtered, getItems, loading } = productContext;

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  if (items !== null && loading) {
    return <h4>Loading ...</h4>;
  }

  //   const [item, setItem] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios("https://fakestoreapi.com/products");

  //       setItem(result.data);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
