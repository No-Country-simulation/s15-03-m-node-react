import React from 'react'
import CardTestimonials from '../CardTestimonials.jsx/CardTestimonials.jsx'
import ImageTestimony1 from './assets/Ellipse 10.png'
import ImageTestimony2 from './assets/Ellipse 11.png'


const Testimonials = () => {
    return (
        <section className='bg-[#F5F6FA]'>
            <h2 className=' text-center px-2 text-3xl font-medium pt-12 pb-3 xl:text-4xl'>Que dicen nuestros usuarios</h2>
            <div className="carousel carousel-center w-full p-8 space-x-6 md:w-[90%] md:mx-auto md:flex md:justify-center">
                <div className="carousel-item">
                    <CardTestimonials
                        name={'Carlos López'}
                        description={'Building Hub nos ha proporcionado las herramientas necesarias para mantener una administración transparente y organizada.'}
                        occupation={'Presidente de la Junta de Vecinos'}
                        image={ImageTestimony1}
                     />
                </div>
                <div className="carousel-item">
                    <CardTestimonials
                        name={'Lucía García'}
                        description={'Es una plataforma realmente eficiente. Nos ayudó a gestionar y organizar a todos nuestros residentes.'}
                        occupation={'Inmobiliaria MG'}
                        image={ImageTestimony2}
                     />
                </div>
            </div>
        </section>
    )
}

export default Testimonials