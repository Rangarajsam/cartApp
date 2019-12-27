import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import cartsReducer from '../reducers/cartsReducer';
import thunk from 'redux-thunk';
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
           cartsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}