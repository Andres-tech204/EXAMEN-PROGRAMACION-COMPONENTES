import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const docRef = await addDoc(collection(db, "users"), formData);
          console.log("Documento agregado con ID:", docRef.id);
          alert("Datos enviados correctamente");
      } catch (error) {
          console.error("Error al guardar en Firestore:", error.message);
          alert("No se pudieron guardar los datos. Revisa la consola.");
      }
  };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}Documento 
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Enviar
            </button>
        </form>
    );
};

export default Formulario;
