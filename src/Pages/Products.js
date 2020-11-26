import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Productcard/ProductCard";
import ProductContext from "../Context/ProductItems/ProductContext";
import { Skeleton } from "antd";
import "antd/dist/antd.css";

const Products = () => {
  const productContext = useContext(ProductContext);
  const { items, getItems, loading } = productContext;

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  if (items !== null && loading) {
    return (
      <div className="container">
        <Skeleton active />
        <br />
        <Skeleton active />
      </div>
    );
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
