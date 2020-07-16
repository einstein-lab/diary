import { createStore, combineReducers } from 'redux';
import { calculate } from './reducer';

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({ calculate });

export const store = createStore(rootReducers);
