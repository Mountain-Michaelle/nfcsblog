import {createStore, applyMiddleware} from 'redux';
import {composeWidthDevTools, composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import combineReducers from '../Reducers'


const initialState = {};

const middleware = [thunk]

const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
 );

 export default store;
 