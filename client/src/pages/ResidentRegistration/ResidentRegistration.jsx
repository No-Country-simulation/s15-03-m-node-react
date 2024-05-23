import React from 'react'

const ResidentRegistration = () => {
    return (
        <section className='min-h-screen px-3 bg-slate-400 flex items-center '>
            <form className='pb-8 md:w-[90%] md:mx-auto lg:w-[70%] xl:w-[50%]'>
                <section className=' py-5 md:flex md:justify-between'>
                    <div className=' text-center space-y-2 md:text-start md:w-96'>
                        <h1 className=' text-xl font-medium md:text-2xl lg:text-3xl'>Registro de residentes</h1>
                        <p className=' text-sm'>Por favor, complete la siguiente información para registrar su residencia en el edificio</p>
                    </div>
                    <img className='hidden md:block' src="#" alt="Logo" title="Logo" />
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Información personal del residente</h2>
                    <div className=' text-sm space-y-3 md:flex md:space-x-6 items-center md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Nombre completo</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="text"
                                autoComplete='off'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Documento de identificación (DNI, Pasaporte, etc)</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="number"
                                autoComplete='off'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Celular</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="number"
                                autoComplete='off'
                            />
                        </div>
                    </div>
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Dirección de la residencia</h2>
                    <div className='text-sm space-y-3 md:flex md:space-x-8 items-center md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="select">Número de apartamento o unidad</label>
                            <select className='py-2 outline-none rounded-md' name="select">
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="select">Piso (si aplica)</label>
                            <select className='py-2 outline-none rounded-md' name="select">
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className='py-2 space-y-2'>
                    <h2 className=' font-medium lg:text-lg'>Datos de ingreso a la plataforma</h2>
                    <div className='text-sm space-y-3 md:flex md:space-x-6 items-center md:space-y-0'>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Dirección de correo electrónico</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="email"
                                autoComplete='off'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Contraseña</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="password"
                                autoComplete='off'
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label className='text-xs pb-1 font-medium' htmlFor="fullName">Confirmar contraseña</label>
                            <input
                                className=' p-1 outline-none rounded-md border border-gray-500'
                                type="password"
                                autoComplete='off'
                            />
                        </div>
                    </div>
                </section>
                <section className='py-2 flex items-center space-x-1'>
                    <input type="checkbox" name="privacy-policy" id="privacy-policy" />
                    <label className=' text-xs' htmlFor="privacy-policy">He leído y acepto la Política de Privacidad</label>
                </section>
                <section className='py-3'>
                    <input className='btn btn-primary' type="submit" value="Enviar" />
                </section>
            </form>
        </section>
    )
}

export default ResidentRegistration