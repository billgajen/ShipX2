import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import ProductsReducer from "./reducers/ProductsReducer";
import SuppliersReducer from './reducers/SuppliersReducer';
import ClientsReducer from './reducers/ClientsReducer';
import OrdersReducer from './reducers/OrdersReducer';
import WarehousesReducer from './reducers/WarehousesReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import todoReducers from './reducers/Reducers';
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: PostsReducer,
  products: ProductsReducer,
  orders: OrdersReducer,
  suppliers: SuppliersReducer,
  clients: ClientsReducer,
  warehouses: WarehousesReducer,
  auth: AuthReducer,
  todoReducers,
  //form: reduxFormReducer,
});

//const store = createStore(rootReducers);

export const store = createStore(reducers,  composeEnhancers(middleware));
