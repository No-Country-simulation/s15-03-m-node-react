import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const CardIncidentReport = ({ residentName, profileImage, reportTitle, description, apartament, date }) => {
    return (
        <article className='p-4 bg-base-100 space-y-3 border border-primary rounded-md lg:p-6'>
            <div className='flex items-center justify-between'>
                <h6 className=' font-semibold lg:text-xl'>{reportTitle}</h6>
                <div className=' flex items-center text-xl space-x-3'>
                    <button><RiEdit2Fill className=' text-blue-500'/></button>
                    <button><RiDeleteBin6Line className=' text-red-500' /></button>
                </div>  
            </div>
            <div className=' space-y-2 md:flex'>
                <figure className=' flex flex-col items-center md:m-4'>
                    <div className='w-14 rounded-full'>
                        <img className='w-full object-cover' src={profileImage} alt={`${residentName}`} />
                    </div>
                    <figcaption className=' font-semibold text-sm py-1'>{residentName}</figcaption>
                    <small>{apartament}</small>
                </figure>
                <div className=' text-sm text-base-content md:m-4 lg:text-base'>
                    <p>{description}</p>
                    <p className=' text-xs pt-2 text-[#7C89B4]'>{date}</p>
                </div>
            </div> 
            <div className=' flex justify-end mt-0'>
                <button className='shadow-lg border text-sm border-primary bg-base-200 py-1 rounded-md font-semibold px-4 text-primary'>Ver más</button>
            </div>
        </article>
    )
}

export default CardIncidentReport