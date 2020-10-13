import { combineReducers, createStore, applyMiddleware } from 'redux';
import arenaReducer from './arena-reducer'
import thunk from 'redux-thunk'


let reducers = combineReducers({
    arena:arenaReducer})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;