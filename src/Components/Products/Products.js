import React from 'react';
import './Products.css';

function Products({ products, filterFlag }) {
  return (
    <div className="products-wrapper">
      {filterFlag && (
        <div className="filter-tab">
          <h2>Filters</h2>
          <p>Category</p>
          <p>Price Range</p>
          <p>Brand</p>
        </div>
      )}

      <div className="grid-container">
        {products.map((product) => (
          <div className="grid-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
