import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './slices/cartSlice';
import { Link } from 'react-router-dom';

function ShoppingCartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header>
        <Link to="/products">Products</Link>
      </header>
      <h1>Shopping Cart</h1>
      <p>Total items: {totalItems}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>Increase</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>Decrease</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCartPage;
