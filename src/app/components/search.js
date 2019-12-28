 import React, {useState,useContext} from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSearch } from '@fortawesome/free-solid-svg-icons';
 import cartContext from '../contexts/cartContext';

 const Search = () => {
     const [search,setSearch] = useState(false);
       const {searchCartAction} = useContext(cartContext);
     const searchCart = (text) => {
        searchCartAction(text);
     }
     const showSearch = () => {
        if(search) {
         searchCartAction('');
        }
      setSearch(!search)
     }
     return (
        <div className="search-holder">
            { search && <input type="text" className="search-box" onChange={(e) => searchCart(e.target.value)} autoFocus/> }
             <FontAwesomeIcon icon={faSearch} style={{color:'#fff',cursor:'pointer'}} size="lg" onClick={showSearch}/>
        </div>
     )
 }
 
 export default Search;