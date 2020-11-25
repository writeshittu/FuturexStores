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
import { addItemToCart, decreaseItem } from "../../utils/cart.utils";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_TO_CARTS:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
        // cart:localStorage.setItem("inCart", JSON.stringify([action.payload, ...state.cart])),
        // cart: [action.payload, ...state.cart],
        // inCart: localStorage.setItem("inCart", JSON.stringify(state.cart)),
        loading: false,
      };
    case DELETE_ITEM:
      // localStorage.setItem("inCart", JSON.stringify(state.cart));
      console.log("hit me");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        // inCart: localStorage.setItem("inCart", JSON.stringify(state.cart)),
        loading: false,
      };
    case DECREASE_CART_ITEM:
      return {
        ...state,
        cart: decreaseItem(state.cart, action.payload),
        loading: false,
      };
    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       (contact) => contact._id !== action.payload
    //     ),
    //     loading: false,
    //   };
    // case CLEAR_CONTACTS:
    //   return {
    //     ...state,
    //     current: null,
    //     filtered: null,
    //     error: null,
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null,
    //   };
    // case FILTER_CONTACT:
    //   return {
    //     ...state,
    //     filtered: state.contacts.filter((contact) => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return contact.name.match(regex) || contact.email.match(regex);
    //     }),
    //   };
    // case CLEAR_FILTER:
    //   return {
    //     ...state,
    //     filtered: null,
    //   };
    // case CONTACT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};
