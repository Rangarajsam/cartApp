import React, {Component, useRef} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import cartContext from '../contexts/cartContext';
import { getItemsAction,sortByAction,searchCartAction } from '../actions/cartActions';
import Loading from '../images/loader-icon.svg';
import CartItem from './cartItem';
import Sort from './sort';
import generalConstants from '../constants/generalConstants';
import Header from '../components/header';


 class Home extends Component {
     constructor(props) {
        super(props);
         this.state = {
             carts:[]
         }
     }
     componentDidMount(){
        const {getItemsAction,sortByAction} = this.props;
        getItemsAction((response) => {
            sortByAction(generalConstants.sortHightoLow);
        })
     }
     render(){
         const {carts,getItemsLoaderState,sortByAction,sortType,searchCartAction} = this.props;
         console.log('Carts',carts);
        return (
            <cartContext.Provider value={{sortByAction,sortType,searchCartAction}}>
                
            <Header></Header>
            <section className="cart-main-area">
               {getItemsLoaderState.fetching && !getItemsLoaderState.fetched && <div className="loader">
                    <img src={Loading}/>
                </div>} 
                <div className="filter-area">
                    <h1 className="gen-heading">Filters</h1>
                </div>
                <div className="cart-area">
                    <Sort></Sort>
                        { carts && carts.length > 0 && carts.map(cart => (
                            <CartItem cart={cart} key={cart.id}></CartItem> 
                        ))}

                </div>
            </section>
            </cartContext.Provider>
        );
     }
   
}

const mapStateToProps = state => {
    return {
        carts:state.cartsReducer.carts,
        getItemsLoaderState:state.cartsReducer.getItemsLoaderState,
        sortType:state.cartsReducer.sortType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getItemsAction : (callback) => {
            dispatch(getItemsAction(callback));
        },
        sortByAction: (type) => {
            dispatch(sortByAction(type));
        },
        searchCartAction: (text) => {
            dispatch(searchCartAction(text));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);