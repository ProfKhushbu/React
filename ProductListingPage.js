import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './slices/cartSlice';
import { Link } from 'react-router-dom';

function ProductListingPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <header>
        <Link to="/cart">Cart</Link>
      </header>
      <h1>Product Listing</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
