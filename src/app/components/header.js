import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
       <header className="header">
         <div className="logo">
         <FontAwesomeIcon icon={faStar} style={{color:'rgb(253, 208, 8)'}} size="2x"/>

         </div>
       </header>
    )
};