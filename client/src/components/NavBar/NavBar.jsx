import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-[#d9d9d9]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Caracteristicas</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Planes</a>
            </li>
            <li>
              <a href="#">Contactos</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="clients">Caracteristicas</a>
          </li>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Planes</a>
          </li>
          <li>
            <a href="#">Contactos</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="mr-6" href="#">Registrate</a>
        <a className="" href="http://localhost:5173/login">Ingresa</a>
      </div>
    </div>
  );
}

export default NavBar;
