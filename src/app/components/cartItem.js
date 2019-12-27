import React, {useRef} from 'react';

 const CartItem = (props) => {
     const {cart} = props;
    return (
            <div className="cart-item-holder">
                <div className="cart-img">
                    <img src={cart.img_url}  alt="image"/>
                </div>
                <div className="cart-cont-holder">
                 <div className="cart-item-title">{cart.name}</div>
                    <div className="cart-price-container">
                    <div className="current-price">{'₹'+cart.price}</div>
                    <div className="original-price">{'₹'+cart.price}</div>
                     <div className="offer">{cart.discount+'% off'}</div>
                    </div>
                    <button className="add-to-cart">Add to cart</button>
                </div>
            </div>
    );
}

export default CartItem;