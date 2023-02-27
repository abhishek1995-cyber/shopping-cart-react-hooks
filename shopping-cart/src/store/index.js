import { createStore } from "redux";
import data from "../data.json";

const products = data.products;

const initValues = {
  data: products,
  dataToDisplay: products,
  isOpen: false,
  cartProduct: [],
};

const reducer = (state = initValues, action) => {
  switch (action.type) {
    case "ASCENDING":
       return {
        ...state,
         dataToDisplay: [...state.data.sort((a, b) => a.price - b.price)],
      }
    case "DESCENDING":
        return {
        ...state,
            dataToDisplay: [...state.data.sort((a, b) => b.price - a.price)],
        }
    case "FILTER_SIZE":
        return {
        ...state,
            dataToDisplay: [...state.data.filter((ele) => ele.availableSizes.includes(action.payload))]
             }
    case "OPEN_CART":
        return {
        ...state,
            isOpen: action.payload
               }    
    case "CLOSE_CART":
        return {
        ...state,
            isOpen: action.payload
               }   
    case "ADDTO_CART":
        return {
        ...state,
            cartProduct : [...state.cartProduct, action.payload]
                }       
    case "DELETE_ITEM":
       state.cartProduct.splice(action.payload,1)
        return {
        ...state,
            cartProduct : [...state.cartProduct]
                }       
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
