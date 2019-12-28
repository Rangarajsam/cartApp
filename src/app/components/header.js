import React, {useContext} from 'react';
import {Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Search from './search';
import CartCount from './cartCount';
import cartContext from '../contexts/cartContext';

export default () => {
  const {history} = useContext(cartContext);
  const goToHome = () => {
    history.push('/');
  }
    return (
       <header className="header">
         <div className="logo" onClick={goToHome}>
         <FontAwesomeIcon icon={faStar} style={{color:'rgb(253, 208, 8)'}} size="2x"/>
        </div>
        <div className="header-right-area">
        { history.location.pathname !== '/summary' &&  <Search></Search> }
        { history.location.pathname !== '/summary' && <CartCount></CartCount> }
        
        </div>
       </header>
    )
};