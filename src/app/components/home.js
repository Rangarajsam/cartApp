import React, {Component, useRef} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import cartContext from '../contexts/cartContext';
import { getItemsAction,sortByAction,searchCartAction,filterCartAction } from '../actions/cartActions';
import Loading from '../images/loader-icon.svg';
import CartItem from './cartItem';
import Sort from './sort';
import generalConstants from '../constants/generalConstants';
import Header from '../components/header';
import Filter from './filter';

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
         const {carts,getItemsLoaderState,sortByAction,sortType,searchCartAction,filterCartAction} = this.props;
         console.log('Carts',carts);
        return (
            <cartContext.Provider value={{carts,sortByAction,sortType,searchCartAction,filterCartAction}}>
                
            <Header></Header>
            <section className="cart-main-area">
               {getItemsLoaderState.fetching && !getItemsLoaderState.fetched && <div className="loader">
                    <img src={Loading}/>
                </div>} 
                <div className="filter-area">
                    <h1 className="gen-heading">Filters</h1>
                    <Filter></Filter>
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
    let actualCarts = [...state.cartsReducer.carts];
    if(state.cartsReducer.isFiltered) {
        console.log('coming');
        actualCarts = actualCarts.filter((cart) => {
            console.log('entering');
            if(cart.price >= state.cartsReducer.range.min && cart.price <= state.cartsReducer.range.max) {
                return cart;
            }
        })
    }
    if(state.cartsReducer.searchText.length > 0) {
        actualCarts = actualCarts.filter((cart) => {
            if( cart.name.toLowerCase().indexOf(state.cartsReducer.searchText.toLowerCase()) !== -1) {
                return cart;
            }
         });
    }
    return {
        carts:actualCarts,
        getItemsLoaderState:state.cartsReducer.getItemsLoaderState,
        sortType:state.cartsReducer.sortType,
        isFiltered:state.cartsReducer.isFiltered,
        range:state.cartsReducer.range
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
        },
        filterCartAction: (range,isFiltered) => {
            dispatch(filterCartAction(range,isFiltered));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);