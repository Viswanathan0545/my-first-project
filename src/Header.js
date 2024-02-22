import React from 'react'
import Search from './search'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { Route } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Search />
        <Link to="/cart" role="button" style={{ fontSize: '48px' }}  className="icon-container">
          <TiShoppingCart />
        </Link>
    </div>
  )
}

export default Header