import React from "react";
import { CarritoProvider } from "./context/CarritoContext";
import ProductList from "./components/ProductList";
import Form from "./components/Formulario";

function App() {
  return (
    <CarritoProvider>
      <div className="App">
        {/* Encabezado */}
        <header className="bg-dark text-white text-center py-3">
          <h1>Mi Tienda React</h1>
        </header>

        {/* Contenido principal */}
        <main className="container my-5">
          {/* Lista de productos */}
          <section className="mb-5">
            <h2 className="text-center">Productos</h2>
            <ProductList />
          </section>

          {/* Formulario */}
          <section>
            <h2 className="text-center">Registro de Usuario</h2>
            <Form />
          </section>
        </main>

        {/* Pie de página */}
        <footer className="bg-dark text-white text-center py-3 mt-5">
          <p>&copy; 2025 Mi Tienda React. Todos los derechos reservados.</p>
        </footer>
      </div>
    </CarritoProvider>
  );
}

export default App;
