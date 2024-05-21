import React from 'react'

const Testimonials = () => {
    return (
        <section>
            <h2 className=' text-center text-xl font-medium pt-7 pb-3 md:text-2xl lg:text-3xl'>Que dicen nuestros usuarios</h2>
            <div className="carousel carousel-center w-full p-4 space-x-6 md:flex md:justify-center">
                <div className="carousel-item">
                    <div className="card rounded-none w-72 shadow-lg bg-orange-300">
                        <figure className=' rounded-full pt-4 '>
                            <div className=' w-24 h-24 bg-white rounded-full'></div>
                        </figure>
                        <div className="card-body space-y-6">
                            <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi hic eligendi minima veniam architecto expedita explicabo quae.</p>
                            <div className='text-center'>
                                <h3 className=" text-lg font-medium">Carlos López</h3>
                                <h4 className=' text-sm'>PRESIDENTE DE LA JUNTA DE VECINOS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card rounded-none w-72 shadow-lg bg-orange-300">
                        <figure className=' rounded-full pt-4 '>
                            <div className=' w-24 h-24 bg-white rounded-full'></div>
                        </figure>
                        <div className="card-body space-y-6">
                            <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi hic eligendi minima veniam architecto expedita explicabo quae.</p>
                            <div className='text-center'>
                                <h3 className=" text-lg font-medium">Carlos López</h3>
                                <h4 className=' text-sm'>PRESIDENTE DE LA JUNTA DE VECINOS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials