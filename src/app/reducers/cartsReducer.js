import generalConstants from '../constants/generalConstants';

const initialState = {
    carts:[],
    getItemsLoaderState:{
        fetching:false,
        fetched:false,
        error:false
    },
    sortType:''
};

export default (state=initialState,action) => {
    switch (action.type) {  
        case generalConstants.getItemsLoaderState :
            return {
                ...state,
                getItemsLoaderState:action.payload.state
            }
        case generalConstants.getCarts :
            return {
                ...state,
                carts : action.payload.carts
            }

        case generalConstants.sort :
            let sorted;
            if(action.payload.sortType === generalConstants.sortHightoLow) {
                sorted = [...state.carts].sort((a,b) => b.price - a.price);
            }
            else if (action.payload.sortType === generalConstants.sortLowtoHigh) {
                sorted = [...state.carts].sort((a,b) => a.price - b.price);
            }
            else {
                sorted = [...state.carts].sort((a,b) => b.discount - a.discount);
            }
            return {
                ...state,
                sortType:action.payload.sortType,
                carts : sorted
            }

        case generalConstants.searchCart :
            let filteredCart = [...state.carts].filter((cart) => {
               if( cart.name.toLowerCase().indexOf(action.payload.searchText.toLowerCase()) !== -1) {
                   return cart;
               }
            });
            return {
                ...state,
                carts:filteredCart
            }

        default :
            return state;
    }
}