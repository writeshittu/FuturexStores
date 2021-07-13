import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavigationBar";
import Products from "./Pages/Products";
import Carts from "./Pages/Cart/Carts";
import ProductState from "./Context/ProductItems/ProductState";
import PayWithStripeBtn from "./components/StripeGateway/PayWithStripeBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CartContext from "./Context/Cart/CartContext";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <ProductState>
      {/* <CartContext> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />

        <Route exact path="/cart" component={Carts} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/checkout" component={PayWithStripeBtn} />
      </Switch>
      <ToastContainer />
      {/* </CartContext> */}
    </ProductState>
  );
};

export default App;
