import React from 'react'
import CardTestimonials from '../CardTestimonials.jsx/CardTestimonials.jsx'

const Testimonials = () => {
    return (
        <section>
            <h2 className=' text-center text-xl font-medium pt-7 pb-3 md:text-2xl lg:text-3xl'>Que dicen nuestros usuarios</h2>
            <div className="carousel carousel-center w-full p-4 space-x-6 md:flex md:justify-center">
                <div className="carousel-item">
                    <CardTestimonials
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi hic eligendi minima veniam architecto expedita explicabo quae'}
                        name={'Carlos López'}
                        occupation={'PRESIDENTE DE LA JUNTA DE VECINOS'}
                     />
                </div>
                <div className="carousel-item">
                    <CardTestimonials
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi hic eligendi minima veniam architecto expedita explicabo quae'}
                        name={'Carlos López'}
                        occupation={'PRESIDENTE DE LA JUNTA DE VECINOS'}
                     />
                </div>
            </div>
        </section>
    )
}

export default Testimonials