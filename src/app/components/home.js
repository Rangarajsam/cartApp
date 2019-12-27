import React, {Component, useRef} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { getItemsAction } from '../actions/cartActions';
import Loading from '../images/loader-icon.svg';
import CartItem from './cartItem';
 class Home extends Component {
     constructor(props) {
        super(props);
         this.state = {
             carts:[]
         }
     }
     componentDidMount(){
        const {getItemsAction} = this.props;
        getItemsAction((response) => {
        })
     }
     render(){
         const {carts,getItemsLoaderState} = this.props;
         console.log('Carts',carts);

        return (
            <section className="cart-main-area">
               {getItemsLoaderState.fetching && !getItemsLoaderState.fetched && <div className="loader">
                    <img src={Loading}/>
                </div>} 
                <div className="filter-area">
                    <h1 className="gen-heading">Filters</h1>
                </div>
                <div className="cart-area">
                    <div className="sort-area">
                    <h1 className="gen-heading">Sort By</h1>
                        <div className="sort-title">Price -- High Low</div>
                        <div className="sort-title">Price -- Low High</div>
                        <div className="sort-title">Discount</div>
                    </div>
                        { carts && carts.length > 0 && carts.map(cart => (
                            <CartItem cart={cart} key={cart.id}></CartItem> 
                        ))}

                </div>
            </section>
        );
     }
   
}

const mapStateToProps = state => {
    return {
        carts:state.cartsReducer.carts,
        getItemsLoaderState:state.cartsReducer.getItemsLoaderState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getItemsAction : (callback) => {
            dispatch(getItemsAction(callback));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);