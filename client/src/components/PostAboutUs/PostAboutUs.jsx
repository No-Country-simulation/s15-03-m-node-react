import React from 'react';
import imagen from '../../assets/Logo-Building.png'


function PostAboutUs() {
  return (
  <section id='postaboutus' className="hero  bg-base-100 p-6" >
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={imagen} className="w-2/4 rounded-lg min-w-[27.25rem] hidden lg:block" />
      <div className='p-4 border-l-primary border-l-[1rem] '>
        <h1 className="text-5xl font-bold font-libre">Sobre nosotros</h1>
        <p className="py-6 font-worksans">En EdificioManager, nos dedicamos a revolucionar la gestión de edificios y comunidades
         residenciales con nuestra innovadora plataforma digital. Nuestro equipo, compuesto por expertos en tecnología, 
         administración y servicios inmobiliarios, ha desarrollado una solución integral que simplifica y optimiza 
         cada aspecto de la administración de edificios. Desde la comunicación efectiva con los residentes hasta
          la gestión financiera y el mantenimiento, EdificioManager está diseñado para hacer la vida más fácil 
          a administradores y residentes por igual. Nos apasiona mejorar la calidad de vida en las comunidades,
           proporcionando herramientas intuitivas, eficientes y seguras. Creemos en la tecnología como un motor
            para el cambio positivo, y estamos comprometidos a ofrecer un servicio excepcional que supere las
             expectativas de nuestros usuarios.</p>
        
      </div>
    </div>
  </section>
  )
}

export default PostAboutUs
