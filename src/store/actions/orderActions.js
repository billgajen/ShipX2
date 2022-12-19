import {
  SET_ORDERS_ACTION,
  SET_SELECTED_ORDER_ID,
} from "./orderTypes";

export const setOrdersAction = (orders) => {
  return (dispatch) => {
    dispatch(setOrders(orders));
  };
};

export const setOrders = (orders) => {
  return {
    type: SET_ORDERS_ACTION,
    orders: orders,
  };
};

export const setSelectedOrderIdAction = (id) => {
  return (dispatch) => {
    dispatch(setSelectedOrderId(id));
  };
};

export const setSelectedOrderId = (id) => {
  return {
    type: SET_SELECTED_ORDER_ID,
    id: id,
  };
}
