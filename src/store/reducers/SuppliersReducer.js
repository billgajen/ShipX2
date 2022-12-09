import {
  SET_SUPPLIERS_ACTION,
  SET_SELECTED_SUPPLIER_ID
} from "../actions/supplierTypes";
import { suppliersData } from "../../jsx/mocks/suppliersMock";

const initialState = {
  suppliersState: suppliersData,
  selectedSupplierId: 0,
};

export default function SuppliersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUPPLIERS_ACTION:
      const updatedState = {
        ...state,
        ...state.suppliersState,
        suppliersState: action.suppliers,
      };
      return updatedState;

    case SET_SELECTED_SUPPLIER_ID:
      return {
        ...state,
        ...state.suppliersState,
        selectedSupplierId: action.id,
      };

    default:
      return state;
  }
}
