import generalConstants from '../constants/generalConstants';
import {getItemsFromDb} from '../services/cartService';

const updateLoaderState = (type,state) => ({
    type:generalConstants.getItemsLoaderState,
    payload:{state}
})

const getItems = (carts) => ({
    type:generalConstants.getCarts,
    payload:{
        carts
    }
});

export const getItemsAction = (callback) => dispatch => {
    dispatch(updateLoaderState(generalConstants.getItemsLoaderState,{
        fetching:true,
        fetched:false,
        error:false
    }));
    getItemsFromDb(response => {
        if(response) {
            dispatch(updateLoaderState(generalConstants.getItemsLoaderState,{
                fetching:false,
                fetched:true,
                error:false
            }));
            dispatch(getItems(response));
        }
        else {
            dispatch(updateLoaderState(generalConstants.getItemsLoaderState,{
                fetching:false,
                fetched:true,
                error:response.stdErr
            }));
        }
        callback && callback(response);
    });
}


export const sortByAction = (sortType) => ({
    type:generalConstants.sort,
    payload:{
        sortType
    }
});

export const searchCartAction = (searchText) => ({
    type:generalConstants.searchCart,
    payload:{
        searchText
    }
});

export const filterCartAction = (range,isFiltered) => ({
    type:generalConstants.filterCart,
    payload:{
        range,
        isFiltered
    }
});

export const addtoCartAction = (cart) => ({
    type:generalConstants.addToCart,
    payload:{
        cart
    }
});

export const removeFromCartAction = (cart) => ({
    type:generalConstants.removeFromCart,
    payload:{
        cart,
    }
});

export const addCartCountAction = (cart) => ({
    type:generalConstants.addCountCart,
    payload:{
        cart,
    }
});

export const substractCartCountAction = (cart) => ({
    type:generalConstants.substractCountCart,
    payload:{
        cart,
    }
});