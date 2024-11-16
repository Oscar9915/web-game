import React from "react";
import bg from "../../assets/bg-play.png";
import pj1 from "../../assets/pj1.png";
import pj2 from "../../assets/pj2.png";
import pj3 from "../../assets/pj3.png";
import pj4 from "../../assets/pj4.png";
import hola from "../../assets/hola.png";
import { Link } from "react-router-dom";

const Jugar = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center mt-[10vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="bg-[#2CD4E1] bg-opacity-10 w-[40%] h-[80%] flex flex-col justify-center items-center">
        <div className="flex w-[100%] justify-center flex-col">
          <div className="mx-auto mr-20">
            <img src={hola} alt="img" />
          </div>
          <div className="flex justify-center">
            <div className="w-[30%]">
              <img src={pj4} alt="img" className="h-16 w-16" />
              <img src={pj1} alt="img" className="h-16 w-16 ml-8 mt-2" />
            </div>
            <div className="w-[30%]">
              <img src={pj3} alt="img" className="h-16 w-16 ml-12" />
              <img src={pj2} alt="img" className="h-16 w-16 mt-2" />
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <Link
            to="/newgame"
            className="bg-[#10024D] px-20 text-center text-[#2CD4E1] w-[40%] py-2 rounded-[0.5rem] mx-auto font-semibold mb-4 flex justify-center items-center hover:bg-red-700 transition-colors"
          >
            Nuevo <br /> Juego
          </Link>

          <button 
  className="bg-[#10024D] px-20 text-center text-[#2CD4E1] w-[40%] py-2 rounded-[0.5rem] mx-auto font-semibold mb-4 flex justify-center items-center hover:bg-red-700 transition-colors"
>
  <a 
    href="https://www.doctums.com/about" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Sobre <br /> DocTums
  </a>
</button>

        </div>
      </section>
    </div>
  );
};

export default Jugar;
