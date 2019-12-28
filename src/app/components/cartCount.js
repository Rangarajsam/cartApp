import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import cartContext from '../contexts/cartContext';

const CartCount =  (props) => {
    const {cartsAdded,history} = useContext(cartContext);
    const goToSummary = () => {
        if(cartsAdded.length > 0) {
            history.push('/summary');
        }
    }
    return (
        <div className={'cart-holder-top '+(cartsAdded.length > 0 ? 'pointer' : '')}  onClick={goToSummary}>
           {cartsAdded && cartsAdded.length > 0 && <div className="cart-alert">{cartsAdded.length}</div> }
            <FontAwesomeIcon icon={faShoppingCart} style={{color:'#fff'}} size="lg"/>
       </div>
    );
}
export default CartCount;