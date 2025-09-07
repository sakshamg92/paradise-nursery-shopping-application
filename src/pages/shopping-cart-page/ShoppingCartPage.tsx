import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ShoppingCartCard from '../../components/commom/ShoppingCartCard.tsx';
import './styles.css';
import Button from '../../components/layout/Button/Button.tsx';
import ItemsInCart from '../../interfaces/itemsInCart.ts';
import getAmountOfCart from '../../utils/getAmount.ts';
import flowerVase from '../../assets/images/shopping-cart-page/flowerVase.png'

const ShoppingCartPage = () => {
  const [totalAmount, setTotalAmount] = useState(0)   
  const items = useSelector((state: { cart: { items: ItemsInCart[] } }) => state.cart.items)
  const navigate = useNavigate()

  useEffect(() => {
    const amount = getAmountOfCart(items)
    setTotalAmount(amount)
  }, [items])

  return (
    <div className='shopping-cart-page'>
      <h2>Total Cart Amount: ${totalAmount}</h2>
      <div className="cart-items">
        {items.length ? (items.map((item, index) => {
          return (
            <ShoppingCartCard 
              key={index}
              description={item.description}
              quantity={item.quantity}
              cost={item.cost}
              name={item.name}
              image={item.image}
            />
          )
        })) : (
          <>
            <img src={flowerVase} alt="flowerVase" width={150} height={150} />
            <p>Your cart is empty</p>
          </>
        )}
      </div>
      <div className="buttons-section">
        <Button content='Continue Shopping' onClick={() => navigate('/product-listing')} />
        <Button content='Checkout' onClick={() => alert('This functionality will come back soon')} />
      </div>
    </div>
  );
};

export default ShoppingCartPage;