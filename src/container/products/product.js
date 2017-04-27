import React ,{Component} from 'react';
import './product.css';
import {Link} from 'react-router';
import {connect} from 'react-redux';
export  class Products extends Component{




  render(){

const {products} = this.props
    return(


      <div className="products">

        <h4 className="hey">Hey {this.props.params.userName}, these are our Best Prices</h4>

        <div className="products-list">

          {products.map((product)=>{

            return (
              <div className="products-item" key={product.product_id}>

                <h2>{product.display_name}</h2>
                <h3>{product.estimate}</h3>
              </div>
            )
          })}
        </div>

        <Link to="/" className="to">Home</Link>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
products:state.products

})
export default connect(mapStateToProps) (Products);
