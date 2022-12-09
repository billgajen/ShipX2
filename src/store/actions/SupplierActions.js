import {SET_SUPPLIERS_ACTION, SET_SELECTED_SUPPLIER_ID } from "./supplierTypes";

export const setSuppliersAction = (suppliers) => {
  return (dispatch) => {
    dispatch(setSuppliers(suppliers));
  };
};

export const setSuppliers = (suppliers) => {
  return {
    type: SET_SUPPLIERS_ACTION,
    suppliers: suppliers,
  };
};

export const setSelectedSupplierIdAction = (id) => {
  return (dispatch) => {
    dispatch(setSelectedSupplierId(id));
  };
};

export const setSelectedSupplierId = (id) => {
  return {
    type: SET_SELECTED_SUPPLIER_ID,
    id: id,
  };
};
