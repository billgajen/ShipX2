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
      return {
        ...state,
        ...state.orderState,
        selectedorderId: action.id,
      };

    default:
      return state;
  }
}
