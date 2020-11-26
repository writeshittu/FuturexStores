import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductItems/ProductContext";
import { getAmountToPay } from "../../utils/cart.utils";
import PayWithStripeBtn from "../../components/StripeGateway/PayWithStripeBtn";
import "./carts.css";

const Carts = () => {
  const productContext = useContext(ProductContext);

  const {
    deleteItem,
    decreaseCart,
    amountToPay,
    addToCart,
    TotalAmmountToPay,
    cart,
  } = productContext;

  const [inCart, setinCart] = useState([]);

  useEffect(() => {
    setinCart(JSON.parse(window.localStorage.getItem("inCart")));
    getAmountToPay(cart);
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <div className="no-item text-center">
        <Link
          to="/"
          className="p-3 no-itembtn bg-info text-white  "
          style={{
            border: "1px solid",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          &#8656; Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-lg-5">
      {" "}
      <Table hover borderless responsive>
        <thead>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((t, index) => (
            <tr key={index}>
              <td>
                <img
                  src={t.image}
                  className="img-fluid"
                  alt="item"
                  width="100px"
                />
              </td>
              <td>{t.title}</td>
              <td>
                {" "}
                <span onClick={() => decreaseCart(t)} className="pointer">
                  {" "}
                  &#10094;{" "}
                </span>
                {t.quantity}{" "}
                <span onClick={() => addToCart(t)} className="pointer">
                  {" "}
                  &#10095;
                </span>
              </td>
              <td>&#8358; {t.price * t.quantity}</td>
              <td onClick={() => deleteItem(t.id)}>
                <i
                  className="fas fa-trash fa-lg p-2"
                  style={{ color: "black" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 className="text-right p-2">
        {" "}
        TOTAL : &#8358;
        {localStorage.getItem("total") ? localStorage.getItem("total") : 0}{" "}
      </h4>
      <div className="row mt-4 mb-5 ">
        <Link
          to="/"
          className="p-3 m-auto bg-info text-white  "
          style={{
            border: "1px solid",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          Continue Shopping
        </Link>
        <span
          className="p-3 m-auto bg-info text-white "
          style={{ border: "1px solid" }}
        >
          <PayWithStripeBtn price={localStorage.total} />
        </span>
      </div>
    </div>
  );
};

export default Carts;
