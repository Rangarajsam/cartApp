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
        console.log('service',response)
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