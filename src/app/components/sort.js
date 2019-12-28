import React, { useContext, useState} from 'react';
import cartContext from '../contexts/cartContext'
import generalConstants from '../constants/generalConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Filter from './filter';
const Sort = () => {
    const {sortType,sortByAction} = useContext(cartContext);
    const [phoneSort,setPhoneSort] = useState(false);
    const [sortTypePhone,setPhoneSortType] = useState(generalConstants.sortHightoLow);
    const [phoneFilter,setPhoneFilter] = useState(false)
    const applySort = () => {
        sortByAction(sortTypePhone);
        setPhoneSort(false);
    }
    return (
        <div className="sort-area">
          <div className="phone-controls-holder">
                <h1 className="gen-heading phone" onClick={() => setPhoneSort(true)}>
                <FontAwesomeIcon icon={faSort} style={{color:'#000'}} size="lg"/>
                    Sort</h1>
                <h1 className="gen-heading phone" onClick={() => setPhoneFilter(true)}>
                <FontAwesomeIcon icon={faFilter} style={{color:'#000'}} size="lg"/>
                    Filter</h1>
                   { phoneSort && <div className="phone-overlay">
                        <div className="phone-popup">
                        <h1 className="gen-heading phone">Sort Options</h1>
                        <div className="radio-holder">
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value={sortType}
                            checked={sortTypePhone === generalConstants.sortHightoLow}
                            onChange={() => setPhoneSortType(generalConstants.sortHightoLow)}
                            />
                            Price -- High Low
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value={sortType}
                            checked={sortTypePhone === generalConstants.sortLowtoHigh}
                            onChange={() => setPhoneSortType(generalConstants.sortLowtoHigh)}
                            />
                            Price -- Low High
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value={sortType}
                            checked={sortTypePhone === generalConstants.sortByDiscount}
                            onChange={() => setPhoneSortType(generalConstants.sortByDiscount)}
                            />
                            Discount
                        </label>
                        </div>
                        <div className="popup-footer">
                            <button className="cancel-btn" onClick={() => setPhoneSort(false)}>Cancel</button>
                            <button className="cancel-btn apply" onClick={applySort}>Apply</button>
                        </div>
                        </div>
                    </div>
            }
            { phoneFilter && <div className="phone-overlay">
                    <div className="phone-popup">
                    <h1 className="gen-heading phone">Sort Options</h1>
                    <Filter cancelFn={setPhoneFilter} ></Filter>
                    </div>
                </div>
            }
            
            </div>
            
          <div className="web-controls-holder">
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
        </div>
    )
}

export default Sort;