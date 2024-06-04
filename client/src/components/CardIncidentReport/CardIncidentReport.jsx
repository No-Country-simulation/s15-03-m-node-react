import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const CardIncidentReport = () => {
    return (
        <article className='p-4 bg-base-100 space-y-3 border border-primary rounded-md lg:p-6'>
            <div className='flex items-center justify-between'>
                <h6 className=' font-semibold lg:text-xl'>Ascensor averiado</h6>
                <div className=' flex items-center text-xl space-x-3'>
                    <button><RiEdit2Fill className=' text-blue-500'/></button>
                    <button><RiDeleteBin6Line className=' text-red-500' /></button>
                </div>  
            </div>
            <div className=' space-y-2 md:flex'>
                <figure className=' flex flex-col items-center md:m-4'>
                    <img className=' rounded-full w-14 h-14 bg-black border- border-primary' src="#" alt="Foto perfil" />
                    <figcaption className=' font-semibold text-sm py-1'>Sebastián</figcaption>
                    <small>5 A</small>
                </figure>
                <div className=' text-sm text-base-content md:m-4 lg:text-base'>
                    <p>Hola, quiero reportar que el ascensor del edificio se ha averiado. Esta mañana, al intentar usarlo, noté que no respondía y parece estar atascado en el tercer piso. Es importante que esto se repare lo antes posible, ya que muchos residentes dependen del ascensor para moverse por el edificio. Agradezco su pronta atención a este problema.</p>
                    <p className=' text-xs py-2 text-[#7C89B4]'>25/04/2024</p>
                </div>
            </div> 
            <div className=' flex justify-end mt-0'>
                <button className='shadow-lg border text-sm border-primary bg-base-200 py-1 rounded-md font-semibold px-4 text-primary'>Ver más</button>
            </div>
        </article>
    )
}

export default CardIncidentReport