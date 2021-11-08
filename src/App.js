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
import NavbarWithAnime from "./components/NavBar/NavbarWithAnime";
// import Stepper from "./components/Stepper/Stepper";
import Greed from "./components/GreedyHunter/greed";
import Elliptical from "./components/Elliptical/Elliptical";
import AminateBackground from "./components/AnimatedBackground/AminateBackground";
import GlassmorphismContact from "./components/Glassmorphism/GlassmorphismContact";
import Dropdown from "./components/Dropdown/Dropdown";
import ValidatedForm from "./components/ValidatedForm/ValidatedForm";
import Klasha from "./components/Klasha";
import DropDownPackage from "./components/Dropdown/DropDownPackage";
// import Chartbar from "./components/Charts/Chartbar";
import UseHookFormValidation from "./components/ValidatedForm/UseHookFormValidation";
import FormInput from "./components/newFormInput";
import NewFormPage from "./Pages/newFormPage";

const App = () => {
  return (
    <ProductState>
      {/* <CartContext> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/nav" component={NavbarWithAnime} />
        <Route exact path="/klasha" component={Klasha} />
        <Route exact path="/dropdownNav" component={Dropdown} />
        <Route exact path="/dropdown" component={DropDownPackage} />
        <Route exact path="/cart" component={Carts} />
        <Route exact path="/elliptical" component={Elliptical} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/anime-background" component={AminateBackground} />
        <Route exact path="/checkout" component={PayWithStripeBtn} />
        {/* <Route exact path="/chart" component={Chartbar} /> */}
        {/* <Route
          exact
          path="/stepper"
          component={Stepper}
          currentStepNumber={3}
        /> */}
        <Route exact path="/greed" component={Greed} />
        <Route exact path="/form" component={ValidatedForm} />
        <Route exact path="/form2" component={UseHookFormValidation} />
        <Route exact path="/newform" component={NewFormPage} />
        <Route exact path="/contact" component={GlassmorphismContact} />
      </Switch>
      <ToastContainer />
      {/* </CartContext> */}
    </ProductState>
  );
};

export default App;
