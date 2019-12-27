import generalConstants from '../constants/generalConstants';

const initialState = {
    carts:[],
    getItemsLoaderState:{
        fetching:false,
        fetched:false,
        error:false
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

        default :
            return state;
    }
}