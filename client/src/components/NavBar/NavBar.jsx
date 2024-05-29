import React from "react";
import { Link } from 'react-router-dom';
import Logo from './assets/Logo-Building.png'

function NavBar() {
  return (
    <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a className="hover:text-primary">Caracteristicas</a></li>
      <li><a className="hover:text-primary">Sobre nosotros</a></li>
      <li><a className="hover:text-primary">Planes</a></li>
      <li><a className="hover:text-primary">Contacto</a></li>
      </ul>
    </div>
    
    <Link to="/"><img className=' w-52 ml-11 ' src={Logo} alt="Logo" /></Link>
        
  </div>
  <div className="navbar-center hidden lg:flex text-base-content font-bold  g-wider">
    <ul className="menu menu-horizontal px-1">
      <li><a className="hover:text-primary"><Link to="/register-admin">Caracteristicas</Link></a></li>
      <li><a className="hover:text-primary">Sobre nosotros</a></li>
      <li><a className="hover:text-primary">Planes</a></li>
      <li><a className="hover:text-primary">Contacto</a></li>
      
    </ul>
  </div>
  <div className="navbar-end tracking-wider">
  <a className="btn m-2 font-bold border-none bg-transparent"><Link to="/register-admin">Registrarse</Link></a>
  <a className="btn m-2 font-bold bg-secondary"><Link to="/login">Inicio sesion</Link></a>

  </div>
</div>
    
  );
}

export default NavBar;
