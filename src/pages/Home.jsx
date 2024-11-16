import React from "react";
import bg from "../assets/bg-main.png";

const Home = () => {
  return (
    <div
      className="h-[100%] bg-cover bg-center mt-[10vh] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="h-[90vh] flex justify-center items-center">
        <div className="bg-[#2CD4E1] bg-opacity-10 h-3/4 w-3/4 flex mx-auto   rounded-[3rem]">
          <img src="" alt="" srcset="" />
        </div>
      </section>
      <section className="h-[40vh] flex justify-center items-center">
        <div className="bg-[#1B0089] h-[50%] w-[60vw] flex justify-center items-center">
          <img src="" alt="image" srcset="" className="" />
        </div>
      </section>
      <section className="h-[50vh] flex justify-center items-center">
        <div className="bg-[#1B0089] h-[100%] w-[80vw] flex justify-center items-center rounded-[1rem] px-[3rem]">
          <article className="w-[100%]">
            <div className="flex">
              <div className="bg-black h-[20vh] w-[25%]">
                <img src="" alt="img" />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img src="" alt="img" />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img src="" alt="img" />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img src="" alt="img" />
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Personaliza una ciudad unica
                </h1>
                <p className="whitespace-pre-wrape text-white text-[0.8rem]">
                  Conviertete en protagonista de tu propia ciudad mientras
                  diseñas y creas una hermosa metropolis llena de vida, con
                  negocios, parques y mucho mas con el juego de contruccion de
                  negocios mas popular. Participa en los desafios de diseño y
                  saca tu creatividad a relucir.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Planificacion estrategica y gestion de recursos
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Coloca negocios estrategicamente paramantener el flujo de
                  impuestos y el crecimiento. Resuelve retos como los atascos o
                  la contaminacion. Ofrece servicicos como centrales electricas
                  y comisarias de policia. Construye grandes avenidas y tranvias
                  para evitar atascos.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Participa en eventos especiales
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Desbloquea monumentos exclusivos o prueba la alta tecnologia
                  en ciudades del futuro. Desbloquea nuevas regiones como las
                  islas Soleadas o los Flordos helados, con estilos unicos. Las
                  nuevas temporadas del concurso traen recompesas unicas.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Comercia, chatea, compite y unete a clubes.
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Diseña estrategias ganadoras con los miembros de tu club y
                  declara la guerra a otras ciudades. Durante la batalla, lanza
                  increibles desastres a tus rivales, como el tornado. Consigue
                  recompensas valiosas que podras usar en la batalla o para
                  mejorar tu ciudad.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
