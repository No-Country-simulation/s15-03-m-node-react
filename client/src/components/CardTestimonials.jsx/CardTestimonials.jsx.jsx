import React from 'react'
import { TbTriangleInvertedFilled } from "react-icons/tb";

const CardTestimonials = ({ description, name, occupation, image }) => {
    return (
        <article className='text-center space-y-8'>
            <div className="card relative rounded-md text-[#F5F6FA] w-72 min-h-32 shadow-lg bg-[#483AE7]">
                <div className="card-body px-4 pt-4 space-y-6">
                    <p className=' text-sm'>{description}</p>
                    <TbTriangleInvertedFilled className=' absolute text-4xl left-[7.8rem] -bottom-5 text-[#483AE7]' />
                </div>
            </div>
            <div className=' text-[#000]'>
                <img className=' mx-auto mb-3 w-20' src={image} alt="Foto de perfil" />
                <h6 className=' text-lg font-semibold'>{name}</h6>
                <p className='text-sm'>{occupation}</p>
            </div>
        </article>

    )
}

export default CardTestimonials