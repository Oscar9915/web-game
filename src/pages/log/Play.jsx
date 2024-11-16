import React, { useState } from "react";
import bg from "../../assets/bg-play.png";
import logo from "../../assets/logo-login.png";
import { Link, useNavigate } from "react-router-dom";

const Play = () => {
  const [nickname, setNickname] = useState(""); // Para manejar el estado del nickname
  const [error, setError] = useState(""); // Para manejar errores
  const [message, setMessage] = useState(""); // Para manejar el mensaje de éxito

  const navigate = useNavigate(); // Para redirigir después del login exitoso

  // Función para manejar el cambio en el input del nickname
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // Función para enviar el nickname al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos
    setMessage(""); // Limpiar mensaje previo

    // Validación simple para asegurarse de que el nickname no esté vacío
    if (!nickname) {
      setError("Por favor, ingresa un nick.");
      return;
    }

    try {
      // Enviar el nickname al backend usando fetch
      const response = await fetch("http://localhost:5000/save-nick", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1, // Cambiar esto por el user_id real si es necesario
          nick: nickname,
        }),
        credentials: "include", // Esto es para enviar cookies y manejar sesiones
      });

      const data = await response.json();

      if (response.ok) {
        // Mostrar mensaje de éxito
        setMessage(data.message);
        navigate("/jugar"); // Usa navigate para redirigir
      } else {
        // Mostrar error
        setError(data.error || "Hubo un error al guardar el nick.");
      }
    } catch (error) {
      // Manejar errores
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div
      className="h-[90vh] bg-cover bg-center mt-[10vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="bg-[#2CD4E1] bg-opacity-10 w-[30%] h-[80%] flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <img src={logo} alt="" />
          <h1 className="text-white text-[1.5rem] mb-[3rem]">
            ¿Estas preparado?
          </h1>

          {/* Mostrar errores o mensajes */}
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}

          <input
            type="text"
            name="nickname"
            placeholder="Ingresa tu nick"
            value={nickname}
            onChange={handleNicknameChange} // Actualizamos el estado del nickname
            className="bg-[#2CD4E1] bg-opacity-30 px-4 py-2 rounded-[0.5rem] mb-6 placeholder:text-center"
          />

          <button
            type="submit"
            className="bg-[#10024D] text-[#2CD4E1] w-[70%] py-2 rounded-[0.5rem] mx-auto font-semibold mb-4"
          >
            Play
          </button>
        </form>
      </section>
    </div>
  );
};

export default Play;
