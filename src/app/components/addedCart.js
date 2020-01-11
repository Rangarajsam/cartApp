import React, { useState, useContext } from 'react';
import defaultImage from '../images/catalog-default-img.gif';
import cartContext from '../contexts/cartContext';


const AddedCart = (props) => {
    const { cart } = props;
    const [count, setCount] = useState(1);
    const { removeFromCartAction, addCartCountAction, substractCartCountAction } = useContext(cartContext);

    const increaseCount = (cart) => {
        setCount(count + 1);
        addCartCountAction(cart)
    }
    const decreaseCount = (cart) => {
        if (count > 1) {
            setCount(count - 1);
            substractCartCountAction(cart);
        }
    }
    const calculateCurrentPrice = (price, discount) => price - (price * discount / 100).toFixed();

    return (
        <div className="added-carts-holder">
            <div className="added-carts-img">
                <img src={cart.img_url || defaultImage} alt="image" />
            </div>
            <div className="added-carts-right">
                <div className="cart-item-title">{cart.name}</div>
                <div className="added-carts-controls-holder">
                    <div className="cart-price-container added">
                        <div className="current-price">{'₹' + calculateCurrentPrice(cart.price, cart.discount)}</div>
                        <div className="original-price">{'₹' + cart.price}</div>
                        <div className="offer">{cart.discount + '% off'}</div>
                    </div>

                    <div className="added-carts-cal-holder">
                        <div className="added-carts-add" onClick={() => decreaseCount(cart)}>-</div>
                        <input className="added-carts-input" disabled type="text" value={count} onChange={(e) => setCount(e.target.value)} />
                        <div className="added-carts-add" onClick={() => increaseCount(cart)}>+</div>
                    </div>
                    <div className="remove" onClick={() => removeFromCartAction(cart)}>Remove</div>
                </div>
            </div>
        </div>
    );
}
export default AddedCart;