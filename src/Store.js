import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/ProductReducer'; 

const rootReducer = combineReducers({
    productReducer: productReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;