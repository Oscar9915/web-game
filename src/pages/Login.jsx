import React, { useState } from "react";
import bg from "../assets/bg-login.png";
import logo from "../assets/logo-login.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Muestra el mensaje del backend
        const { userId } = data; // Asegúrate de que el backend devuelve el userId

        // Verificar si el usuario tiene un nick
        const nickResponse = await fetch(
          `http://localhost:5000/get-nick/${userId}`
        );
        const nickData = await nickResponse.json();

        // Cambié la verificación de nick
        if (nickData.nick) {
          // Si tiene un nick, redirigir a la página correspondiente
          navigate("/jugar");
        } else {
          // Si no tiene un nick, redirigir a la página para crear el nick
          navigate("/play");
        }
      } else {
        console.error(data.message); // Muestra el mensaje de error del backend
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div
      className="h-[90vh] bg-cover bg-center mt-[10vh] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className=" h-[60%] w-[80vw] mx-auto flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-60" />
        </div>
        <form onSubmit={handleSubmit} className="w-[50%] flex justify-center">
          <div className="w-[55%] flex flex-col justify-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6"
            />
            <button
              type="submit"
              className="bg-[#10024D] text-[#2CD4E1] w-[70%] py-2 rounded-[0.5rem] mx-auto font-semibold mb-4"
            >
              Iniciar Sesión
            </button>
            <h1 className="text-white text-center mb-6">
              ¿Olvidaste tu contraseña?
            </h1>
            <div className="flex space-x-4 mx-auto">
              <h1 className="text-white">¿No tienes una cuenta?</h1>
              <Link className="text-[#2CD4E1] font-semibold" to="/singup">
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
