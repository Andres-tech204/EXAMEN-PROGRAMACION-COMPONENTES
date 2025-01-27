import React, { createContext, useState } from "react";

// Crear el contexto del carrito
export const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (index) => {
    setCarrito((prevCarrito) => prevCarrito.filter((_, i) => i !== index));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
