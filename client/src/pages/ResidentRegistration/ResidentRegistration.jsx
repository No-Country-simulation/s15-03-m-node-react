import React from 'react'
import { VALIDATIONS_FORM } from '../../configs/constants'
import useCustomForm from '../../hooks/useCustomForm'

const ResidentRegistration = () => {

    const { register, onSubmit, handleSubmit, errors } = useCustomForm()

    return (
        <section className='min-h-screen px-3 bg-slate-400 flex items-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='pb-8 md:w-[90%] md:mx-auto lg:w-[70%] xl:w-[50%]'>
                <section className=' py-5 md:flex md:justify-between'>
                    <div className=' text-center space-y-2 md:text-start md:w-96'>
                        <h1 className=' text-xl font-medium md:text-2xl lg:text-3xl'>Registro de residentes</h1>
                        <p className=' text-sm'>Por favor, complete la siguiente información para registrar su residencia en el edificio</p>
                    </div>
                    <img className='hidden md:block' src="#" alt="Logo" title="Logo" />
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Información personal del residente</h2>
                    <div className=' text-sm space-y-3 md:flex md:space-x-6 md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="name">Nombre completo</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="text"
                                autoComplete='off'
                                name='name'
                                id='name'
                                {...register('name', { ...VALIDATIONS_FORM.firstName })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.name && errors.name.message}</span>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="ID">Documento de identificación (DNI)</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="number"
                                autoComplete='off'
                                name='ID'
                                id='ID'
                                {...register('ID', { ...VALIDATIONS_FORM.documentNumber })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.ID && errors.ID.message}</span>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="phone">Celular</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="number"
                                autoComplete='off'
                                name='phone'
                                id='phone'
                                {...register('phone', { ...VALIDATIONS_FORM.phone })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.phone && errors.phone.message}</span>
                        </div>
                    </div>
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Dirección de la residencia</h2>
                    <div className='text-sm space-y-3 md:flex md:space-x-8 items-center md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="numberApartament">Número de apartamento o unidad</label>
                            <select 
                                className='py-2 outline-none rounded-md' 
                                name="numberApartament" 
                                id="numberApartament"
                                {...register('numberApartament')}
                            >
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="floor">Piso (si aplica)</label>
                            <select 
                                className='py-2 outline-none rounded-md' 
                                name="floor" 
                                id="floor" 
                                {...register('floor')}>
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Datos de ingreso a la plataforma</h2>
                    <div className='text-sm space-y-3 md:flex md:space-x-6 md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="email">Dirección de correo electrónico</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="email"
                                autoComplete='off'
                                name='email'
                                id='email'
                                {...register('email', { ...VALIDATIONS_FORM.email })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.email && errors.email.message}</span>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="password">Contraseña</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="password"
                                autoComplete='off'
                                name='password'
                                id='password'
                                {...register('password', { ...VALIDATIONS_FORM.password })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.password && errors.password.message}</span>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="password"
                                autoComplete='off'
                                name='confirmPassword'
                                id='confirmPassword'
                                {...register('confirmPassword', { ...VALIDATIONS_FORM.password })}
                            />
                            <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.confirmPassword && errors.confirmPassword.message}</span>
                        </div>
                    </div>
                </section>
                <section className='py-2 flex-col space-x-1'>
                    <div className=' flex items-center'>
                        <input 
                            type="checkbox" 
                            name="privacyPolicy" 
                            id="privacyPolicy" 
                            {...register('privacyPolicy', { ...VALIDATIONS_FORM.terms })}
                        />
                        <label className=' text-xs' htmlFor="privacyPolicy">He leído y acepto la Política de Privacidad</label>
                    </div>
                    <div>
                        <span className='text-xs text-red-600 pb-2 xl:text-sm'>{errors.privacyPolicy && errors.privacyPolicy.message}</span>
                    </div>
                </section>
                <section className='py-3'>
                    <input className='btn btn-primary' type="submit" value="Enviar" />
                </section>
            </form>
        </section>
    )
}

export default ResidentRegistration