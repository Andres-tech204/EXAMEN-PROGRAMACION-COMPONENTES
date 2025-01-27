import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Precio: ${product.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
