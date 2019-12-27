import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Search from './search';

export default () => {
    return (
       <header className="header">
         <div className="logo">
         <FontAwesomeIcon icon={faStar} style={{color:'rgb(253, 208, 8)'}} size="2x"/>
        </div>
        <div className="header-right-area">
          <Search></Search>
          
        <div className="cart-holder-top">
          <div className="cart-alert">1</div>
           <FontAwesomeIcon icon={faShoppingCart} style={{color:'#fff'}} size="lg"/>
         </div>
        </div>
       </header>
    )
};