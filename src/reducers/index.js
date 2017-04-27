import {combineReducers} from 'redux';
import locationReducer from './lcoationReducer.js';

import productReducer from './productReducer.js';



const rootReducer = combineReducers({

  location:locationReducer,
  products: productReducer
})


export default rootReducer;
