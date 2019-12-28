import React, {useState,useContext} from 'react';
import cartContext from '../contexts/cartContext';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Filter = (props) => {
    const {carts,filterCartAction} = useContext(cartContext);
    let defaultRange ={};
    let priceArr = [];
    carts.forEach((cart) => {
        priceArr.push(cart.price);
    });
    defaultRange.min = Math.min.apply(null,priceArr);
    defaultRange.max = Math.max.apply(null,priceArr);
    const [inputRange,setInputRange] = useState({ min: 100, max:250 });
    const applyFilter = () => {
       filterCartAction(inputRange,true);
       if( props.cancelFn) {
        props.cancelFn(false);
       }
    }
    return (
        <div className="filter-outer-holder">
       <div className="filter-holder">
           <div className="slider-label">Price</div>
           <InputRange
            formatLabel={value => `₹${value}`}
            maxValue={1000}
            minValue={100}
            value={inputRange}
            onChange={value => setInputRange( value )} />
            <button className="add-to-cart apply" onClick={applyFilter}>Apply</button>
        </div>
            {props.cancelFn && <div className="popup-footer">
                <button className="cancel-btn" onClick={() => props.cancelFn(false)}>Cancel</button>
                <button className="cancel-btn apply" onClick={applyFilter}>Apply</button>
            </div> }
        </div>
    )
}

export default Filter;