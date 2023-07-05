import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from './reducers';
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
    loginReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;