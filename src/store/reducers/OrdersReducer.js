import {
  SET_ORDERS_ACTION,
  SET_SELECTED_ORDER_ID,
} from "../actions/orderTypes";
import { ordersData } from "../../jsx/mocks/ordersMock";

const initialState = {
  ordersState: ordersData,
  selectedOrderId: 0,
};

export default function OrdersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS_ACTION:
      const updatedState = {
        ...state,
        ...state.ordersState,
        ordersState: action.orders,
      };
      return updatedState;

    case SET_SELECTED_ORDER_ID:
      console.log("Action", action);
      return {
        ...state,
        ...state.ordersState,
        selectedOrderId: action.id,
      };

    default:
      return state;
  }
}
