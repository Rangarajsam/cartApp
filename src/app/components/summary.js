import React, {Component} from 'react';
import AddedCart from './addedCart';
import { connect } from "react-redux";
import { removeFromCartAction,searchCartAction,addCartCountAction,
    substractCartCountAction } from '../actions/cartActions';
import Header from '../components/header';
import cartContext from '../contexts/cartContext';

class Summary extends Component  {
    constructor(props) {
        super(props);
         this.state = {
         }
     }

     render (){
         const {history,cartsAdded,removeFromCartAction,addCartCountAction,
            substractCartCountAction,actualPayable,discounted,finalPayable} = this.props;
        return (
         <cartContext.Provider value={{searchCartAction,cartsAdded,history,removeFromCartAction,addCartCountAction,
            substractCartCountAction}}>
            <Header></Header>

            <div className="added-carts-container">
                <div className="added-carts-inner-container">
                    {cartsAdded && cartsAdded.length > 0 && cartsAdded.map(cart => {
                        return <AddedCart cart={cart} key={cart.id}></AddedCart> 
                    })}
                </div>
                <div className="total-container">
                    <div className="total-header">Price Details</div>
                    <div className="total-body">
                         <div className="cart-item-title body">Price</div>
                         <div className="cart-item-title body">:</div>
                         <div className="cart-item-title body-r">{'₹'+actualPayable}</div>
                    </div>
                    <div className="total-body">
                         <div className="cart-item-title body">Discount</div>
                         <div className="cart-item-title body">:</div>
                         <div className="cart-item-title body-r">{'₹'+discounted}</div>
                    </div>
                    <div className="total-footer">
                    <div className="cart-item-title">Total Payable</div>
                     <div className="cart-item-title">{'₹'+finalPayable}</div>
     
                    </div>
                </div>
     
            </div>
            </cartContext.Provider>
         )
     }
   
}

const mapStateToProps = state => {
    return {
        cartsAdded:state.cartsReducer.cartsAdded,
        actualPayable:state.cartsReducer.actualPayable,
        discounted:state.cartsReducer.discounted,
        finalPayable:state.cartsReducer.finalPayable
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCartAction : (cart) => {
            dispatch(removeFromCartAction(cart));
        },
        searchCartAction: (text) => {
            dispatch(searchCartAction(text));
        },
        addCartCountAction:(cart) => {
            dispatch(addCartCountAction(cart));
        },
        substractCartCountAction:(cart) => {
            dispatch(substractCartCountAction(cart));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Summary);