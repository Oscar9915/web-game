import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import face from "../assets/fa.png";
import x from "../assets/x.png";
import inst from "../assets/in.png";
import yt from "../assets/yt.png";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B0089] h-100 pt-20">
      <div className="w-3/4 mx-auto ">
        <section className="flex justify-between">
          <div>
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/">
              <img src={face} alt="Logo" srcset="" className="h-20" />
            </a>
            <a href="https://x.com/">
              <img src={x} alt="Logo" srcset="" className="h-20" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={inst} alt="Logo" srcset="" className="h-20" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={yt} alt="Logo" srcset="" className="h-20" />
            </a>
          </div>
        </section>
        <section className="space-x-24 text-[1rem] pl-20 h-[5vh] flex items-center">
          <Link
            to="/"
            className="cursor-pointer text-white hover:text-yellow-500"
          >
            Noticias
          </Link>
          <Link
            to="/"
            className="cursor-pointer text-white hover:text-yellow-500"
          >
            Foros
          </Link>
          <Link
            to="/"
            className="cursor-pointer text-white hover:text-yellow-500"
          >
            Tiendas
          </Link>
        </section>
        <hr className="border-t-2 border-[#2CD4E1] my-4" />
        <section className="pl-10 h-[10vh]">
          <img src={logo2} alt="" srcset="" />
        </section>
        <section className="text-center">
          <h1 className="text-white">@2024 Challengue.</h1>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
