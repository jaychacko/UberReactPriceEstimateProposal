const INIT_STATE =[];

import {FIND_PRODUCTS} from '../action/action.js';

export default (state = INIT_STATE,action)=>{

  switch (action.type) {

    case FIND_PRODUCTS:
    return action.payload;

    default: return state;

  }
}
