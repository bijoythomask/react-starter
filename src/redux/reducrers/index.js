import { combineReducers } from 'redux';
import  burgerReducer  from './burger'

export default combineReducers({burger:burgerReducer})