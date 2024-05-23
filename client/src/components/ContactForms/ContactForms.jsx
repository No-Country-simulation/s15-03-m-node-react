import React from 'react'
import useCustomForm from "../../hooks/useCustomForm";
import { VALIDATIONS_FORM } from '../../configs/constants'

const ContactForms = () => {

    const { register, handleSubmit, watch, errors, onSubmit } = useCustomForm()

    return (
        <section>
            <div className='lg:flex items-center md:w-[70%] md:mx-auto lg:w-[75%] lg:space-x-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-3 lg:w-[50%]'>
                    <h2 className='text-center text-xl font-medium pt-7 pb-3 md:text-2xl lg:text-3xl lg:text-start'>Contáctate con nosotros</h2>
                    <p className=' text-center text-sm lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatem quis molestiae animi ab enim odio, non accusantium voluptates ipsum sequi officiis nihil</p>
                    <section className='py-7 space-y-2'>
                        <div className=' text-sm space-y-3'>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="fullName">Nombre</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="text"
                                    name='name'
                                    id='name'
                                    autoComplete='off'
                                    {...register('name', { ...VALIDATIONS_FORM.firstName })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.name && errors.name.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="phone">Teléfono</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="number"
                                    autoComplete='off'
                                    name='phone'
                                    id='phone'
                                    {...register('phone', { ...VALIDATIONS_FORM.phone })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.phone && errors.phone.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="email">Email</label>
                                <input
                                    className='p-1 outline-none rounded-md border border-gray-500'
                                    type="email"
                                    autoComplete='off'
                                    name='email'
                                    id='email'
                                    {...register('email', { ...VALIDATIONS_FORM.email })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.email && errors.email.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-medium' htmlFor="message">Mensaje</label>
                                <textarea
                                    className='p-1 outline-none rounded-md border border-gray-500 resize-none'
                                    autoComplete='off'
                                    rows={5}
                                    name='message'
                                    id='message'
                                    {...register('message', { ...VALIDATIONS_FORM.message })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.message && errors.message.message}</span>
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