import {
  SET_PRODUCTS_ACTION,
  SET_SELECTED_PRODUCT_ID,
} from "../actions/ProductTypes";
import { productsData } from "../../jsx/mocks/productsMocks"

const initialState = {
  productsState: productsData,
  selectedProductId: 0,
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_ACTION:
      const updatedState = {
        ...state,
        ...state.productState,
        productsState: action.products,
      };
      return updatedState;

    case SET_SELECTED_PRODUCT_ID:
      return {
        ...state,
        ...state.productState,
        selectedProductId: action.id,
      };

    default:
      return state;
  }
}
