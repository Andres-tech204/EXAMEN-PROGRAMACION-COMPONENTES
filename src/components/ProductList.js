import React, { useContext } from "react";
import Product from "./ProductItem";
import { CarritoContext } from "../context/CarritoContext";

const ProductList = () => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CarritoContext);

  const products = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 },
    { id: 3, name: "Producto 3", price: 30 },
  ];

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={agregarAlCarrito}
          />
        ))}
      </div>

      <h3>Carrito:</h3>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {carrito.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - ${item.price}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => eliminarDelCarrito(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
