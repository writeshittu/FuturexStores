import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductItems/ProductContext";
import "./carts.css";

const Carts = () => {
  const productContext = useContext(ProductContext);

  const { deleteItem } = productContext;

  const [inCart, setinCart] = useState([]);

  useEffect(() => {
    setinCart(JSON.parse(window.localStorage.getItem("inCart")));
  }, []);

  if (inCart.length <= 0) {
    return <h4>Please go back to add items to cart</h4>;
  }

  return (
    <div className="container mt-lg-5">
      {" "}
      <Table hover borderless responsive>
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {inCart.map((t, index) => (
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
              <td>{t.price}</td>
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
      <div className="row mt-4 mb-5 ">
        {/* <Link className="text-link" to="/checkout"> */}
        <Link
          to="/"
          // onClick={this.handleSumbitCart}
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
          // onClick={this.handleSumbitCart}
          className="p-3 m-auto bg-info text-white "
          style={{ border: "1px solid" }}
        >
          Proceed to check out
        </span>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Carts;
