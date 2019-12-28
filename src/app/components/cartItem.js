import React, {useContext}  from 'react';
import defaultImage from '../images/catalog-default-img.gif';
import cartContext from '../contexts/cartContext';

 const CartItem = (props) => {
     const {cart} = props;
     const calculateCurrentPrice = (price,discount) => price - (price*discount/100).toFixed();
     const {addtoCartAction} = useContext(cartContext);
    return (
            <div className="cart-item-holder">
                <div className="cart-img">
                    <img src={cart.img_url || defaultImage}  alt="image"/>
                </div>
                <div className="cart-cont-holder">
                 <div className="cart-item-title">{cart.name}</div>
                    <div className="cart-price-container">
                    <div className="current-price">{'₹'+ calculateCurrentPrice(cart.price,cart.discount)}</div>
                    <div className="original-price">{'₹'+cart.price}</div>
                     <div className="offer">{cart.discount+'% off'}</div>
                    </div>
                    <button className="add-to-cart" onClick={() => addtoCartAction(cart)}>Add to cart</button>
                </div>
            </div>
    );
}

export default CartItem;