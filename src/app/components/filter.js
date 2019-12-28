import React, {useState,useContext} from 'react';
import cartContext from '../contexts/cartContext';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Filter = () => {
    const {carts,filterCartAction} = useContext(cartContext);
    let defaultRange ={};
    let priceArr = [];
    carts.forEach((cart) => {
        priceArr.push(cart.price);
    });
    defaultRange.min = Math.min.apply(null,priceArr);
    defaultRange.max = Math.max.apply(null,priceArr);
    console.log('priceArr',priceArr);
    console.log('defaultRange',defaultRange);
    const [inputRange,setInputRange] = useState({ min: 100, max:150 });
    const applyFilter = () => {
       console.log('range',inputRange);
       filterCartAction(inputRange,true);
    }
    return (
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
    )
}

export default Filter;