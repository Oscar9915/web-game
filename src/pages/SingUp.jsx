import React, { useState } from "react";
import bg from "../assets/bg-login.png";
import logo from "../assets/logo-login.png";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const SingUp = () => {
  // Estado para almacenar los valores de entrada del formulario
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    dni: "",
    celular: "",
    pais: "",
    departamento: "",
    direccion: "",
  });

  const navigate = useNavigate(); // Inicializa useNavigate

  // Maneja cambios en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envía los datos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Registro exitoso");
        // Limpia el formulario si se envía correctamente
        setFormData({
          nombres: "",
          apellidos: "",
          email: "",
          dni: "",
          celular: "",
          pais: "",
          departamento: "",
          direccion: "",
        });
        navigate("/login"); // Usa navigate para redirigir
      } else {
        console.log("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div
      className="h-[90vh] bg-cover bg-center mt-[10vh] flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="flex flex-col w-3/4 h-[60%] mx-auto justify-center items-center">
        <div>
          <img src={logo} alt="img" className="h-40" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[50%] space-y-4"
        >
          <div className="flex w-[100%] space-x-4">
            <input
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={formData.nombres}
              onChange={handleChange}
              className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] w-[50%]"
              required
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] w-[50%]"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
            required
          />
          <input
            type="text"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
            required
          />
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
          />
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={formData.pais}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
          />
          <input
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
          />
          <button
            type="submit"
            className="bg-[#10024D] text-[#2CD4E1] w-[70%] py-2 rounded-[0.5rem] mx-auto font-semibold mb-4"
          >
            Registrarse
          </button>
        </form>
      </section>
    </div>
  );
};

export default SingUp;
