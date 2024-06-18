import React from 'react'
import { Link } from "react-router-dom";
import welcomeNavAdmi from '../../assets/Frame 122.png'



function WelcomeNavAdmin() {
  return (
    <section id="welcomeNavAdmin" className="hero  bg-base-100 p-3">
    <div className="hero-content flex-col  lg:flex-row-reverse ">
      <img className='lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  ' src={welcomeNavAdmi} 
      alt="foto edificio" 
        
      />
      <div className="m-10">
        <h1 className="sm:text-2xl lg:text-5xl p-3 font-bold font-libre">
          Bienvenido <span className="text-primary">Administrador</span>
        </h1>
        <p className='sm:text-xl p-3'>¡Bienvenido a Building hub, la solucion integral para la administracion eficiente
            de tu comunidad! Nuestra aplicacion esta diseñada para facilitar todas las tareas
            relacionadas con la gestion de edificios.
        </p>
        <div className='flex flex-col'>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/dashboard">Ir al paneldel administrador </Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/pending">Aceptar a nuevos recidentes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/login">Reservar espacios comunes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/board">Ir a la sala de negocios</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/profile">Editar tu perfil</Link>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default WelcomeNavAdmin