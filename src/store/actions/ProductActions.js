import { SET_PRODUCTS_ACTION, SET_SELECTED_PRODUCT_ID } from "./ProductTypes";

export const setProductsAction = (products) => {
  return (dispatch) => {
    dispatch(setProducts(products));
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS_ACTION,
    products: products,
  };
};
export const setSelectedProductIdAction = (id) => {
  return (dispatch) => {
    dispatch(setSelectedProductId(id));
  };
};

export const setSelectedProductId = (id) => {
  return {
    type: SET_SELECTED_PRODUCT_ID,
    id: id,
  };
};
