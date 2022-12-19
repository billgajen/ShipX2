import { SET_WarehouseS_ACTION, SET_SELECTED_Warehouse_ID } from "./warehouseTypes";

export const setWarehousesAction = (products) => {
  return (dispatch) => {
    dispatch(setWarehouses(products));
  };
};

export const setWarehouses = (products) => {
  return {
    type: SET_WarehouseS_ACTION,
    warehouses: products,
  };
};
export const setSelectedWarehouseIdAction = (id) => {
  return (dispatch) => {
    dispatch(setSelectedWarehouseId(id));
  };
};

export const setSelectedWarehouseId = (id) => {
  return {
    type: SET_SELECTED_Warehouse_ID,
    id: id,
  };
};
