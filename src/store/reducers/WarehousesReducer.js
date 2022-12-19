import {
  SET_WarehouseS_ACTION,
  SET_SELECTED_Warehouse_ID,
} from "../actions/warehouseTypes";
import { warehousesData } from "../../jsx/mocks/warehouseMock";

const initialState = {
  warehousesState: warehousesData,
  selectedWarehouseId: 0,
};

export default function WarehousesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WarehouseS_ACTION:
      const updatedState = {
        ...state,
        ...state.warehousesState,
        warehousesState: action.warehouses,
      };
      return updatedState;

    case SET_SELECTED_Warehouse_ID:
      return {
        ...state,
        ...state.warehousesState,
        selectedWarehouseId: action.id,
      };

    default:
      return state;
  }
}
