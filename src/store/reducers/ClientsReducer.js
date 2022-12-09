import {
  SET_CLIENTS_ACTION,
  SET_SELECTED_CLIENT_ID,
} from "../actions/clientTypes";
import { clientsData } from "../../jsx/mocks/clientsMock";

const initialState = {
  clientsState: clientsData,
  selectedClientId: 0,
};

export default function ClientsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLIENTS_ACTION:
      const updatedState = {
        ...state,
        ...state.clientsState,
        clientsState: action.clients,
      };
      return updatedState;

    case SET_SELECTED_CLIENT_ID:
      return {
        ...state,
        ...state.clientsState,
        selectedClientId: action.id,
      };

    default:
      return state;
  }
}
