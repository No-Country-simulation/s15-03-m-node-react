import React from 'react'
import { Link } from "react-router-dom";
import welcome from '../../assets/Frame 123.png'



function WelcomeNavResident() {
  return (
    <section id="welcomeNavResident" className="hero  bg-base-100 p-3">
    <div className="hero-content flex-col  lg:flex-row-reverse ">
      <img className='lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  ' src={welcome} 
      alt="foto edificio" 
        
      />
      <div className="m-10">
        <h1 className="lg:text-5xl font-bold font-libre">
          Bienvenido <span className="text-primary">residente</span>
        </h1>
        <div className='flex flex-col'>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/neigbor-group">Conocé a tu grupo de vecino </Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/incident-report">Reporta incidentes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/login">Reservar espacios comunes</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/board">Ir a la sala de negocios</Link>
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/profile">Editar tu perfil</Link>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default WelcomeNavResident
        


