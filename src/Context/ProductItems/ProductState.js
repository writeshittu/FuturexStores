import React, { useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import {
  GET_ITEMS,
  ADD_TO_CARTS,
  DELETE_ITEM,
  CLEAR_CART,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  SET_ALERT,
  REMOVE_ALERT,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ITEM_ERROR,
  CLEAR_ERRORS,
} from "../Types";

const ProductState = (props) => {
  const initialState = {
    inCart: localStorage.getItem("inCart"),
    cart: [],
    filtered: null,
    loading: true,
    items: [],
    error: null,
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  //GET CONTACTS
  const getItems = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      dispatch({ type: GET_ITEMS, payload: res.data });
    } catch (err) {
      console.log(err);
      // dispatch({ type: ITEM_ERROR, payload: err.response.msg });
    }
  };

  //Add contact
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CARTS, payload: item });

    // contact.id = uuidv4();
  };

  //Delete contact
  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  //update contact
  // const updateContact = async (contact) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.put(
  //       `/api/contact/${contact._id}`,
  //       contact,
  //       config
  //     );
  //     dispatch({ type: UPDATE_CONTACT, payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: ITEM_ERROR, payload: err.response.msg });
  //   }
  // };

  //Clear Contact
  // const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

  //set current contact
  // const setCurrent = (contact) => {
  //   console.log(contact);
  //   dispatch({ type: SET_CURRENT, payload: contact });
  // };

  //clear current contact
  // const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  //Filter contact
  // const filterContact = (text) => {
  //   dispatch({ type: FILTER_CONTACT, payload: text });
  // };

  //Clear filter
  // const clearFilter = () => {
  //   dispatch({ type: CLEAR_FILTER });
  // };

  return (
    <ProductContext.Provider
      value={{
        inCart: state.inCart,
        cart: state.cart,
        loading: state.loading,
        items: state.items,
        filtered: state.filtered,
        error: state.error,
        getItems,
        addToCart,
        deleteItem,
        // clearContacts,
        // clearCurrent,
        // setCurrent,
        // updateContact,
        // filterContact,
        // clearFilter,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
