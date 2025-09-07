import React from 'react';
import plantIcon from "../../../assets/svg/product-listing-page/plant.svg";
import shoppingCartIcon from "../../../assets/svg/product-listing-page/shoppingcart.svg";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./styles.css"
import ItemsInCart from '../../../interfaces/itemsInCart';
const NavBar = () => {
  const navigate = useNavigate();
  const itemsLength = useSelector((state: { cart: { items: ItemsInCart[] } }) => state.cart.items.length)
  
  return (
    <header className="navbar">
      <div className="logoSection" onClick={() => navigate('/')} >
        <img src={plantIcon} alt="palntIcon" />
        <div className="sub-titles">
          <p>Paradise Nursery</p>
          <p>Where Green Meets Serenity</p>
        </div>
      </div>
      <nav className='nav'>
        <ul>
          <li><a onClick={() => navigate('/product-listing')}>Plant</a></li>
        </ul>
      </nav>
      <div className="cartSection" onClick={() => navigate('/shopping-cart')}>
        <p>{itemsLength}</p>
        <img src={shoppingCartIcon} alt="shopping cart"/>
      </div>
    </header>
  );
};

export default NavBar;