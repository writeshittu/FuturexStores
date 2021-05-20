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
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import NavbarWithAnime from "./components/NavBar/NavbarWithAnime";
// import Stepper from "./components/Stepper/Stepper";
// import Greed from "./components/GreedyHunter/greed";
// import Elliptical from "./components/Elliptical/Elliptical";
// import AminateBackground from "./components/AnimatedBackground/AminateBackground";
// import GlassmorphismContact from "./components/Glassmorphism/GlassmorphismContact";

const App = () => {
  return (
    <ProductState>
      {/* <CartContext> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />
        {/* <Route exact path="/nav" component={NavbarWithAnime} /> */}
        <Route exact path="/cart" component={Carts} />
        {/* <Route exact path="/elliptical" component={Elliptical} /> */}
        {/* <Route exact path="/anime-background" component={AminateBackground} /> */}
        <Route exact path="/checkout" component={PayWithStripeBtn} />
        {/* <Route exact path="/stepper" component={Stepper} /> */}
        {/* <Route exact path="/greed" component={Greed} /> */}
        {/* <Route exact path="/contact" component={GlassmorphismContact} /> */}
      </Switch>
      <ToastContainer />
      {/* </CartContext> */}
    </ProductState>
  );
};

export default App;
