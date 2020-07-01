import { combineReducers } from 'redux';
import {tasksReducer, usersReducer} from './reducers';

const rootReducer = combineReducers({ tasksReducer, usersReducer });

export default rootReducer;
