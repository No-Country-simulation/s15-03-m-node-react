import React from 'react'
import { Link } from "react-router-dom";
import welcome from '../../assets/Frame 123.png'



function WelcomeNavigation() {
  return (
    <section id="welcomeResident" className="hero  bg-base-100 p-3">
    <div className="hero-content flex-col  lg:flex-row-reverse ">
      <img className='lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  ' src={welcome} 
      alt="foto edificio" 
        
      />
      <div className="m-10">
        <h1 className="text-5xl font-bold font-libre">
          Bienvenido <span className="text-primary">residente</span>
        </h1>
        <div className='flex flex-col'>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/list-admin">Conocé a tu grupo de vecino </Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/login">Reporta incidentes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/login">Reservar espacios comunes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/board">Ir a la sala de negocios</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/profile">Editar tu perfil</Link>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default WelcomeNavigation
        


