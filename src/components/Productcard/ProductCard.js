import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import ProductContext from "../../Context/ProductItems/ProductContext";

import "./productcard.css";

const ProductCard = ({ item }) => {
  const productContext = useContext(ProductContext);
  const { addToCart } = productContext;

  const { image, title, price } = item;

  return (
    <div className="col-lg-2 col-sm m-2 ">
      <Card className="">
        <div className="embed-responsive embed-responsive-1by1 dim">
          <img
            className="card-img p-2 grow embed-responsive-item "
            alt="items"
            src={image}
            width="200px"
          />
        </div>

        <Card.Body>
          <Card.Title>&#8358;{price}</Card.Title>
          <Card.Text className="text-truncate">{title}</Card.Text>
        </Card.Body>

        <div className=" p-0 mb-0">
          <button className="col p-2 cart-btn" onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
