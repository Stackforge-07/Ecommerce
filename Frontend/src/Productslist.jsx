import React from 'react';

function Productslist({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        const imageUrl = product.thumbnail || product.images?.[0] || '';

        return (
          <div key={product.id} className="product-card">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={product.title}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '14px',
                }}
              />
            )}

            <div className="product-title">{product.title}</div>

            <div className="product-description">{product.description}</div>

            <div style={{ marginTop: '12px' }}>
              <div><strong>Category:</strong> {product.category}</div>
              <div><strong>Brand:</strong> {product.brand}</div>
              <div><strong>Price:</strong> ${product.price}</div>
              <div><strong>Rating:</strong> {product.rating}</div>
              <div><strong>Stock:</strong> {product.stock}</div>
              <div><strong>Availability:</strong> {product.availabilityStatus}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Productslist;