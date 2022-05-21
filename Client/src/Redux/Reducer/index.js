import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { CartReducer } from "./CardReducer";
import { productsReducer, selectedProdReducer } from "./ProductsReducer";

export const Reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProdReducer,
  CartReducer,
  AuthReducer,
});
