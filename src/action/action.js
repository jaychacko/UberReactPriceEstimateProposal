export const ADD_LOCATION ='ADD_LOCATION';
export const FIND_PRODUCTS='FIND_PRODUCTS';
import {browserHistory} from 'react-router';
export const addLocation =(location)=>({
//SNSqjHe7tsVbiqg8oHuN2bvOIttTw43ih3_azKs7
  type:ADD_LOCATION,
  payload:location
})

const headers={
  'Authorization':'Token SNSqjHe7tsVbiqg8oHuN2bvOIttTw43ih3_azKs7',
  'Content-Type':'application/json',
  'Accept_Language':'en_EN'
}

export const findProducts =(name)=>{

 return (dispatch,getState)=>{


const {startLatitude,startLongitude,endLatitude,endLongitude} = getState().location;

fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`,{

  method:'GET',
  headers,

}).then((data)=> data.json()).then(({prices})=>{
  dispatch({
    type:FIND_PRODUCTS,
    payload:prices
  })

  browserHistory.push(`/products/${name}`)
})
 }







  // return ({
  //   type:FIND_PRODUCTS,
  //   payload:name
  // })


}
