import React from 'react';
import { combineReducers, createStore } from 'redux';
import arenaReducer from './arena-reducer'

let reducers = combineReducers({
    arena:arenaReducer})

let store = createStore(reducers);

export default store;

window.store = store;