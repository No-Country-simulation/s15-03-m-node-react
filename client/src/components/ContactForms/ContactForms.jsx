import React from 'react'
import useCustomForm from "../../hooks/useCustomForm";
import { VALIDATIONS_FORM } from '../../configs/constants'
import Image from './assets/image-contact-form.png'

const ContactForms = () => {

    const { register, handleSubmit, watch, errors, onSubmit } = useCustomForm()

    return (
        <section className=' bg-[#F5F6FA] pt-14 pb-9 lg:pb-16'>
            <div className='lg:flex items-center md:mx-auto lg:space-x-5 lg:pl-12 xl:pl-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-3 md:w-[70%] md:mx-auto'>
                    <h2 className='text-center text-[#171925] text-2xl font-medium pt-7 pb-3 lg:text-3xl xl:text-4xl lg:text-start'>Contáctate con nosotros</h2>
                    <p className=' text-center text-sm lg:text-start text-[#000]'>Si sos Administrador/Propietario/Inquilino y necesitas ayuda. Por favor, completa el formulario y nos pondremos en contacto a la brevedad.</p>
                    <section className='py-5 space-y-2'>
                        <div className=' text-sm space-y-1 text-[#000]'>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-bold' htmlFor="fullName">Nombre</label>
                                <input
                                    className='p-1 outline-none rounded-md border bg-[#EEF2FF] border-[#483AE7]'
                                    type="text"
                                    name='name'
                                    id='name'
                                    autoComplete='off'
                                    {...register('name', { ...VALIDATIONS_FORM.firstName })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.name && errors.name.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-bold' htmlFor="phone">Teléfono</label>
                                <input
                                    className='p-1 outline-none rounded-md border bg-[#EEF2FF] border-[#483AE7]'
                                    type="number"
                                    autoComplete='off'
                                    name='phone'
                                    id='phone'
                                    {...register('phone', { ...VALIDATIONS_FORM.phone })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.phone && errors.phone.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-bold' htmlFor="email">Email</label>
                                <input
                                    className='p-1 outline-none rounded-md border bg-[#EEF2FF] border-[#483AE7]'
                                    type="email"
                                    autoComplete='off'
                                    name='email'
                                    id='email'
                                    {...register('email', { ...VALIDATIONS_FORM.email })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.email && errors.email.message}</span>
                            </div>
                            <div className=' flex flex-col'>
                                <label className='text-xs pb-1 font-bold' htmlFor="message">Mensaje</label>
                                <textarea
                                    className='p-1 outline-none rounded-md border bg-[#EEF2FF] border-[#483AE7] resize-none'
                                    autoComplete='off'
                                    rows={5}
                                    name='message'
                                    id='message'
                                    {...register('message', { ...VALIDATIONS_FORM.message })}
                                />
                                <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.message && errors.message.message}</span>
                            </div>
                        </div>
                        <div>
                            <input className='py-1 px-4 text-sm rounded-md bg-[#483AE7] text-[#fff]' type="submit" value="Enviar mensaje" />
                        </div>
                    </section>
                </form>
                <figure className='hidden lg:block'>
                    <img className=' lg:max-h-[36rem] pt-14 border-b-[1rem] border-[#483AE7]' src={Image} alt="Mujer con auriculares" />
                </figure>
            </div>
        </section>
    )
}

export default ContactForms