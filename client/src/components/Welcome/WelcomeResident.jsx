import React from 'react'
import welcomeResi from '../../assets/Frame 123.png'
import { Link } from "react-router-dom";


function WelcomeResident() {
  return (
    <section id="welcomeResident" className="hero  bg-base-100 p-3">
    <div className="hero-content flex-col  lg:flex-row-reverse ">
      <img className='lg:max-h-[44rem] pt-14 min-w-[35rem] hidden lg:block border-primary  ' src={welcomeResi} 
      alt="foto edificio" 
        
      />
      <div className="m-10">
        <h1 className="text-5xl font-bold font-libre">
          Bienvenido <span className="text-primary">residente</span>
        </h1>
        <p className="py-6 font-worksans ">
        ¡Bienvenido a Building Hub, la herramienta definitiva para la administración eficiente 
        de tu edificio! Como administrador, tendrás acceso a una plataforma robusta y fácil de 
        usar, diseñada para simplificar todas tus tareas de gestión. Con Building Hub, podrás 
        gestionar perfiles de residentes, enviar anuncios y comunicados, y coordinar la reserva 
        de espacios comunes como salas de eventos y gimnasios. Además, podrás registrar y dar 
        seguimiento a solicitudes de mantenimiento, asegurando que todos los problemas se resuelvan 
        de manera rápida y efectiva. Con Building Hub, mejorarás la organización, comunicación y eficiencia 
        en tu comunidad, creando un entorno más armonioso y bien gestionado.
        </p>
        
        <Link className="btn m-2 font-bold font-worksans bg-secondary" to="/welcome-nav-resident">Empezar recorrido</Link>

      </div>
    </div>
  </section>
  )
}

export default WelcomeResident
