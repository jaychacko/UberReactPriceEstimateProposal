import React from 'react';

import {Route,IndexRoute} from 'react-router';

import App from './component/app/app.js';
import Locations from './container/locations/location.js';
import Products from './container/products/product.js'
export default(

  <Route path={'/'} component ={App}>
    <IndexRoute component ={Locations}/>
    <Route path= {'products/:userName'}component ={Products}/>


  </Route>

)
