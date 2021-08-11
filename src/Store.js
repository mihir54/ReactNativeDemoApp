import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import productReducer from './reducers/ProductReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger'

const persistConfigue = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['product_Reducer']
}

const rootReducer = combineReducers({
    product_Reducer: productReducer
})

const persist_Reducer = persistReducer(persistConfigue, rootReducer);

export default () => {
    let store = createStore(persist_Reducer, applyMiddleware(createLogger()))
    let persistor = persistStore(store)
    return { store, persistor }
}


// const configureStore = () => createStore(rootReducer);

// export default configureStore;