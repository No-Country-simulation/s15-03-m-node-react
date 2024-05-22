import React from 'react'

const CardTestimonials = ({ description, name, occupation }) => {
    return (
        <div className="card rounded-none w-72 shadow-lg bg-orange-300">
            <figure className=' rounded-full pt-4 '>
                <div className=' w-24 h-24 bg-white rounded-full'></div>
            </figure>
            <div className="card-body space-y-6">
                <p className=' text-sm'>{description}</p>
                <div className='text-center'>
                    <h3 className=" text-lg font-medium">{name}</h3>
                    <h4 className=' text-sm'>{occupation}</h4>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonials