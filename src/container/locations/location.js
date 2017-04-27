import React, {Component} from 'react';

import './location.css';

import {connect} from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import {addLocation,findProducts} from '../../action/action.js';

const styles = {
    width: '300px',
    height:'25px',
    borderRadius: '5px',
    border: '3px solid #80d4ff',
    margin: '10px auto'
}

class Locations extends Component {


constructor (props){
  super(props);
  this.state={
    name:'',
  }
}
    render() {
      const{findProducsAction} = this.props;

        return (
          <div>
          <div className="Location-nameWrapper">

            <input placeholder="Your Name" className="Location-name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
                <div className="Location">
                <AutoComplete
                   style={styles}
                    onPlaceSelected= { (place) => {
                      const startLatitude = place.geometry.location.lat();
                      const startLongitude = place.geometry.location.lng();
                      this.props.addLocationAction({startLatitude,startLongitude});

                    } }
                     types={[('address')]}
                     componentRestrictions={{country: "us"}}/>

                     <AutoComplete
                        style={styles}
                         onPlaceSelected= { (place) => {
                           console.log('place', place);
                           const endLatitude = place.geometry.location.lat();
                           const endLongitude = place.geometry.location.lng();
                           this.props.addLocationAction({endLatitude,endLongitude});


                         } }
                          types={[('address')]}
                          componentRestrictions={{country: "us"}}/>
                          <button className="Location-button" onClick={()=> findProducsAction(this.state.name)}>Search</button>
                     </div>
                     </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
  addLocationAction: (location)=> dispatch(addLocation(location)),
  findProducsAction:(name)=>dispatch(findProducts(name))
})
export default connect(null, mapDispatchToProps)(Locations);
