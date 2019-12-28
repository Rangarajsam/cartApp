import generalConstants from '../constants/generalConstants';

const initialState = {
    carts:[],
    getItemsLoaderState:{
        fetching:false,
        fetched:false,
        error:false
    },
    sortType:'',
    searchText:'',
    isFiltered:false,
    range:{
        min:0,
        max:0
    }
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
            return {
                ...state,
                searchText:action.payload.searchText
            }

        case generalConstants.filterCart :
            return {
                ...state,
                isFiltered:action.payload.isFiltered,
                range:action.payload.range
            }

        default :
            return state;
    }
}

