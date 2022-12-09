import {
  SET_CLIENTS_ACTION,
  SET_SELECTED_CLIENT_ID,
} from "./clientTypes";

export const setClientsAction = (clients) => {
  return (dispatch) => {
    dispatch(setClients(clients));
  };
};

export const setClients = (clients) => {
  return {
    type: SET_CLIENTS_ACTION,
    suppliers: clients,
  };
};

export const setSelectedClientIdAction = (id) => {
  return (dispatch) => {
    dispatch(setSelectedClientId(id));
  };
};

export const setSelectedClientId = (id) => {
  return {
    type: SET_SELECTED_CLIENT_ID,
    id: id,
  };
};
