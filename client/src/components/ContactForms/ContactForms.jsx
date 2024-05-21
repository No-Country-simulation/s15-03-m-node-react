import React from 'react'

const ContactForms = () => {
    return (
        <section>
            <div className='lg:flex items-center md:w-[70%] md:mx-auto lg:w-[75%] lg:space-x-5'>
                <form className='px-3 lg:w-[50%]'>
                    <h2 className='text-center text-xl font-medium pt-7 pb-3 md:text-2xl lg:text-3xl lg:text-start'>Contáctate con nosotros</h2>
                    <p className=' text-center text-sm lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatem quis molestiae animi ab enim odio, non accusantium voluptates ipsum sequi officiis nihil</p>
                    <section className='py-7 space-y-2'>
                        <div className=' text-sm space-y-3'>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="fullName">Nombre y apellido</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="text"
                                    autoComplete='off'
                                />
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="fullName">Teléfono</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="number"
                                    autoComplete='off'
                                />
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="fullName">Email</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="email"
                                    autoComplete='off'
                                />
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="fullName">Mensaje</label>
                                <textarea
                                    className='p-1 outline-none rounded-md border border-gray-500 resize-none'
                                    autoComplete='off'
                                    rows={5}
                                />
                            </div>
                        </div>
                        <div className='py-3'>
                            <input className='btn btn-primary' type="submit" value="Enviar" />
                        </div>
                    </section>
                </form>
                <figure className=' hidden lg:block w-[50%]'>
                    <img src="#" alt="Imagen del formulario de contacto" />
                </figure>
            </div>
        </section>
    )
}

export default ContactForms