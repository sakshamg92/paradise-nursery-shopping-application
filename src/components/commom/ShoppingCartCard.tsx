import React from 'react';
import Button from '../layout/Button/Button.tsx';
import './styles.css';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity} from '../../cartSlice.ts';
import ItemsInCart from '../../interfaces/itemsInCart.ts';



const ShoppingCartCard = ({cost, description, image, name, quantity}: ItemsInCart) => {
  
  const dispache = useDispatch()

  const handleDeleteItem = (item: ItemsInCart) => {
    dispache(removeFromCart(item))
  }

  const handleIncreaseQuantity = (item: ItemsInCart) => {
    dispache(increaseItemQuantity(item))
  }

  const handleDecreaseQuantity = (item: ItemsInCart) => {
    dispache(decreaseItemQuantity(item))
  }


  return (
    <div className='shopping-cart-card'>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="content-container">
        <h2>{name}</h2>
        <p>${cost}</p>
        <div className="quantity-control">
          <button onClick={() => handleDecreaseQuantity({cost: cost, name: name, image: image, description: description, quantity: quantity})} >-</button>
          <p>{quantity}</p>
          <button onClick={() => handleIncreaseQuantity({cost: cost, name: name, image: image, description: description, quantity: quantity})} >+</button>
        </div>
        <p>Total: ${Number(cost)*quantity}</p>
        <Button onClick={() => handleDeleteItem({cost: cost, name: name, image: image, description: description, quantity: quantity})} messageType='error' content='Delete' />
      </div>
    </div>
  );
};

export default ShoppingCartCard;

