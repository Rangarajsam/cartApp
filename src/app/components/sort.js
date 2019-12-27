import React, { useContext} from 'react';
import cartContext from '../contexts/cartContext'
import generalConstants from '../constants/generalConstants';

const Sort = () => {
    const {sortType,sortByAction} = useContext(cartContext);
    
    return (
        <div className="sort-area">
            <h1 className="gen-heading">Sort By</h1>
            <div className={'sort-title '+(sortType === generalConstants.sortHightoLow ? 'active' : '')}
             onClick={() => sortByAction(generalConstants.sortHightoLow)}>
                Price -- High Low</div>
            <div  className={'sort-title '+(sortType === generalConstants.sortLowtoHigh ? 'active' : '')}
             onClick={() => sortByAction(generalConstants.sortLowtoHigh)}>
                Price -- Low High</div>
            <div  className={'sort-title '+(sortType === generalConstants.sortByDiscount ? 'active' : '')} 
            onClick={() => sortByAction(generalConstants.sortByDiscount)}>
                Discount</div>
        </div>
    )
}

export default Sort;